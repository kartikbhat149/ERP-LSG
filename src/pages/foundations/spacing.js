import  attachCopy from "../../utils/copy"
export default function Spacing() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Spacing Scale
      </h1>
      <p class="text-sm text-text-muted">
        ERP layout spacing uses Tailwind v4 native spacing scale.
        Only the subset used in ERP console is documented here.
      </p>
    </div>

    ${spacingSection()}
  `

  attachCopy(el)

  return el
}

/* ---------------------------------- */
/* ERP Approved Spacing Scale */
/* ---------------------------------- */

function spacingSection() {

  const scale = [
    ["1", "0.25rem", "4px"],
    ["2", "0.5rem", "8px"],
    ["3", "0.75rem", "12px"],
    ["4", "1rem", "16px"],
    ["5", "1.25rem", "20px"],
    ["6", "1.5rem", "24px"],
    ["8", "2rem", "32px"],
  ]

  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        ERP Approved Spacing Utilities
      </h2>

      <div class="space-y-6">
        ${scale.map(([key, rem, px]) => `
          <div class="border border-border rounded p-4 bg-bg-panel space-y-4">

            <div class="flex items-center gap-8">

              <!-- Utility Name -->
              <div class="w-28 font-mono text-lg font-semibold text-text-primary">
                <code>p-${key}</code>
              </div>

              <!-- Visual Bar -->
              <div class="h-4 bg-accent" style="width:${rem};"></div>

              <!-- Value -->
              <div class="text-xs text-text-muted font-mono">
                ${rem} / ${px}
              </div>

              <!-- Copy Button -->
              <button
                data-copy="p-${key}"
                class="copy-btn text-xs px-2 py-1 border border-border rounded hover:bg-bg-section transition ml-auto"
              >
                Copy
              </button>

            </div>

          </div>
        `).join("")}
      </div>

      <div class="text-xs text-text-muted mt-6">
        Note: Use native Tailwind spacing utilities (p-*, m-*, gap-*, px-*, py-*).
        Do not define custom spacing tokens unless ERP design requires non-standard values.
      </div>
    </section>
  `
}
