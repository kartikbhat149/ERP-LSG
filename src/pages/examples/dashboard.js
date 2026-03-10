import ExampleFrame from "../../components/ExampleFrame"
import DashboardView from "../../examples/dashboard-view"

export default function DashboardExample() {

  const page = document.createElement("div")

  page.className = "space-y-6"

  page.innerHTML = `
    <div>
      <h1 class="text-lg font-semibold text-text-primary">
        Dashboard
      </h1>

      <p class="text-sm text-text-muted">
        Operational overview page combining KPI summaries, alerts,
        transaction monitoring, activity feeds and quick module access.
      </p>
    </div>
  `

  const used = document.createElement("div")

  used.className = "space-y-5"

  used.innerHTML = `

<div>
  <h2 class="text-sm font-semibold text-text-primary mb-2">
    Components Used
  </h2>
</div>


<!-- ORGANISMS -->
<div class="space-y-2">

  <div class="text-xs text-text-muted uppercase tracking-wide">
    Organisms
  </div>

  <div class="flex flex-wrap gap-2">

    <a href="#/organisms/chrome-layout"
       class="erp-tag"
       data-highlight=".erp-chrome">
       Chrome Layout
    </a>

    <a href="#/organisms/global-header"
       class="erp-tag"
       data-highlight=".erp-global-header">
       Global Header
    </a>

    <a href="#/organisms/sidebar"
       class="erp-tag"
       data-highlight=".erp-sidebar">
       Sidebar Navigation
    </a>

    <a href="#/organisms/action-bar"
       class="erp-tag"
       data-highlight=".erp-action-bar">
       Action Bar
    </a>

    <a href="#/organisms/info-panel"
       class="erp-tag"
       data-highlight=".erp-info-panel">
       Info Panel
    </a>

    <a href="#/organisms/module-grid"
       class="erp-tag"
       data-highlight=".erp-module-grid">
       Module Grid
    </a>

    <a href="#/organisms/data-table"
       class="erp-tag"
       data-highlight=".erp-module-grid">
       Data Table
    </a>

    <a href="#/organisms/audit-trail"
       class="erp-tag"
       data-highlight=".erp-audit">
       Audit Trail
    </a>

  </div>

</div>


<!-- MOLECULES -->
<div class="space-y-2">

  <div class="text-xs text-text-muted uppercase tracking-wide">
    Molecules
  </div>

  <div class="flex flex-wrap gap-2">

    <a href="#/molecules/notify-bar"
       class="erp-tag"
       data-highlight=".erp-notify">
       Notify Bar
    </a>

    <a href="#/molecules/section-header"
       class="erp-tag"
       data-highlight=".erp-section-header">
       Section Header
    </a>

  </div>

</div>


<!-- ATOMS -->
<div class="space-y-2">

  <div class="text-xs text-text-muted uppercase tracking-wide">
    Atoms
  </div>

  <div class="flex flex-wrap gap-2">

    <a href="#/atoms/button"
       class="erp-tag"
       data-highlight=".erp-btn">
       Button
    </a>

    <a href="#/atoms/badge"
       class="erp-tag"
       data-highlight=".erp-badge">
       Badge
    </a>

    <a href="#/atoms/tag"
       class="erp-tag"
       data-highlight=".erp-tag">
       Tag
    </a>

    <a href="#/atoms/status-dot"
       class="erp-tag"
       data-highlight=".erp-status-dot">
       Status Dot
    </a>

    <a href="#/atoms/avatar"
       class="erp-tag"
       data-highlight=".erp-avatar">
       Avatar
    </a>

  </div>

</div>

`

  page.appendChild(used)


  const structure = document.createElement("div")

  structure.innerHTML = `
<div class="text-sm font-semibold text-text-primary py-3">
  Layout Structure
</div>

<pre class="text-xs text-text-muted bg-bg-section border border-border rounded-sm p-3 font-mono leading-relaxed">
Chrome Layout
├── Global Header
├── Sidebar Navigation
└── Main Area
     ├── Action Bar
     ├── Notify Bar
     ├── KPI Panels (Info Panels)
     ├── Transactions Table
     ├── Activity Feed (Audit Trail)
     └── Module Grid
</pre>
`

  page.appendChild(structure)


  page.appendChild(
    ExampleFrame(
      DashboardView(),
      "#/examples/dashboard-page"
    )
  )

  return page
}


DashboardExample.components = [
  "/organisms/chrome-layout",
  "/organisms/global-header",
  "/organisms/sidebar",
  "/organisms/action-bar",
  "/organisms/module-grid",
  "/organisms/info-panel",
  "/organisms/audit-trail",
  "/molecules/notify-bar",
  "/molecules/section-header",
  "/atoms/button",
  "/atoms/badge",
  "/atoms/tag",
  "/atoms/status-dot",
  "/atoms/avatar"
]