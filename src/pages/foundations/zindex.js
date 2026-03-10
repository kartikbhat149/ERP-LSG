import attachCopy  from "../../utils/copy"

export default function ZIndex() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Z-Index
      </h1>
      <p class="text-sm text-text-muted">
        ERP layering follows a simple stacking hierarchy using native Tailwind z-index utilities.
      </p>
    </div>

    ${zIndexTable()}
    ${zIndexDemo()}
  `

  attachCopy(el)

  return el
}

/* ---------------------------------- */
/* Z-Index Table */
/* ---------------------------------- */

function zIndexTable() {
  const layers = [
    ["z-0", "Base layout content"],
    ["z-10", "Sidebar"],
    ["z-20", "Header"],
    ["z-30", "Dropdown / Popover"],
    ["z-50", "Toast / Highest overlay"]
  ]

  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        ERP Stacking Levels
      </h2>

      <div class="space-y-4">
        ${layers.map(([cls, desc]) => `
          <div class="border border-border rounded-sm p-4 bg-bg-panel">

            <div class="flex items-center gap-6">

              <div class="w-24 font-mono text-lg font-semibold text-text-primary">
                <code>${cls}</code>
              </div>

              <div class="text-xs text-text-muted">
                ${desc}
              </div>

              <button
                data-copy="${cls}"
                class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto"
              >
                Copy
              </button>

            </div>

          </div>
        `).join("")}
      </div>
    </section>
  `
}

/* ---------------------------------- */
/* Visual Demo */
/* ---------------------------------- */

function zIndexDemo() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Layering Example
      </h2>

      <div class="relative h-48 border border-border rounded-sm bg-bg-panel p-4">

        <div class="absolute top-6 left-6 w-32 h-20 bg-accent text-text-white flex items-center justify-center z-10 rounded-sm">
          Sidebar (z-10)
        </div>

        <div class="absolute top-10 left-16 w-32 h-20 bg-success text-text-white flex items-center justify-center z-20 rounded-sm">
          Header (z-20)
        </div>

        <div class="absolute top-16 left-28 w-32 h-20 bg-warning text-text-white flex items-center justify-center z-30 rounded-sm">
          Dropdown (z-30)
        </div>

        <div class="absolute top-24 left-40 w-32 h-20 bg-danger text-text-white flex items-center justify-center z-50 rounded-sm">
          Toast (z-50)
        </div>

      </div>

      <div class="text-xs text-text-muted mt-4">
        Always use defined stacking levels. Avoid arbitrary z-index values.
      </div>
    </section>
  `
}