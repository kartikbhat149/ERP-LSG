import  attachCopy from "../../utils/copy"
export default function Typography() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Typography
      </h1>
      <p class="text-sm text-text-muted">
        Defines font families, scale, weights, and line-height tokens used across ERP.
      </p>
    </div>

    ${sectionFontFamily()}
    ${sectionFontSize()}
    ${sectionFontWeight()}
    ${sectionLineHeight()}
  `

  attachCopy(el)

  return el
}

/* ---------------------------------- */
/* Font Families */
/* ---------------------------------- */

function sectionFontFamily() {
  const items = [
    ["font-sans", "Primary UI font"],
    ["font-mono", "Code / token display font"]
  ]

  return buildSection("Font Families", items, (cls, desc) => `
    <div class="border border-border rounded p-4 space-y-4 bg-bg-panel">
      <div class="text-lg ${cls}">
        The quick brown fox jumps over the lazy dog.
      </div>

      ${tokenMeta(cls, desc)}
    </div>
  `)
}

/* ---------------------------------- */
/* Font Size Scale */
/* ---------------------------------- */

function sectionFontSize() {
  const items = [
    ["text-xs", "Extra Small"],
    ["text-sm", "Small"],
    ["text-base", "Base (ERP Default)"],
    ["text-lg", "Large"],
    ["text-xl", "Extra Large"],
    ["text-2xl", "Heading"]
  ]

  return buildSection("Font Sizes", items, (cls, desc) => `
    <div class="border border-border rounded p-4 space-y-4 bg-bg-panel">
      <div class="${cls} text-text-primary">
        ${cls} — ERP Typography Sample
      </div>

      ${tokenMeta(cls, desc)}
    </div>
  `)
}

/* ---------------------------------- */
/* Font Weight */
/* ---------------------------------- */

function sectionFontWeight() {
  const items = [
    ["font-normal", "Regular text"],
    ["font-medium", "UI emphasis"],
    ["font-semibold", "Headings & labels"]
  ]

  return buildSection("Font Weights", items, (cls, desc) => `
    <div class="border border-border rounded p-4 space-y-4 bg-bg-panel">
      <div class="text-base ${cls}">
        ${cls} weight example text
      </div>

      ${tokenMeta(cls, desc)}
    </div>
  `)
}

/* ---------------------------------- */
/* Line Height */
/* ---------------------------------- */

function sectionLineHeight() {
  const items = [
    ["leading-tight", "Compact"],
    ["leading-normal", "Default"],
    ["leading-relaxed", "Readable blocks"]
  ]

  return buildSection("Line Heights", items, (cls, desc) => `
    <div class="border border-border rounded p-4 space-y-4 bg-bg-panel">
      <div class="text-base ${cls}">
        This is a paragraph example demonstrating ${cls}.
        ERP systems require readable dense content blocks
        with controlled vertical rhythm.
      </div>

      ${tokenMeta(cls, desc)}
    </div>
  `)
}

/* ---------------------------------- */
/* Generic Section Builder */
/* ---------------------------------- */

function buildSection(title, items, renderCard) {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        ${title}
      </h2>

      <div class="grid grid-cols-2 gap-6">
        ${items.map(([cls, desc]) => renderCard(cls, desc)).join("")}
      </div>
    </section>
  `
}

/* ---------------------------------- */
/* Token Meta + Copy */
/* ---------------------------------- */

function tokenMeta(cls, desc) {
  return `
    <div class="space-y-2 border-t border-border pt-2">

      <div class="flex items-center justify-between">
        <div class="font-mono text-lg font-semibold text-text-primary">
          <code>${cls}</code>
        </div>
        
        <button
          data-copy="${cls}"
          class="copy-btn text-xs px-2 py-1 border border-border rounded hover:bg-bg-section transition"
        >
          Copy
        </button>
      </div>

      <div class="text-xs text-text-muted">
        ${desc}
      </div>
    </div>
  `
}
