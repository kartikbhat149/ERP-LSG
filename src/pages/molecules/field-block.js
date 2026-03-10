import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function FieldBlock() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Field Block
      </h1>
      <p class="text-sm text-text-muted">
        Vertical field wrapper (label + control + help).
      </p>
    </div>

    ${componentClassSection()}
    ${structureSection()}
    ${statesSection()}
    ${guidelinesSection()}
  `

  attachCopy(el)

  /* previewTabs mount */
  const markup = `
<div class="erp-field">
  <label class="erp-label">Company</label>
  <input class="erp-input" placeholder="Enter value" />
  <div class="erp-help">Helper text</div>
</div>
  `

  const mount = el.querySelector("#fieldblock-preview")
  mount.appendChild(previewTabs(markup))

  return el
}

/* ============================= */

function componentClassSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Component Class
      </h2>

      <div class="border border-border rounded-sm p-4 bg-bg-panel flex items-start gap-6">
        <div class="font-mono text-lg font-semibold text-text-primary w-64">
          <code>.erp-field</code>
        </div>

        <div class="erp-field max-w-xs">
          <label class="erp-label">Company</label>
          <input class="erp-input" placeholder="Enter value" />
          <div class="erp-help">Helper text</div>
        </div>

        <button data-copy="erp-field"
          class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto">
          Copy
        </button>
      </div>
    </section>
  `
}

/* ============================= */

function structureSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Structure
      </h2>

      <div id="fieldblock-preview"></div>

    </section>
  `
}

/* ============================= */

function statesSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        States
      </h2>

      <div class="border border-border rounded-sm p-6 bg-bg-panel space-y-6 max-w-md">

        <div class="erp-field">
          <label class="erp-label">Normal</label>
          <input class="erp-input" />
          <div class="erp-help">Helper text</div>
        </div>

        <div class="erp-field erp-field-error">
          <label class="erp-label">Error</label>
          <input class="erp-input border-danger" />
          <div class="erp-help erp-help-danger">Invalid value</div>
        </div>

      </div>
    </section>
  `
}

/* ============================= */

function guidelinesSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Usage Guidelines
      </h2>

      <div class="text-xs text-text-muted space-y-2 border border-border rounded-sm p-6 bg-bg-panel">
        <div>• FieldBlock groups label, control and help</div>
        <div>• Use vertical stacking only</div>
        <div>• Error state should be applied at wrapper level</div>
        <div>• Works with Input or InputGroup</div>
      </div>
    </section>
  `
}