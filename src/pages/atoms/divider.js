import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function Divider() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Divider
      </h1>
      <p class="text-sm text-text-muted">
        ERP horizontal separator used between sections and groups.
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
<div class="space-y-4">
  <div>Section A</div>
  <div class="erp-divider"></div>
  <div>Section B</div>
</div>
  `

  const mount = el.querySelector("#divider-preview")
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
        ".erp-divider",
        `<div class="erp-divider"></div>`
      )}

      ${classRow(
        ".erp-divider-strong",
        `<div class="erp-divider erp-divider-strong"></div>`
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

      <div class="space-y-4">
        <div>Content Above</div>
        ${demoMarkup}
        <div>Content Below</div>
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
        Basic Usage
      </h2>

      <div id="divider-preview"></div>

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
        <span class="text-text-muted text-xs">
          Divider has no interactive states.
        </span>
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
        <div>• Use to separate logical sections</div>
        <div>• Do not use excessive dividers in dense forms</div>
        <div>• Spacing should be controlled by layout, not embedded in divider</div>
      </div>
    </section>
  `
}
