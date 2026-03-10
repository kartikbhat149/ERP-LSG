import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function FormRow() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Form Row
      </h1>
      <p class="text-sm text-text-muted">
        Standard ERP horizontal form layout.
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
<div class="erp-form-row">
  <div class="erp-label-col">
    <label class="erp-label">Company Name</label>
  </div>
  <div class="erp-input-col">
    <input class="erp-input w-full" placeholder="Enter company name" />
    <div class="erp-help">Displayed on invoice</div>
  </div>
</div>
  `

  const mount = el.querySelector("#formrow-preview")
  mount.appendChild(previewTabs(markup))

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
        ".erp-form-row",
`<div class="erp-form-row">
  <div class="erp-label-col">
    <label class="erp-label">Company</label>
  </div>
  <div class="erp-input-col">
    <input class="erp-input" />
    <div class="erp-help">Helper text</div>
  </div>
</div>`
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

      <div class="space-y-2">
        ${demoMarkup}
      </div>

    </div>
  `
}

/* ========================================= */
/* Structure */
/* ========================================= */

function structureSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Structure
      </h2>

      <div id="formrow-preview"></div>

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

      <div class="border border-border rounded-sm p-6 bg-bg-panel space-y-6">

        <div class="erp-form-row">
          <div class="erp-label-col">
            <label class="erp-label">Normal</label>
          </div>
          <div class="erp-input-col">
            <input class="erp-input w-full" />
            <div class="erp-help">Helper text</div>
          </div>
        </div>

        <div class="erp-form-row">
          <div class="erp-label-col">
            <label class="erp-label">Warning</label>
          </div>
          <div class="erp-input-col">
            <input class="erp-input w-full" />
            <div class="erp-help erp-help-warning">Compliance notice</div>
          </div>
        </div>

        <div class="erp-form-row">
          <div class="erp-label-col">
            <label class="erp-label">Error</label>
          </div>
          <div class="erp-input-col">
            <input class="erp-input w-full border-red-500" />
            <div class="erp-help erp-help-danger">Invalid value</div>
          </div>
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
        <div>• Label column and input column must align across the form</div>
        <div>• Help text must appear under input — not under label</div>
        <div>• Keep help spacing small (mt-1)</div>
        <div>• Use danger state only for validation errors</div>
      </div>
    </section>
  `
}