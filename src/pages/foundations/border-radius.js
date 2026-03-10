import  attachCopy  from "../../utils/copy"
export default function BorderRadius() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Border & Radius
      </h1>
      <p class="text-sm text-text-muted">
        ERP console uses minimal radius (2px) and standard border utilities.
        No custom radius tokens are defined.
      </p>
    </div>

    ${radiusSection()}
    ${borderSection()}
  `

  attachCopy(el)

  return el
}

/* ---------------------------------- */
/* Radius Section */
/* ---------------------------------- */

function radiusSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Radius (ERP Standard)
      </h2>

      <div class="border border-border rounded-sm p-6 bg-bg-panel space-y-4">

        <div class="flex items-center gap-6">

          <div class="w-32 font-mono text-lg font-semibold text-text-primary">
            <code>rounded-sm</code>
          </div>

          <div class="w-24 h-12 bg-accent rounded-sm"></div>

          <div class="text-xs text-text-muted font-mono">
            0.125rem / 2px
          </div>

          <button
            data-copy="rounded-sm"
            class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto"
          >
            Copy
          </button>

        </div>

        <div class="text-xs text-text-muted">
          ERP standard radius for buttons, inputs, tags, panels and table cells.
          Do not use larger radius utilities.
        </div>

      </div>
    </section>
  `
}

/* ---------------------------------- */
/* Border Section */
/* ---------------------------------- */

function borderSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Border Utilities
      </h2>

      <div class="space-y-4">

        ${borderCard("border", "Default 1px border")}
        ${borderCard("border-border", "ERP semantic border color")}
        ${borderCard("border-border-strong", "Strong border")}
        ${borderCard("border-border-focus", "Focus state border")}

      </div>

      <div class="text-xs text-text-muted mt-4">
        Always use semantic border color utilities.
        Avoid Tailwind default gray borders.
      </div>

    </section>
  `
}

function borderCard(cls, desc) {
  return `
    <div class="border border-border rounded-sm p-4 bg-bg-panel">

      <div class="flex items-center gap-6">

        <div class="w-96 font-mono text-lg font-semibold text-text-primary">
          <code>border ${cls}</code>
        </div>

        <div class="w-32 h-10 border ${cls} bg-bg-base"></div>

        <div class="text-xs text-text-muted">
          ${desc}
        </div>

        <button
          data-copy="border ${cls}"
          class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto"
        >
          Copy
        </button>

      </div>

    </div>
  `
}
