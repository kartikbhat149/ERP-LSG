import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function InputGroup() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Input Group
      </h1>
      <p class="text-sm text-text-muted">
        Input with prefix, suffix or action elements.
      </p>
    </div>

    ${componentClassSection()}
    ${structureSection()}
    ${variantsSection()}
    ${guidelinesSection()}
  `

  attachCopy(el)

  /* previewTabs mount */
  const markup = `
<div class="erp-input-group">
  <span class="erp-input-addon">₹</span>
  <input class="erp-input-group-field" placeholder="Enter amount" />
</div>
  `

  const mount = el.querySelector("#inputgroup-preview")
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
        ".erp-input-group",
`<div class="erp-input-group">
  <span class="erp-input-addon">₹</span>
  <input class="erp-input-group-field" />
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

      <div id="inputgroup-preview"></div>

    </section>
  `
}

/* ========================================= */
/* Variants */
/* ========================================= */

function variantsSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Variants
      </h2>

      <div class="border border-border rounded-sm p-6 bg-bg-panel space-y-6">

        <div class="erp-input-group">
          <span class="erp-input-addon">https://</span>
          <input class="erp-input-group-field" placeholder="domain.com" />
        </div>

        <div class="erp-input-group">
          <input class="erp-input-group-field" placeholder="Search..." />
          <span class="erp-input-addon">🔍</span>
        </div>

        <div class="erp-input-group">
          <input class="erp-input-group-field" placeholder="Username" />
          <button class="erp-input-addon-button">Check</button>
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
        <div>• Use for prefixed/suffixed inputs only</div>
        <div>• Maintain single border around group</div>
        <div>• Do not add border to inner input</div>
        <div>• Keep addon visually subtle</div>
      </div>
    </section>
  `
}