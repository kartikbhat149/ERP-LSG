import attachCopy from "../../utils/copy"

export default function Elevation() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Elevation & Shadows
      </h1>
      <p class="text-sm text-text-muted">
        ERP console follows a flat design philosophy.
        Shadow is used only for transient overlays such as Toast notifications.
      </p>
    </div>

    ${shadowSection()}
  `

  attachCopy(el)

  return el
}

/* ---------------------------------- */
/* Shadow Section */
/* ---------------------------------- */

function shadowSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Overlay Elevation
      </h2>

      <div class="border border-border rounded-sm p-6 bg-bg-panel space-y-4">

        <div class="flex items-center gap-6">

          <div class="w-32 font-mono text-lg font-semibold text-text-primary">
            <code>shadow-sm</code>
          </div>

          <div class="w-40 h-20 bg-bg-panel border border-border rounded-sm shadow-sm flex items-center justify-center text-sm text-text-muted">
            Toast Example
          </div>

          <div class="text-xs text-text-muted font-mono">
            Subtle overlay shadow
          </div>

          <button
            data-copy="shadow-sm"
            class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto"
          >
            Copy
          </button>

        </div>

        <div class="flex items-center gap-6">

          <div class="w-32 font-mono text-lg font-semibold text-text-primary">
            <code>shadow-md</code>
          </div>

          <div class="w-40 h-20 bg-bg-panel border border-border rounded-sm shadow-md flex items-center justify-center text-sm text-text-muted">
            Dropdown Example
          </div>

          <div class="text-xs text-text-muted font-mono">
            Subtle overlay shadow
          </div>

          <button
            data-copy="shadow-md"
            class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto"
          >
            Copy
          </button>

        </div>

        <div class="text-xs text-text-muted">
          Use shadow-sm only for overlays such as Toast.
          Do not apply shadows to buttons, inputs, panels, or layout containers.
        </div>

      </div>
    </section>
  `
}