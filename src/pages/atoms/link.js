import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function Link() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Link
      </h1>
      <p class="text-sm text-text-muted">
        ERP inline navigation or action link.
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
<div class="flex items-center gap-6">
  <a href="#" class="erp-link">Primary Link</a>
  <a href="#" class="erp-link erp-link-muted">Muted Link</a>
  <a href="#" class="erp-link erp-link-danger">Danger Link</a>
</div>
  `

  const mount = el.querySelector("#link-preview")
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
        ".erp-link",
        `<a href="#" class="erp-link">View Details</a>`
      )}

      ${classRow(
        ".erp-link-muted",
        `<a href="#" class="erp-link erp-link-muted">Secondary Action</a>`
      )}

      ${classRow(
        ".erp-link-danger",
        `<a href="#" class="erp-link erp-link-danger">Delete</a>`
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
        Link Variants
      </h2>

      <div id="link-preview"></div>

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
        <a href="#" class="erp-link">Default</a>
        <a href="#" class="erp-link hover:text-accent-light">Hover (preview)</a>
        <a href="#" class="erp-link opacity-60 pointer-events-none">Disabled (simulated)</a>
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
        <div>• Use for inline navigation or lightweight actions</div>
        <div>• Do not use as primary action (use Button)</div>
        <div>• Keep link text concise</div>
        <div>• Always ensure hover state is visible</div>
      </div>
    </section>
  `
}
