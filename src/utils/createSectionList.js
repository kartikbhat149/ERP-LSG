export function createSectionList({ title, description, items }) {

  const page = document.createElement("div")
  page.className = "space-y-10"

  page.innerHTML = `
    <div>
      <h1 class="text-3xl font-semibold text-text-primary mb-2">
        ${title}
      </h1>
      <p class="text-sm text-text-muted">
        ${description}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4" id="section-list"></div>
  `

  const container = page.querySelector("#section-list")

  items.forEach(item => {

    const card = document.createElement("a")

    card.href = item.path

    card.className = `
      block border border-border rounded-sm
      bg-bg-panel px-4 py-4
      hover:border-border-strong
      hover:bg-bg-section
      transition
    `

    card.innerHTML = `
      <div class="text-sm font-medium text-text-primary">
        ${item.label}
      </div>
      <div class="text-xs text-text-muted mt-1 font-mono">
        ${item.path}
      </div>
    `

    container.appendChild(card)

  })

  return page
}