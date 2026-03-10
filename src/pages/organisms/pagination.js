import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function Pagination() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  const header = document.createElement("div")
  header.innerHTML = `
    <h1 class="text-2xl font-semibold text-text-primary mb-2">
      Pagination
    </h1>
    <p class="text-sm text-text-muted">
      Compact page navigation control used in table and list views.
    </p>
  `
  el.appendChild(header)

  el.appendChild(componentClassSection())
  el.appendChild(structureSection())
  el.appendChild(guidelinesSection())

  attachCopy(el)

  /* ============================= */
  /* Preview Mount */
  /* ============================= */

  const markup = `
<div class="space-y-4">

  <div class="text-xs text-text-muted" data-page-info></div>

  <div class="erp-pagination" data-pagination></div>

</div>
  `.trim()

  const mount = el.querySelector("#pagination-preview")
  const preview = previewTabs(markup)

  mount.appendChild(preview)

  attachPagination(preview)

  return el
}

/* ============================= */

function componentClassSection() {
  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Component Class
    </h2>

    <div class="border border-border rounded-sm p-4 bg-bg-panel flex items-center gap-6">
      <div class="font-mono text-lg font-semibold text-text-primary">
        <code>.erp-pagination</code>
      </div>

      <button data-copy="erp-pagination"
        class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto">
        Copy
      </button>
    </div>
  `
  return section
}

/* ============================= */

function structureSection() {
  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Structure
    </h2>

    <div id="pagination-preview" class="w-full"></div>
  `

  return section
}

/* ============================= */

function guidelinesSection() {
  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Usage Guidelines
    </h2>

    <div class="text-xs text-text-muted space-y-2 border border-border rounded-sm p-6 bg-bg-panel">
      <div>• Use in table or list views</div>
      <div>• Highlight current page with active state</div>
      <div>• Disable Prev/Next when not available</div>
      <div>• Keep page count visible under 7 items</div>
      <div>• Avoid excessive pagination depth</div>
    </div>
  `
  return section
}

/* ============================= */
/* Pagination Interaction */
/* ============================= */

function attachPagination(root) {

  const pagination = root.querySelector("[data-pagination]")
  const info = root.querySelector("[data-page-info]")

  const totalPages = 5
  let currentPage = 1

  function render() {

    pagination.innerHTML = ""

    const prev = document.createElement("div")
    prev.className = "erp-pagination-item"
    prev.textContent = "Prev"

    if (currentPage === 1) {
      prev.classList.add("erp-pagination-disabled")
    } else {
      prev.onclick = () => {
        currentPage--
        render()
      }
    }

    pagination.appendChild(prev)

    for (let i = 1; i <= totalPages; i++) {

      const item = document.createElement("div")
      item.className = "erp-pagination-item"
      item.textContent = i

      if (i === currentPage) {
        item.classList.add("erp-pagination-active")
      } else {
        item.onclick = () => {
          currentPage = i
          render()
        }
      }

      pagination.appendChild(item)
    }

    const next = document.createElement("div")
    next.className = "erp-pagination-item"
    next.textContent = "Next"

    if (currentPage === totalPages) {
      next.classList.add("erp-pagination-disabled")
    } else {
      next.onclick = () => {
        currentPage++
        render()
      }
    }

    pagination.appendChild(next)

    info.textContent = `Current Page: ${currentPage} of ${totalPages}`
  }

  render()
}