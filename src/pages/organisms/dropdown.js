import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function DropdownMenu() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  const header = document.createElement("div")
  header.innerHTML = `
    <h1 class="text-2xl font-semibold text-text-primary mb-2">
      Dropdown Menu
    </h1>
    <p class="text-sm text-text-muted">
      Compact contextual action menu used for row-level or header-level actions.
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
<div class="erp-dropdown relative inline-block">

  <button class="erp-btn erp-btn-secondary ml-10" data-dropdown-trigger>
    Actions
  </button>

  <div class="erp-dropdown-menu hidden absolute mt-2">

    <div class="erp-dropdown-item">Edit</div>
    <div class="erp-dropdown-item">Duplicate</div>

    <div class="erp-dropdown-divider"></div>

    <div class="erp-dropdown-item">Archive</div>

  </div>

</div>
  `.trim()

  const mount = el.querySelector("#dropdown-preview")
  const preview = previewTabs(markup)
  mount.appendChild(preview)

  attachDropdownLogic(preview)

  return el
}

/* ============================= */

function componentClassSection() {
  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Component Class
    </h2>

    <div class="border border-border rounded-sm p-4 bg-bg-panel flex items-center gap-6">
      <div class="font-mono text-lg font-semibold text-text-primary">
        <code>.erp-dropdown</code>
      </div>

      <button data-copy="erp-dropdown"
        class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto">
        Copy
      </button>
    </div>
  `
  return section
}

/* ============================= */

function structureSection() {
  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Structure
    </h2>

    <div id="dropdown-preview"></div>
  `

  return section
}

/* ============================= */
/* Dropdown Behavior */
/* ============================= */

function attachDropdownLogic(root) {

  const trigger = root.querySelector("[data-dropdown-trigger]")
  const menu = root.querySelector(".erp-dropdown-menu")
  const dropdown = root.querySelector(".erp-dropdown")

  trigger?.addEventListener("click", (e) => {
    e.stopPropagation()
    menu.classList.toggle("hidden")
  })

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      menu.classList.add("hidden")
    }
  })

}

/* ============================= */

function guidelinesSection() {
  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Usage Guidelines
    </h2>

    <div class="text-xs text-text-muted space-y-2 border border-border rounded-sm p-6 bg-bg-panel">
      <div>• Use for contextual row-level actions</div>
      <div>• Keep list short (4–6 items max)</div>
      <div>• Avoid deep nesting</div>
      <div>• Close on outside click</div>
      <div>• Use existing button atom as trigger</div>
    </div>
  `
  return section
}