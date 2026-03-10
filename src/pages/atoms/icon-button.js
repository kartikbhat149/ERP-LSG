import attachCopy  from "../../utils/copy"

export default function IconButton() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Icon Button
      </h1>
      <p class="text-sm text-text-muted">
        Compact square action button used in tables and inline controls.
      </p>
    </div>

    ${componentClassSection()}
    ${variantSection()}
    ${guidelinesSection()}
  `

  attachCopy(el)
  return el
}

/* Component Class */

function componentClassSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Component Class
      </h2>

      <div class="border border-border rounded-sm p-4 bg-bg-panel flex items-center gap-6">

        <div class="w-64 font-mono text-lg font-semibold text-text-primary">
          <code>.erp-icon-btn</code>
        </div>

        <button class="erp-icon-btn" aria-label="Edit">
          ✎
        </button>

        <button data-copy="erp-icon-btn"
          class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto">
          Copy
        </button>

      </div>
    </section>
  `
}

/* Variants */

function variantSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Variants
      </h2>

      ${variantRow("erp-icon-btn")}
      ${variantRow("erp-icon-btn erp-icon-btn-danger")}
    </section>
  `
}

function variantRow(cls) {
  return `
    <div class="border border-border rounded-sm p-4 bg-bg-panel flex items-center gap-6">

      <div class="w-96 font-mono text-lg font-semibold text-text-primary">
        <code>${cls}</code>
      </div>

      <button class="${cls}" aria-label="Action">
        ✕
      </button>

      <button data-copy="${cls}"
        class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto">
        Copy
      </button>

    </div>
  `
}

/* Guidelines */

function guidelinesSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Usage Guidelines
      </h2>

      <div class="text-xs text-text-muted space-y-2 border border-border rounded-sm p-6 bg-bg-panel">
        <div>• Use for inline table actions</div>
        <div>• Always provide aria-label</div>
        <div>• Do not use for primary form actions</div>
        <div>• Do not increase size or add shadow</div>
      </div>
    </section>
  `
}