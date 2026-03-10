import attachCopy from "../../utils/copy"

export default function Motion() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Motion & Transitions
      </h1>
      <p class="text-sm text-text-muted">
        ERP follows a minimal motion policy. Only subtle color transitions are allowed.
        No animated transforms or decorative effects.
      </p>
    </div>

    ${policySection()}
    ${demoSection()}
  `

  attachCopy(el)

  return el
}

/* ---------------------------------- */
/* Policy Section */
/* ---------------------------------- */

function policySection() {
  const allowed = [
    ["transition-colors", "Enable color transition"],
    ["duration-150", "Fast, subtle timing"],
    ["ease-linear", "Consistent easing"]
  ]

  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Allowed Utilities
      </h2>

      <div class="space-y-4">
        ${allowed.map(([cls, desc]) => `
          <div class="border border-border rounded-sm p-4 bg-bg-panel">

            <div class="flex items-center gap-6">

              <div class="w-64 font-mono text-lg font-semibold text-text-primary">
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

      <div class="text-xs text-text-muted mt-4">
        Do not use transform, scale, translate, opacity, or animation utilities in ERP layout components.
      </div>
    </section>
  `
}

/* ---------------------------------- */
/* Demo Section */
/* ---------------------------------- */

function demoSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Hover Example
      </h2>

      <div class="border border-border rounded-sm p-6 bg-bg-panel space-y-4">

        <button
          class="bg-accent text-text-white px-6 py-2 rounded-sm
                 transition-colors duration-150 ease-linear
                 hover:bg-accent-light hover:cursor-pointer"
        >
          Hover Me
        </button>

        <div class="font-mono text-lg text-text-muted">
          bg-accent hover:bg-accent-light hover:cursor-pointer transition-colors duration-150 ease-linear
        </div>

      </div>
    </section>
  `
}