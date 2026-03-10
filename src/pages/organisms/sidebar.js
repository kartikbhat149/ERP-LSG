import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function SidebarNavigation() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  const header = document.createElement("div")
  header.innerHTML = `
    <h1 class="text-2xl font-semibold text-text-primary mb-2">
      Sidebar Navigation
    </h1>
    <p class="text-sm text-text-muted">
      Production-grade vertical navigation with collapse support.
    </p>
  `
  el.appendChild(header)

  el.appendChild(componentClassSection())
  el.appendChild(structureSection())
  el.appendChild(guidelinesSection())

  attachCopy(el)

  /* previewTabs mount */
  const markup = `
<aside class="erp-sidebar">

  <div class="erp-nav-section">

    <div class="erp-nav-item erp-nav-item-active">
      <span class="erp-nav-icon">□</span>
      <span class="erp-nav-label">General Settings</span>
    </div>

    <div class="erp-nav-item">
      <span class="erp-nav-icon">◷</span>
      <span class="erp-nav-label">Localization & Regional</span>
    </div>

    <div class="erp-nav-item">
      <span class="erp-nav-icon">🔍</span>
      <span class="erp-nav-label">Audit & Compliance</span>
      <span class="erp-nav-badge">3</span>
    </div>

    <div class="erp-nav-item" data-parent>
      <span class="erp-nav-icon">📈</span>
      <span class="erp-nav-label">Sales</span>
      <span class="erp-nav-expand-icon">▶</span>
    </div>

    <div class="erp-nav-children">
      <div class="erp-nav-sub-item">
        <span class="erp-nav-label">Price Lists</span>
      </div>

      <div class="erp-nav-sub-item">
        <span class="erp-nav-label">Tax Rules</span>
        <span class="erp-nav-badge">2</span>
      </div>
    </div>

  </div>

</aside>
`.trim()

  const mount = el.querySelector("#sidebar-preview")
  const preview = previewTabs(markup)

  mount.appendChild(preview)

  attachSidebarInteraction(preview)

  return el
}

/* ============================= */
/* Component Class */
/* ============================= */

function componentClassSection() {
  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Component Class
    </h2>

    <div class="border border-border rounded-sm p-4 bg-bg-panel flex items-center gap-6">
      <div class="font-mono text-lg font-semibold text-text-primary">
        <code>.erp-sidebar</code>
      </div>

      <button data-copy="erp-sidebar"
        class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto">
        Copy
      </button>
    </div>
  `

  return section
}

/* ============================= */
/* Structure */
/* ============================= */

function structureSection() {
  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Structure
    </h2>

    <div id="sidebar-preview"></div>
  `

  return section
}

/* ============================= */
/* Sidebar Interaction */
/* ============================= */

function attachSidebarInteraction(root) {

  const sidebar = root.querySelector(".erp-sidebar")

  if (!sidebar) return

  const clearActive = () => {
    sidebar.querySelectorAll(
      ".erp-nav-item-active, .erp-nav-sub-item-active"
    ).forEach(el =>
      el.classList.remove(
        "erp-nav-item-active",
        "erp-nav-sub-item-active"
      )
    )
  }

  sidebar.querySelectorAll("[data-parent]").forEach(parent => {

    parent.addEventListener("click", () => {

      clearActive()
      parent.classList.add("erp-nav-item-active")

      const children = parent.nextElementSibling

      if (!children || !children.classList.contains("erp-nav-children"))
        return

      const isOpen = children.style.maxHeight

      if (isOpen) {
        children.style.maxHeight = null
        parent.classList.remove("erp-nav-item-expanded")
      } else {
        children.style.maxHeight = children.scrollHeight + "px"
        parent.classList.add("erp-nav-item-expanded")
      }
    })

  })

  sidebar.querySelectorAll(".erp-nav-item:not([data-parent])")
    .forEach(item => {

      item.addEventListener("click", () => {

        if (item.classList.contains("erp-nav-item-disabled")) return

        clearActive()
        item.classList.add("erp-nav-item-active")

      })

    })

  sidebar.querySelectorAll(".erp-nav-sub-item")
    .forEach(item => {

      item.addEventListener("click", e => {

        e.stopPropagation()
        clearActive()
        item.classList.add("erp-nav-sub-item-active")

      })

    })

}

/* ============================= */
/* Guidelines */
/* ============================= */

function guidelinesSection() {
  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Usage Guidelines
    </h2>

    <div class="text-xs text-text-muted space-y-2 border border-border rounded-sm p-6 bg-bg-panel">
      <div>• Active state includes left accent indicator</div>
      <div>• Sections support collapse via state class</div>
      <div>• Sidebar supports icon-only collapsed mode</div>
      <div>• Badges are optional</div>
      <div>• Disabled state uses opacity</div>
    </div>
  `

  return section
}