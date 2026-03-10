import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function TabBar() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Tab Bar
      </h1>
      <p class="text-sm text-text-muted">
        Horizontal tab navigation with content switching.
      </p>
    </div>

    ${componentClassSection()}
    ${structureSection()}
    ${guidelinesSection()}
  `

  attachCopy(el)

  /* previewTabs mount */
  const markup = `
<div class="erp-tabs">

  <div class="erp-tab-bar">
    <button class="erp-tab erp-tab-active" data-tab="general">General</button>
    <button class="erp-tab" data-tab="billing">Billing</button>
    <button class="erp-tab" data-tab="shipping">Shipping</button>
  </div>

  <div class="erp-tab-panels">

    <div class="erp-tab-panel erp-tab-panel-active" data-panel="general">
      General content area
    </div>

    <div class="erp-tab-panel" data-panel="billing">
      Billing content area
    </div>

    <div class="erp-tab-panel" data-panel="shipping">
      Shipping content area
    </div>

  </div>

</div>
  `

  const mount = el.querySelector("#tabbar-preview")
  const preview = previewTabs(markup)

  mount.appendChild(preview)

  /* attach interaction to preview */
  attachTabs(preview)

  attachTabs(el)

  return el
}

/* ============================= */

function componentClassSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Component Structure
      </h2>

      <div class="border border-border rounded-sm p-6 bg-bg-panel">

        <div class="erp-tabs max-w-xl">

          <div class="erp-tab-bar">
            <button class="erp-tab erp-tab-active" data-tab="general">General</button>
            <button class="erp-tab" data-tab="billing">Billing</button>
            <button class="erp-tab" data-tab="shipping">Shipping</button>
          </div>

          <div class="erp-tab-panels">

            <div class="erp-tab-panel erp-tab-panel-active" data-panel="general">
              General content area
            </div>

            <div class="erp-tab-panel" data-panel="billing">
              Billing content area
            </div>

            <div class="erp-tab-panel" data-panel="shipping">
              Shipping content area
            </div>

          </div>

        </div>

      </div>
    </section>
  `
}

/* ============================= */

function structureSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Structure
      </h2>

      <div id="tabbar-preview"></div>

    </section>
  `
}

/* ============================= */

function guidelinesSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Usage Guidelines
      </h2>

      <div class="text-xs text-text-muted space-y-2 border border-border rounded-sm p-6 bg-bg-panel">
        <div>• Wrap tabs inside .erp-tabs container</div>
        <div>• data-tab must match data-panel</div>
        <div>• Only one tab and panel should be active</div>
        <div>• Avoid too many tabs (max 5 recommended)</div>
      </div>
    </section>
  `
}

/* ============================= */
/* INTERACTION LOGIC */
/* ============================= */

function attachTabs(root) {
  const tabWrappers = root.querySelectorAll(".erp-tabs")

  tabWrappers.forEach(wrapper => {
    const tabs = wrapper.querySelectorAll(".erp-tab")
    const panels = wrapper.querySelectorAll(".erp-tab-panel")

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        if (tab.disabled) return

        const target = tab.getAttribute("data-tab")

        tabs.forEach(t => t.classList.remove("erp-tab-active"))
        panels.forEach(panel =>
          panel.classList.remove("erp-tab-panel-active")
        )

        tab.classList.add("erp-tab-active")

        const targetPanel = wrapper.querySelector(
          `.erp-tab-panel[data-panel="${target}"]`
        )

        targetPanel?.classList.add("erp-tab-panel-active")
      })
    })
  })
}