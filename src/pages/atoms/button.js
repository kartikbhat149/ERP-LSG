import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function Button() {

  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Button
      </h1>
      <p class="text-sm text-text-muted">
        ERP primary action control (13px font, 2px radius, dense layout).
      </p>
    </div>

    ${componentClassSection()}
    ${variantSection()}
    ${statesSection()}
    ${guidelinesSection()}
  `

  el.appendChild(iconVariantSection())

  attachCopy(el)

  if (window.Prism) {
    Prism.highlightAllUnder(el)
  }

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
          <code>.erp-btn</code>
        </div>

        <button class="erp-btn erp-btn-primary">
          Demo
        </button>

        <button data-copy="erp-btn"
          class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto">
          Copy
        </button>
      </div>
    </section>
  `
}

/* ============================= */
/* Visual Variants */
/* ============================= */

function variantSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Variants
      </h2>

      ${variantRow("erp-btn erp-btn-primary")}
      ${variantRow("erp-btn erp-btn-success")}
      ${variantRow("erp-btn erp-btn-secondary")}
      ${variantRow("erp-btn erp-btn-danger")}

      ${variantRow("erp-btn erp-btn-outline")}
      ${variantRow("erp-btn erp-btn-ghost")}
      ${variantRow("erp-btn erp-btn-link")}
    </section>
  `
}

function variantRow(cls) {
  return `
    <div class="border border-border rounded-sm p-4 bg-bg-panel flex items-center gap-6">

      <div class="font-mono text-lg font-semibold text-text-primary w-72">
        <code>${cls}</code>
      </div>

      <button class="${cls}">
        Demo
      </button>

      <button data-copy="${cls}"
        class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto">
        Copy
      </button>

    </div>
  `
}

/* ============================= */
/* Structural Variant – With Icon */
/* ============================= */
function iconVariantSection() {
  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Button With Leading Icon
    </h2>
  `

  const preview = `
<button class="erp-btn erp-btn-primary">
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>

  Save & Apply
</button>

<button class="erp-btn erp-btn-success ml-4">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
  Activate
</button>
`

  section.appendChild(previewTabs(preview))

  return section
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

      ${variantRow("erp-btn erp-btn-primary")}
      
      <div class="border border-border rounded-sm p-4 bg-bg-panel flex items-center gap-6">
        <div class="font-mono text-lg font-semibold text-text-primary">
          <code>erp-btn erp-btn-primary</code> (disabled)
        </div>

        <button class="erp-btn erp-btn-primary" disabled>
          Disabled
        </button>

        <button data-copy="erp-btn erp-btn-primary"
          class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto">
          Copy
        </button>
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
        <div>• Use Primary for main form action</div>
        <div>• Use Success for positive state transitions (Activate)</div>
        <div>• Use Danger for destructive actions</div>
        <div>• Keep icon size at 14px</div>
        <div>• Do not add shadow or increase radius</div>
      </div>
    </section>
  `
}