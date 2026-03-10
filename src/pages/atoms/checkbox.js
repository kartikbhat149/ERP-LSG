import attachCopy  from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function Checkbox() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Checkbox
      </h1>
      <p class="text-sm text-text-muted">
        ERP checkbox row pattern (flex-start, 8px gap, accent color).
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
<label class="erp-checkbox-row">
  <input type="checkbox" class="erp-checkbox" checked />
  <div class="erp-checkbox-content">
    <div class="erp-checkbox-text">
      Allow partial fulfillment
    </div>
    <div class="erp-checkbox-sub">
      Orders can be shipped and invoiced in multiple batches
    </div>
  </div>
</label>
  `

  const mount = el.querySelector("#checkbox-preview")
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
        ".erp-checkbox-row",
        `<label class="erp-checkbox-row">
           <input type="checkbox" class="erp-checkbox" />
           <div class="erp-checkbox-content">
             <div class="erp-checkbox-text">Primary Text</div>
             <div class="erp-checkbox-sub">Secondary description</div>
           </div>
         </label>`
      )}

      ${classRow(
        ".erp-checkbox",
        `<input type="checkbox" class="erp-checkbox" checked />`
      )}

      ${classRow(
        ".erp-checkbox-text",
        `<div class="erp-checkbox-text">Primary Text</div>`
      )}

      ${classRow(
        ".erp-checkbox-sub",
        `<div class="erp-checkbox-sub">Secondary description</div>`
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
        Checkbox Row (With Description)
      </h2>

      <div id="checkbox-preview"></div>

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

        <label class="erp-checkbox-row">
          <input type="checkbox" class="erp-checkbox" />
          <div class="erp-checkbox-content">
            <div class="erp-checkbox-text">Unchecked</div>
          </div>
        </label>

        <label class="erp-checkbox-row">
          <input type="checkbox" class="erp-checkbox" checked />
          <div class="erp-checkbox-content">
            <div class="erp-checkbox-text">Checked</div>
          </div>
        </label>

        <label class="erp-checkbox-row">
          <input type="checkbox" class="erp-checkbox" disabled />
          <div class="erp-checkbox-content">
            <div class="erp-checkbox-text">Disabled</div>
          </div>
        </label>

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
        <div>• Wrap entire row in &lt;label&gt; for click behavior</div>
        <div>• Maintain 8px gap (gap-2)</div>
        <div>• Use accent-accent for brand consistency</div>
        <div>• Keep checkbox size at 16px</div>
      </div>
    </section>
  `
}