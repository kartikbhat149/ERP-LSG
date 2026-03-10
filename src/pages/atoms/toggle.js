import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function Toggle() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Toggle
      </h1>
      <p class="text-sm text-text-muted">
        ERP toggle switch for binary enable/disable states.
      </p>
    </div>

    ${componentClassSection()}
    ${structuralSection()}
    ${statesSection()}
    ${guidelinesSection()}
  `

  attachCopy(el)

  /* previewTabs mount */
  const markup = `
<div class="erp-toggle-row">
  <div class="erp-toggle erp-toggle-on"></div>
  <span class="erp-toggle-label">Multi-Location Inventory</span>
</div>
  `

  const mount = el.querySelector("#toggle-preview")
  mount.appendChild(previewTabs(markup))

  initToggleInteraction(el)

  return el
}

/* ========================================= */
/* Component Classes */
/* ========================================= */

function componentClassSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Component Classes
      </h2>

      ${classRow(
        ".erp-toggle-row",
        `<div class="erp-toggle-row">
           <div class="erp-toggle erp-toggle-on"></div>
           <span class="erp-toggle-label">Enabled</span>
         </div>`
      )}

      ${classRow(
        ".erp-toggle",
        `<div class="erp-toggle erp-toggle-on"></div>`
      )}

      ${classRow(
        ".erp-toggle-on",
        `<div class="erp-toggle erp-toggle-on"></div>`
      )}

      ${classRow(
        ".erp-toggle-label",
        `<span class="erp-toggle-label">Toggle Label</span>`
      )}

    </section>
  `
}

function classRow(className, demoMarkup) {
  return `
    <div class="border border-border rounded-sm p-4 bg-bg-panel space-y-4 mb-4">

      <div class="flex items-center gap-6">
        <div class="font-mono text-lg font-semibold text-text-primary">
          <code>${className}</code>
        </div>

        <button data-copy="${className.replace('.', '')}"
          class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto">
          Copy
        </button>
      </div>

      <div>
        ${demoMarkup}
      </div>

    </div>
  `
}

/* ========================================= */
/* Structural Variant */
/* ========================================= */

function structuralSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Toggle Row
      </h2>

      <div id="toggle-preview"></div>

    </section>
  `
}

/* ========================================= */
/* States */
/* ========================================= */

function statesSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        States
      </h2>

      <div class="border border-border rounded-sm p-6 bg-bg-panel space-y-6 max-w-lg">

        <div class="erp-toggle-row">
          <div class="erp-toggle"></div>
          <span class="erp-toggle-label">Off</span>
        </div>

        <div class="erp-toggle-row">
          <div class="erp-toggle erp-toggle-on"></div>
          <span class="erp-toggle-label">On</span>
        </div>

        <div class="erp-toggle-row opacity-60">
          <div class="erp-toggle"></div>
          <span class="erp-toggle-label">Disabled</span>
        </div>

      </div>
    </section>
  `
}

/* ========================================= */
/* Guidelines */
/* ========================================= */

function guidelinesSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Usage Guidelines
      </h2>

      <div class="text-xs text-text-muted space-y-2 border border-border rounded-sm p-6 bg-bg-panel">
        <div>• Use toggle for binary enable/disable behavior</div>
        <div>• Keep switch width 36px and height 20px</div>
        <div>• Use accent color for active state</div>
        <div>• Do not use for mutually exclusive multi-choice (use Radio instead)</div>
      </div>
    </section>
  `
}

/* ========================================= */
/* Escape Utility */
/* ========================================= */

function escapeHtml(str) {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

function initToggleInteraction(root) {
  root.querySelectorAll(".erp-toggle").forEach(toggle => {
    toggle.addEventListener("click", () => {
      if (toggle.classList.contains("erp-toggle-disabled")) return
      toggle.classList.toggle("erp-toggle-on")
    })
  })
}