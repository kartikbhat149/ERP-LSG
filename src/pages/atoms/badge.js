import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function Badge() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Badge
      </h1>
      <p class="text-sm text-text-muted">
        ERP status badge for counts and strong visual indicators.
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
  <span class="erp-badge">3</span>
  <span class="erp-badge erp-badge-success">Active</span>
  <span class="erp-badge erp-badge-warning">Pending</span>
  <span class="erp-badge erp-badge-danger">Error</span>
  <span class="erp-badge erp-badge-accent">New</span>
</div>
  `

  const mount = el.querySelector("#badge-preview")
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
        ".erp-badge",
        `<span class="erp-badge">3</span>`
      )}

      ${classRow(
        ".erp-badge-success",
        `<span class="erp-badge erp-badge-success">Active</span>`
      )}

      ${classRow(
        ".erp-badge-warning",
        `<span class="erp-badge erp-badge-warning">Pending</span>`
      )}

      ${classRow(
        ".erp-badge-danger",
        `<span class="erp-badge erp-badge-danger">Error</span>`
      )}

      ${classRow(
        ".erp-badge-accent",
        `<span class="erp-badge erp-badge-accent">New</span>`
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
        Badge Variants
      </h2>

      <div id="badge-preview"></div>

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
        <span class="erp-badge">Badges have no interactive states</span>
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
        <div>• Use badge for strong status indication</div>
        <div>• Use tag for metadata, badge for emphasis</div>
        <div>• Keep text short (1 word or number)</div>
        <div>• Always combine variant class with base .erp-badge</div>
      </div>
    </section>
  `
}

function escapeHtml(str) {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;")
}