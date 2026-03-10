import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function LabelHelp() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Label & Help
      </h1>
      <p class="text-sm text-text-muted">
        ERP form label and contextual helper text.
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
<div class="space-y-1">
  <label class="erp-label">Company Name</label>
  <input class="erp-input" placeholder="Enter company name" />
  <div class="erp-help">Displayed on invoice</div>
</div>
  `

  const mount = el.querySelector("#labelhelp-preview")
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
        ".erp-label",
        `<label class="erp-label">Company Name</label>`
      )}

      ${classRow(
        ".erp-help",
        `<div class="erp-help">Displayed on invoice</div>`
      )}

      ${classRow(
        ".erp-help-warning",
        `<div class="erp-help erp-help-warning">Required for compliance</div>`
      )}

      ${classRow(
        ".erp-help-danger",
        `<div class="erp-help erp-help-danger">Invalid value</div>`
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
/* Structural Variant */
/* ========================================= */

function structuralSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Label With Help
      </h2>

      <div id="labelhelp-preview"></div>

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

      <div class="border border-border rounded-sm p-6 bg-bg-panel space-y-4">

        <div class="space-y-1">
          <label class="erp-label">Normal</label>
          <div class="erp-help">Helper text</div>
        </div>

        <div class="space-y-1">
          <label class="erp-label">Warning</label>
          <div class="erp-help erp-help-warning">Warning message</div>
        </div>

        <div class="space-y-1">
          <label class="erp-label">Error</label>
          <div class="erp-help erp-help-danger">Invalid value</div>
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
        <div>• Always place label above input</div>
        <div>• Use help text for clarification, not instructions</div>
        <div>• Use warning for compliance notices</div>
        <div>• Use danger for validation errors</div>
      </div>
    </section>
  `
}
