import  attachCopy from "../../utils/copy"
export default function Colors() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Color System
      </h1>
      <p class="text-sm text-text-muted">
        ERP semantic color tokens defined using Tailwind v4 @theme and mapped from console design variables.
      </p>
    </div>

    ${colorSection("Background", [
    ["bg-bg-base", "#f4f4f4"],
    ["bg-bg-panel", "#ffffff"],
    ["bg-bg-nav", "#1a1a1a"],
    ["bg-bg-nav-hover", "#2a2a2a"],
    ["bg-bg-nav-active", "#0f3460"],
    ["bg-bg-header", "#212121"],
    ["bg-bg-section", "#f9f9f9"],
    ["bg-bg-row-alt", "#fafafa"],
    ["bg-bg-tag", "#e8e8e8"]
  ])}

    ${colorSection("Text", [
    ["text-text-primary", "#1a1a1a"],
    ["text-text-secondary", "#555555"],
    ["text-text-muted", "#888888"],
    ["text-text-nav", "#c8c8c8"],
    ["text-text-nav-muted", "#7a7a7a"],
    ["text-text-label", "#3a3a3a"],
    ["text-text-white", "#f0f0f0"]
  ])}

    ${colorSection("Accent & Status", [
    ["bg-accent", "#0f3460"],
    ["bg-accent-light", "#1a4a85"],
    ["bg-accent-pale", "#e8eef7"],
    ["bg-success", "#1a7a4a"],
    ["bg-warning", "#8a5a00"],
    ["bg-danger", "#8a1a1a"]
  ])}

    ${colorSection("Borders", [
    ["border-border", "#d4d4d4"],
    ["border-border-strong", "#b0b0b0"],
    ["border-border-focus", "#0f3460"]
  ])}
  `

  attachCopy(el)

  return el
}

function colorSection(title, tokens) {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        ${title}
      </h2>

      <div class="grid grid-cols-3 gap-6">
        ${tokens.map(([cls, hex]) => `
          <div class="border border-border rounded p-4 space-y-4 bg-bg-panel">

            <div class="h-14 rounded border ${cls.startsWith("text-")
      ? "bg-bg-panel flex items-center justify-center " + cls
      : cls
    }">
              ${cls.startsWith("text-") ? "Aa" : ""}
            </div>

            <div class="space-y-2 border-t border-border pt-2">

              <!-- Token Class (Larger + Prominent) -->
              <div class="flex items-center justify-between gap-2">
                <div class="font-mono text-lg font-semibold text-text-primary break-all">
                  <code>${cls}</code>
                </div>

                <button 
                  data-copy="${cls}"
                  class="copy-btn text-xs px-2 py-1 border border-border rounded hover:bg-bg-section transition hover:cursor-pointer"
                >
                  Copy
                </button>
              </div>

              <!-- Hex Value -->
              <div class="text-xs text-text-muted font-mono">
                ${hex}
              </div>

            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `
}