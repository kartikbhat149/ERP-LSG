import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function ModuleGrid() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  /* Header */
  const header = document.createElement("div")
  header.innerHTML = `
    <h1 class="text-2xl font-semibold text-text-primary mb-2">
      Module Grid
    </h1>
    <p class="text-sm text-text-muted">
      Fixed 4-column module configuration grid with toggle and status support.
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
<div class="erp-module-grid">

  <div class="erp-module-cell">
    <div class="erp-module-cell-icon">📈</div>
    <div class="erp-module-cell-name">Sales</div>
    <div class="erp-module-cell-status">
      <span class="erp-status-dot erp-status-dot-success size-2"></span>
      <span class="text-xs ml-1">Active</span>
    </div>
  </div>

  <div class="erp-module-cell">
    <div class="erp-module-cell-icon">📦</div>
    <div class="erp-module-cell-name">Inventory</div>
    <div class="erp-module-cell-status">
      <span class="erp-status-dot size-2"></span>
      <span class="text-xs ml-1">Disabled</span>
    </div>
  </div>

  <div class="erp-module-cell">
    <div class="erp-module-cell-icon">💰</div>
    <div class="erp-module-cell-name">Finance</div>
    <div class="erp-module-cell-status">
      <span class="erp-status-dot erp-status-dot-success size-2"></span>
      <span class="text-xs ml-1">Active</span>
    </div>
  </div>

  <div class="erp-module-cell">
    <div class="erp-module-cell-icon">👥</div>
    <div class="erp-module-cell-name">HR</div>
    <div class="erp-module-cell-status">
      <span class="erp-status-dot size-2"></span>
      <span class="text-xs ml-1">Disabled</span>
    </div>
  </div>

</div>
  `.trim()

  const mount = el.querySelector("#module-grid-preview")
  mount.appendChild(previewTabs(markup))

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
        <code>.erp-module-grid</code>
      </div>

      <button data-copy="erp-module-grid"
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

    <div id="module-grid-preview"></div>
  `

  return section
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
      <div>• Always use fixed 4-column grid</div>
      <div>• No grid gap — borders create layout</div>
      <div>• Reuse .erp-status-dot for status</div>
      <div>• Reuse .erp-toggle for module enable/disable</div>
      <div>• Maintain 14px / 16px cell padding</div>
      <div>• Avoid card-style redesign</div>
    </div>
  `
  return section
}