import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function Radio() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Radio
      </h1>
      <p class="text-sm text-text-muted">
        ERP radio selection pattern (single-choice group, 8px gap, accent color).
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
<div class="erp-radio-group">
  <label class="erp-radio-row">
    <input type="radio" class="erp-radio" name="tax" checked />
    <div class="erp-radio-content">
      <div class="erp-radio-text">
        Exclusive (Tax added to line total)
      </div>
      <div class="erp-radio-sub">
        Standard for B2B in US — tax displayed separately
      </div>
    </div>
  </label>

  <label class="erp-radio-row">
    <input type="radio" class="erp-radio" name="tax" />
    <div class="erp-radio-content">
      <div class="erp-radio-text">
        Inclusive (Tax included in listed price)
      </div>
      <div class="erp-radio-sub">
        Standard for EU VAT compliance
      </div>
    </div>
  </label>
</div>
  `

  const mount = el.querySelector("#radio-preview")
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
        ".erp-radio-row",
        `<label class="erp-radio-row">
           <input type="radio" class="erp-radio" name="demo" />
           <div class="erp-radio-content">
             <div class="erp-radio-text">Primary Text</div>
             <div class="erp-radio-sub">Secondary description</div>
           </div>
         </label>`
      )}

      ${classRow(
        ".erp-radio",
        `<input type="radio" class="erp-radio" checked />`
      )}

      ${classRow(
        ".erp-radio-text",
        `<div class="erp-radio-text">Primary Text</div>`
      )}

      ${classRow(
        ".erp-radio-sub",
        `<div class="erp-radio-sub">Secondary description</div>`
      )}

      ${classRow(
        ".erp-radio-group",
        `<div class="erp-radio-group">
           <label class="erp-radio-row">
             <input type="radio" class="erp-radio" name="g1" />
             <span class="erp-radio-text">Option A</span>
           </label>
           <label class="erp-radio-row">
             <input type="radio" class="erp-radio" name="g1" />
             <span class="erp-radio-text">Option B</span>
           </label>
         </div>`
      )}

      ${classRow(
        ".erp-radio-group-inline",
        `<div class="erp-radio-group erp-radio-group-inline">
           <label class="erp-radio-row">
             <input type="radio" class="erp-radio" name="g2" />
             <span class="erp-radio-text">Inline A</span>
           </label>
           <label class="erp-radio-row">
             <input type="radio" class="erp-radio" name="g2" />
             <span class="erp-radio-text">Inline B</span>
           </label>
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
        Radio Group (With Description)
      </h2>

      <div id="radio-preview"></div>

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

        <label class="erp-radio-row">
          <input type="radio" class="erp-radio" name="s1" />
          <span class="erp-radio-text">Unchecked</span>
        </label>

        <label class="erp-radio-row">
          <input type="radio" class="erp-radio" name="s2" checked />
          <span class="erp-radio-text">Checked</span>
        </label>

        <label class="erp-radio-row">
          <input type="radio" class="erp-radio" name="s3" disabled />
          <span class="erp-radio-text">Disabled</span>
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
        <div>• Use radio for mutually exclusive choices</div>
        <div>• Maintain 8px gap (gap-2)</div>
        <div>• Keep radio size at 16px (h-4 w-4)</div>
        <div>• Use vertical group by default</div>
        <div>• Use inline group only when space is limited</div>
      </div>
    </section>
  `
}