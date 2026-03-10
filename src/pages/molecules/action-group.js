import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function ActionBar() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Action Bar
      </h1>
      <p class="text-sm text-text-muted">
        Page-level action container used below header inside workspace.
      </p>
    </div>

    ${componentClassSection()}
    ${structureSection()}
    ${guidelinesSection()}
  `

  attachCopy(el)

  /* previewTabs mount */
  const markup = `
<div class="erp-action-bar">

  <span class="erp-action-bar-title">
    General Settings
  </span>

  <span class="erp-action-bar-subtitle">
    Tenant-scope configuration — applies to all business units
  </span>

  <span class="erp-unsaved">
    <span class="erp-unsaved-dot"></span>
    <span>Unsaved Changes</span>
  </span>

  <button class="erp-btn-ghost">
    Discard
  </button>

  <div class="erp-action-bar-divider"></div>

  <button class="erp-btn erp-btn-secondary">
    Save Draft
  </button>

  <button class="erp-btn erp-btn-primary">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
      <path d="M10 2H3L1 4v6a1 1 0 001 1h9a1 1 0 001-1V3a1 1 0 00-1-1zM6 9a2 2 0 110-4 2 2 0 010 4z"/>
    </svg>
    Save & Apply
  </button>

  <button class="erp-btn erp-btn-success">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
      <path d="M2 6l3 3 5-5"/>
    </svg>
    Activate
  </button>

</div>
  `

  const mount = el.querySelector("#actionbar-preview")
  mount.appendChild(previewTabs(markup))

  return el
}

/* ============================= */
/* Component Class */
/* ============================= */

function componentClassSection() {
  return `
    <section>
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
    </section>
  `
}

/* ============================= */
/* Structure */
/* ============================= */

function structureSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Structure
      </h2>

      <div id="actionbar-preview"></div>

    </section>
  `
}

/* ============================= */
/* Guidelines */
/* ============================= */

function guidelinesSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Usage Guidelines
      </h2>

      <div class="text-xs text-text-muted space-y-2 border border-border rounded-sm p-6 bg-bg-panel">
        <div>• Use once per workspace page</div>
        <div>• Primary action should include icon if high-impact</div>
        <div>• Success action may include confirmation icon</div>
        <div>• Group logical actions with divider</div>
        <div>• Subtitle pushes actions to right via auto margin</div>
      </div>
    </section>
  `
}