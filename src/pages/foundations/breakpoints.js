import attachCopy  from "../../utils/copy"

export default function Breakpoints() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Breakpoints
      </h1>
      <p class="text-sm text-text-muted">
        ERP layout is desktop-first. Mobile phones are not a target.
        Tailwind native breakpoints are used without customization.
      </p>
    </div>

    ${breakpointTable()}
    ${responsiveDemo()}
  `

  attachCopy(el)

  return el
}

/* ---------------------------------- */
/* Breakpoint Table */
/* ---------------------------------- */

function breakpointTable() {
  const points = [
    ["lg", "1024px", "Tablet landscape / Small desktop"],
    ["xl", "1280px", "Standard desktop"],
    ["2xl", "1536px", "Large monitor"]
  ]

  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        ERP Target Breakpoints
      </h2>

      <div class="space-y-4">
        ${points.map(([prefix, width, usage]) => `
          <div class="border border-border rounded-sm p-4 bg-bg-panel">

            <div class="flex items-center gap-6">

              <div class="w-20 font-mono text-lg font-semibold text-text-primary">
                ${prefix}:
              </div>

              <div class="text-xs text-text-muted font-mono">
                ${width}
              </div>

              <div class="text-xs text-text-muted">
                ${usage}
              </div>

              <button
                data-copy="${prefix}:"
                class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto"
              >
                Copy
              </button>

            </div>

          </div>
        `).join("")}
      </div>

      <div class="text-xs text-text-muted mt-4">
        Avoid mobile-first stacking patterns. ERP layout remains desktop-oriented.
      </div>

    </section>
  `
}

/* ---------------------------------- */
/* Responsive Demo */
/* ---------------------------------- */

function responsiveDemo() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Responsive Layout Examples
      </h2>

      <div class="border border-border rounded-sm p-6 bg-bg-panel space-y-8">

        <div class="text-xs text-text-muted">
          Resize browser to observe breakpoint behavior.
        </div>

        <!-- lg Example -->
        <div class="space-y-3">
          <div class="text-sm font-medium text-text-primary">
            lg: Collapse 2-column → 1-column
          </div>

          <div class="grid grid-cols-2 lg:grid-cols-1 gap-4">
            <div class="bg-accent text-text-white p-4 rounded-sm text-center">
              Column A
            </div>
            <div class="bg-success text-text-white p-4 rounded-sm text-center">
              Column B
            </div>
          </div>

          <div class="font-mono text-xs text-text-muted">
            grid grid-cols-2 lg:grid-cols-1
          </div>
        </div>

        <!-- xl Example -->
        <div class="space-y-3">
          <div class="text-sm font-medium text-text-primary">
            xl: Expand to 3-column layout
          </div>

          <div class="grid grid-cols-2 xl:grid-cols-3 gap-4">
            <div class="bg-accent text-text-white p-4 rounded-sm text-center">A</div>
            <div class="bg-success text-text-white p-4 rounded-sm text-center">B</div>
            <div class="bg-warning text-text-white p-4 rounded-sm text-center">C</div>
          </div>

          <div class="font-mono text-xs text-text-muted">
            grid grid-cols-2 xl:grid-cols-3
          </div>
        </div>

        <!-- 2xl Example -->
        <div class="space-y-3">
          <div class="text-sm font-medium text-text-primary">
            2xl: Increase container width
          </div>

          <div class="max-w-xl 2xl:max-w-4xl bg-bg-section border border-border p-4 rounded-sm text-center">
            Container expands at 2xl
          </div>

          <div class="font-mono text-xs text-text-muted">
            max-w-xl 2xl:max-w-4xl
          </div>
        </div>

      </div>
    </section>
  `
}