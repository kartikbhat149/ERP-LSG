import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function Tag() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Tag
      </h1>
      <p class="text-sm text-text-muted">
        ERP metadata label for status, ISO codes, and small indicators.
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
<div class="flex items-center gap-3">
  <span class="erp-tag">Default</span>
  <span class="erp-tag erp-tag-success">USD ✓</span>
  <span class="erp-tag erp-tag-warning">Config Required</span>
  <span class="erp-tag erp-tag-danger">Error</span>
</div>
  `

  const mount = el.querySelector("#tag-preview")
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
        ".erp-tag",
        `<span class="erp-tag">Default Tag</span>`
      )}

      ${classRow(
        ".erp-tag-success",
        `<span class="erp-tag erp-tag-success">USD ✓</span>`
      )}

      ${classRow(
        ".erp-tag-warning",
        `<span class="erp-tag erp-tag-warning">Config Required</span>`
      )}

      ${classRow(
        ".erp-tag-danger",
        `<span class="erp-tag erp-tag-danger">Error</span>`
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
        Tag Variants
      </h2>

      <div id="tag-preview"></div>

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
        <span class="erp-tag">Tags have no interactive states</span>
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
        <div>• Use for small metadata labels</div>
        <div>• Use semantic variants: success / warning / danger</div>
        <div>• Keep text concise (1–2 words)</div>
        <div>• Always combine variant class with base .erp-tag</div>
      </div>
    </section>
  `
}

function escapeHtml(str) {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;")
}