import { sidebarConfig, getItemPath } from "../config/sidebar"

let mainContainer = null

export function initLayout() {

  const app = document.getElementById("app")

  const wrapper = document.createElement("div")
  wrapper.className = "h-screen bg-gray-50 flex flex-col"

  const topbar = document.createElement("header")
  topbar.className =
    "h-14 bg-white border-b flex items-center px-8 text-sm font-semibold text-gray-800 flex-shrink-0"

  topbar.innerHTML = `
      <div class="flex items-center justify-between w-full">

        <a href="#/" class="flex items-center gap-2 text-sm text-gray-800 font-semibold">
        <div class="text-sm font-semibold text-gray-800">
          ERP Living Style Guide
        </div>
        </a>

        <div class="flex items-center gap-2 text-xs text-text-muted">

          <span>Jump to component</span>

          <kbd class="px-2 py-0.5 border border-border rounded bg-bg-panel font-mono">
            Ctrl
          </kbd>

          <kbd class="px-2 py-0.5 border border-border rounded bg-bg-panel font-mono">
            K
          </kbd>

        </div>

      </div>
      `

  const body = document.createElement("div")
  body.className = "flex flex-1 min-h-0"

  /* SIDEBAR */

  const sidebar = document.createElement("aside")
  sidebar.className =
    "w-64 bg-white border-r overflow-y-auto text-sm flex-shrink-0 erp-scrollbar"

  const sidebarInner = document.createElement("div")
  sidebarInner.className = "py-6"

  /* SEARCH */

  const searchBox = document.createElement("div")
  searchBox.className = "px-6 mb-4"

  searchBox.innerHTML = `
    <input
      type="text"
      placeholder="Search components"
      class="erp-input w-full"
    >
    <span class="flex items-center mt-1 justify-end text-xs text-text-muted font-mono">
      press  <kbd class="mx-2 px-2 py-0.5 border border-border rounded bg-bg-panel font-mono">
             / 
          </kbd>  to search
    </span>
  `

  sidebarInner.appendChild(searchBox)

  /* SIDEBAR NAV */

  sidebarConfig.forEach(section => {

    const title = document.createElement("div")
    title.className =
      "sticky top-0 bg-white px-6 py-2 text-xs font-semibold text-gray-400 uppercase z-10"

    title.innerHTML = `<span class="mr-2">${section.icon || ""}</span> ${section.title}`
    sidebarInner.appendChild(title)

    const items = document.createElement("div")
    items.className = "px-6 pb-6"

    section.items.forEach(item => {

      /* GROUP WITH CHILDREN */

      if (item.children) {

        const groupTitle = document.createElement("div")
        groupTitle.className =
          "mt-3 mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400"

        groupTitle.textContent = item.label

        items.appendChild(groupTitle)

        item.children.forEach(child => {

          const link = document.createElement("a")

          link.textContent = child.label
          link.className =
            "block py-1 px-2 rounded hover:bg-gray-100 hover:text-blue-600 transition"

          link.href = child.url
          link.target = "_blank"
          link.rel = "noopener"

          items.appendChild(link)

        })

        return
      }

      /* NORMAL ITEM */

      const path = getItemPath(section, item)

      const link = document.createElement("a")

      link.textContent = item.label
      link.className =
        "block py-1 px-2 rounded hover:bg-gray-100 hover:text-blue-600 transition"

      if (item.external) {

        link.href = item.url
        link.target = "_blank"
        link.rel = "noopener"

      } else {

        link.href = `#${path}`
        link.dataset.path = path

      }

      items.appendChild(link)

    })

    sidebarInner.appendChild(items)

  })

  sidebar.appendChild(sidebarInner)

  /* MAIN */

  const main = document.createElement("main")
  main.className = "flex-1 min-h-0 p-12 overflow-auto erp-scrollbar"


  const contentWrapper = document.createElement("div")
  contentWrapper.className = "max-w-5xl"

  main.appendChild(contentWrapper)
  mainContainer = contentWrapper

  body.appendChild(sidebar)
  body.appendChild(main)

  wrapper.appendChild(topbar)
  wrapper.appendChild(body)

  app.appendChild(wrapper)

  /* SEARCH LOGIC */

  const searchInput = sidebar.querySelector("input")

  searchInput.addEventListener("input", (e) => {

    const query = e.target.value.toLowerCase()
    const sections = sidebar.querySelectorAll(".px-6.pb-6")

    sections.forEach(section => {

      const links = section.querySelectorAll("a")
      let visibleCount = 0

      links.forEach(link => {

        const label = link.textContent.toLowerCase()

        if (label.includes(query)) {
          link.style.display = ""
          visibleCount++
        } else {
          link.style.display = "none"
        }

      })

      const title = section.previousElementSibling

      if (visibleCount === 0) {
        section.style.display = "none"
        if (title) title.style.display = "none"
      } else {
        section.style.display = ""
        if (title) title.style.display = ""
      }

    })

  })

  /* "/" SHORTCUT */

  document.addEventListener("keydown", (e) => {

    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault()
      searchInput.focus()
    }

    if (e.key === "Escape" && document.activeElement === searchInput) {
      searchInput.value = ""
      searchInput.dispatchEvent(new Event("input"))
      searchInput.blur()
    }

  })

  const palette = document.createElement("div")
  palette.className =
    "fixed inset-0 bg-black/40 hidden items-start justify-center pt-32 z-50"

  palette.innerHTML = `
  <div class="bg-white w-[520px] rounded-md shadow-xl border border-border">

    <input
      id="commandInput"
      type="text"
      autoSuggest="off"
      placeholder="Search components..."
      class="w-full px-4 py-3 border-b border-border text-sm outline-none"
    />

    <div id="commandResults" class="max-h-80 overflow-auto erp-scrollbar pt-2"></div>

    <div class="flex gap-2 justify-end px-4 py-2 text-xs text-text-muted border-t border-gray-200">
      <span class="px-2 py-0.5 border border-border rounded-sm bg-bg-panel">↑ ↓ navigate</span>
      <span class="px-2 py-0.5 border border-border rounded-sm bg-bg-panel">Enter open</span>
      <span class="px-2 py-0.5 border border-border rounded-sm bg-bg-panel">ESC close</span>
    </div>
  </div>
`
  palette.addEventListener("keydown", e => {
    if (e.key === "Tab") e.preventDefault()
  })
  palette.addEventListener("click", e => {
    if (e.target === palette) closePalette()
  })

  document.body.appendChild(palette)

  const commandInput = palette.querySelector("#commandInput")
  const commandResults = palette.querySelector("#commandResults")

  const commandItems = []

  sidebarConfig.forEach(section => {

    section.items.forEach(item => {

      const path = getItemPath(section, item)

      commandItems.push({
        label: item.label,
        path,
        section: section.title
      })

    })

  })

  let filteredItems = []
  let activeIndex = 0

  function renderResults(query = "") {

    commandResults.innerHTML = ""

    const q = query.toLowerCase()

    filteredItems = commandItems
      .map(item => {

        const label = item.label.toLowerCase()

        let rank = 3

        if (label === q) rank = 0
        else if (label.startsWith(q)) rank = 1
        else if (label.includes(q)) rank = 2

        return { ...item, rank }

      })
      .filter(item => item.rank < 3)
      .sort((a, b) => a.rank - b.rank)

    if (activeIndex >= filteredItems.length) activeIndex = 0

    let lastSection = null

    filteredItems.forEach((item, index) => {

      /* render section label */

      if (item.section !== lastSection) {

        const section = document.createElement("div")

        section.className =
          "px-4 pt-3 pb-1 text-xs text-text-muted uppercase font-semibold"

        section.textContent = item.section

        commandResults.appendChild(section)

        lastSection = item.section
      }

      const row = document.createElement("div")

      row.className =
        "px-4 py-2 text-sm cursor-pointer hover:bg-blue-50"

      if (index === activeIndex) {
        row.classList.add("bg-blue-50", "text-blue-600")
      }

      const label = item.label
      const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      const regex = new RegExp(`(${safeQuery})`, "ig")

      row.innerHTML = label.replace(regex, "<strong>$1</strong>")

      row.addEventListener("click", () => {
        location.hash = `#${item.path}`
        closePalette()
      })

      commandResults.appendChild(row)

      if (index === activeIndex) {
        setTimeout(() => {
          row.scrollIntoView({ block: "nearest" })
        })
      }

    })

  }

  function openPalette() {

    palette.classList.remove("hidden")
    palette.classList.add("flex")

    commandInput.value = ""
    activeIndex = 0

    renderResults()

    commandInput.focus()

  }

  function closePalette() {

    palette.classList.add("hidden")
    palette.classList.remove("flex")

  }

  commandInput.addEventListener("input", e => {
    activeIndex = 0
    renderResults(e.target.value)
  })

  /* Arrow navigation */

  commandInput.addEventListener("keydown", e => {

    if (!filteredItems.length) return

    if (e.key === "ArrowDown") {

      e.preventDefault()

      activeIndex = Math.min(activeIndex + 1, filteredItems.length - 1)

      renderResults(commandInput.value)

    }

    if (e.key === "ArrowUp") {

      e.preventDefault()

      activeIndex = Math.max(activeIndex - 1, 0)

      renderResults(commandInput.value)

    }

    if (e.key === "Enter") {

      e.preventDefault()

      const item = filteredItems[activeIndex]

      if (item) {
        location.hash = `#${item.path}`
        closePalette()
      }

    }

  })

  document.addEventListener("keydown", e => {

    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault()
      openPalette()
    }

    if (e.key === "Escape") {
      closePalette()
    }

  })

  window.addEventListener("hashchange", updateSidebarActive)
  updateSidebarActive()
}

export function renderPage(pageContentEl) {

  mainContainer.innerHTML = ""
  mainContainer.appendChild(pageContentEl)

  const main = document.querySelector("main")
  if (main) main.scrollTop = 0

  generatePageToc()

}

function updateSidebarActive() {

  const currentPath = location.hash.replace("#", "") || "/"

  let activeLink = null

  document.querySelectorAll("aside a").forEach(link => {

    link.classList.remove("bg-blue-50", "text-blue-600", "font-medium")

    if (link.dataset.path === currentPath) {
      link.classList.add("bg-blue-50", "text-blue-600", "font-medium")
      activeLink = link
    }

  })

  if (!activeLink) return

  /* scroll sidebar to active item */

  afterLayout(() => {
    activeLink.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
    })
  })

}

function afterLayout(fn) {
  requestAnimationFrame(() => requestAnimationFrame(fn))
}
function generatePageToc() {

  const toc = document.getElementById("pageToc")
  if (!toc) return

  toc.innerHTML = ""

  const headings = document.querySelectorAll("main h2")

  headings.forEach((heading, index) => {

    const id = "section-" + index
    heading.id = id

    const link = document.createElement("a")

    link.href = "#" + id
    link.textContent = heading.textContent

    link.className =
      "block hover:text-blue-600 cursor-pointer toc-link"

    link.addEventListener("click", e => {

      e.preventDefault()

      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })

    })

    toc.appendChild(link)
  })

}
