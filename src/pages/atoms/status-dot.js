import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function StatusDot() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Status Dot
      </h1>
      <p class="text-sm text-text-muted">
        ERP minimal visual state indicator used alongside text labels.
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
<div class="flex items-center gap-4">
  <div class="flex items-center gap-2">
    <span class="erp-status-dot erp-status-dot-success"></span>
    <span class="text-erp-sm text-text-primary">Active</span>
  </div>

  <div class="flex items-center gap-2">
    <span class="erp-status-dot erp-status-dot-warning"></span>
    <span class="text-erp-sm text-text-primary">Pending</span>
  </div>

  <div class="flex items-center gap-2">
    <span class="erp-status-dot erp-status-dot-danger"></span>
    <span class="text-erp-sm text-text-primary">Error</span>
  </div>
</div>
  `

  const mount = el.querySelector("#status-dot-preview")
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
        ".erp-status-dot",
        `<span class="erp-status-dot"></span>`
      )}

      ${classRow(
        ".erp-status-dot-success",
        `<span class="erp-status-dot erp-status-dot-success"></span>`
      )}

      ${classRow(
        ".erp-status-dot-warning",
        `<span class="erp-status-dot erp-status-dot-warning"></span>`
      )}

      ${classRow(
        ".erp-status-dot-danger",
        `<span class="erp-status-dot erp-status-dot-danger"></span>`
      )}

      ${classRow(
        ".erp-status-dot-accent",
        `<span class="erp-status-dot erp-status-dot-accent"></span>`
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

      <div class="flex items-center gap-4">
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
        Status Dot With Label
      </h2>

      <div id="status-dot-preview"></div>

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

      <div class="border border-border rounded-sm p-6 bg-bg-panel">
        <span class="erp-status-dot"></span>
        <span class="text-sm text-text-muted ml-2">Default uses border color</span>
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
        <div>• Use with text label for clarity</div>
        <div>• Keep size small (10px)</div>
        <div>• Use semantic variants: success / warning / danger / accent</div>
        <div>• Do not use standalone without context</div>
      </div>
    </section>
  `
}
