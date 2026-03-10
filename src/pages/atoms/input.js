import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function Input() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Input Field
      </h1>
      <p class="text-sm text-text-muted">
        ERP base input atom (13px font, compact padding, 2px radius).
      </p>
    </div>

    ${componentClassSection()}
    ${structureSection()}
    ${statesSection()}
    ${guidelinesSection()}
  `

  const markup = `
<input class="erp-input" placeholder="Enter value" />
`

  const previewMount = el.querySelector("#input-preview")
  previewMount.appendChild(previewTabs(markup))

  attachCopy(el)
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
          <code>.erp-input</code>
        </div>

        <input class="erp-input max-w-xs" placeholder="Demo input" />

        <button data-copy="erp-input"
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

      <!-- Class Composition -->
      <div class="border border-border rounded-sm p-4 bg-bg-panel flex items-center gap-6 mb-4">
        <div class="font-mono text-lg font-semibold text-text-primary">
          <code>.erp-input</code>
        </div>

        <button data-copy="erp-input"
          class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto">
          Copy
        </button>
      </div>

      <!-- Preview Tabs Mount -->
      <div id="input-preview"></div>

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
          <input class="erp-input" placeholder="Default state" />
        </div>

        <div>
          <div class="text-xs text-text-muted mb-1">Focus (click inside)</div>
          <input class="erp-input" placeholder="Focus state" />
        </div>

        <div>
          <div class="text-xs text-text-muted mb-1">Disabled</div>
          <input class="erp-input" placeholder="Disabled" disabled />
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
        <div>• Input atom should be standalone only</div>
        <div>• Do not add prefix/suffix inside input atom</div>
        <div>• Use InputGroup molecule for addons</div>
        <div>• Keep padding, radius and font consistent</div>
      </div>
    </section>
  `
}