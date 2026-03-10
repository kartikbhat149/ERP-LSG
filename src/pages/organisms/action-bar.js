import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function ActionBar() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  /* Header */
  const header = document.createElement("div")
  header.innerHTML = `
    <h1 class="text-2xl font-semibold text-text-primary mb-2">
      Action Bar
    </h1>
    <p class="text-sm text-text-muted">
      Page-level action container used below header inside workspace.
      Demonstrates unsaved state and action enablement.
    </p>
  `
  el.appendChild(header)

  el.appendChild(componentClassSection())
  el.appendChild(structureSection())
  el.appendChild(guidelinesSection())

  attachCopy(el)

  /* ============================= */
  /* Preview Mount */
  /* ============================= */

  const markup = `
<div class="erp-action-bar">

  <span class="erp-action-bar-title">
    General Settings
  </span>

  <span class="erp-action-bar-subtitle">
    Tenant-scope configuration — applies to all business units
  </span>

  <span class="erp-unsaved" data-unsaved hidden>
    <span class="erp-unsaved-dot"></span>
    <span>Unsaved Changes</span>
  </span>

  <button class="erp-btn erp-btn-secondary" data-discard disabled>
    Discard
  </button>

  <div class="erp-action-bar-divider"></div>

  <button class="erp-btn erp-btn-primary" data-save disabled>
    Save Changes
  </button>

  <button class="erp-btn erp-btn-success" data-activate>
    Activate
  </button>

</div>

<div class="p-4 border-t border-border bg-bg-section">
  <button class="erp-btn erp-btn-secondary" data-toggle-unsaved>
    Toggle Unsaved State
  </button>
</div>
  `.trim()

  const mount = el.querySelector("#actionbar-preview")
  const preview = previewTabs(markup)
  mount.appendChild(preview)

  attachActionBarLogic(preview)

  return el
}

/* ============================= */
/* Component Class */
/* ============================= */

function componentClassSection() {
  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Component Class
    </h2>

    <div class="border border-border rounded-sm p-4 bg-bg-panel flex items-center gap-6">
      <div class="font-mono text-lg font-semibold text-text-primary">
        <code>.erp-action-bar</code>
      </div>

      <button data-copy="erp-action-bar"
        class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto">
        Copy
      </button>
    </div>
  `
  return section
}

/* ============================= */
/* Structure */
/* ============================= */

function structureSection() {
  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Structure
    </h2>

    <div id="actionbar-preview"></div>
  `

  return section
}

/* ============================= */
/* Interaction */
/* ============================= */

function attachActionBarLogic(root) {

  const unsavedIndicator = root.querySelector("[data-unsaved]")
  const saveBtn = root.querySelector("[data-save]")
  const discardBtn = root.querySelector("[data-discard]")
  const toggleBtn = root.querySelector("[data-toggle-unsaved]")

  let isDirty = false

  const updateState = () => {

    if (isDirty) {
      unsavedIndicator.hidden = false
      saveBtn.disabled = false
      discardBtn.disabled = false
    } else {
      unsavedIndicator.hidden = true
      saveBtn.disabled = true
      discardBtn.disabled = true
    }

  }

  toggleBtn?.addEventListener("click", () => {
    isDirty = !isDirty
    updateState()
  })

  discardBtn?.addEventListener("click", () => {
    isDirty = false
    updateState()
  })

  saveBtn?.addEventListener("click", () => {
    isDirty = false
    updateState()
  })

  updateState()

}

/* ============================= */
/* Guidelines */
/* ============================= */

function guidelinesSection() {
  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Usage Guidelines
    </h2>

    <div class="text-xs text-text-muted space-y-2 border border-border rounded-sm p-6 bg-bg-panel">
      <div>• Used once per workspace page below header</div>
      <div>• Title is uppercase and concise</div>
      <div>• Subtitle pushes actions to right via auto margin</div>
      <div>• Unsaved indicator appears only when state is dirty</div>
      <div>• Save and Discard enabled only when unsaved</div>
      <div>• Do not overload with more than 3 primary actions</div>
    </div>
  `

  return section
}