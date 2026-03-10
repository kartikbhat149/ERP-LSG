import attachCopy  from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function Select() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Select Dropdown
      </h1>
      <p class="text-sm text-text-muted">
        ERP select (30px height, 12.5px font, custom arrow).
      </p>
    </div>

    ${componentClassSection()}
    ${htmlUsageSection()}
    ${statesSection()}
    ${guidelinesSection()}
  `

  attachCopy(el)

  /* previewTabs mount */
  const markup = `
<label class="text-xs text-text-label">
  Tax Type
</label>

<select class="erp-select" style="width:120px">
  <option>EIN</option>
  <option>VAT</option>
  <option>GST</option>
  <option>TIN</option>
</select>
  `

  const mount = el.querySelector("#select-preview")
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
          <code>.erp-select</code>
        </div>

        <select class="erp-select max-w-xs">
          <option>EIN</option>
          <option>VAT</option>
          <option>GST</option>
          <option>TIN</option>
        </select>

        <button data-copy="erp-select"
          class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto">
          Copy
        </button>

      </div>
    </section>
  `
}

/* ============================= */
/* HTML Usage */
/* ============================= */

function htmlUsageSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        HTML Usage
      </h2>

      <div id="select-preview"></div>

    </section>
  `
}

/* ============================= */
/* States */
/* ============================= */

function statesSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        States
      </h2>

      <div class="border border-border rounded-sm p-6 bg-bg-panel space-y-6 max-w-md">

        <div>
          <div class="text-xs text-text-muted mb-1">Default</div>
          <select class="erp-select">
            <option>EIN</option>
          </select>
        </div>

        <div>
          <div class="text-xs text-text-muted mb-1">Focus (click to open)</div>
          <select class="erp-select">
            <option>EIN</option>
          </select>
        </div>

        <div>
          <div class="text-xs text-text-muted mb-1">Disabled</div>
          <select class="erp-select" disabled>
            <option>Disabled</option>
          </select>
        </div>

      </div>
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
        <div>• Use for predefined value selection</div>
        <div>• Keep native dropdown behavior</div>
        <div>• Do not replace arrow styling</div>
        <div>• Do not increase height or radius</div>
      </div>
    </section>
  `
}