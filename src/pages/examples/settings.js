import ExampleFrame from "../../components/ExampleFrame"
import SettingsView from "../../examples/settings-view"

export default function SettingsExample() {

  const page = document.createElement("div")

  page.className = "space-y-6"

  page.innerHTML = `
    <div>
      <h1 class="text-lg font-semibold text-text-primary">
        Settings Console
      </h1>

      <p class="text-sm text-text-muted">
        Example of a full ERP configuration page.
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
    <a href="#/organisms/chrome-layout" class="erp-tag">Chrome Layout</a>
    <a href="#/organisms/global-header" class="erp-tag">Global Header</a>
    <a href="#/organisms/sidebar" class="erp-tag">Sidebar Navigation</a>
    <a href="#/organisms/breadcrumb" class="erp-tag">Breadcrumb</a>
    <a href="#/organisms/action-bar" class="erp-tag">Action Bar</a>
    <a href="#/organisms/module-grid" class="erp-tag">Module Grid</a>
    <a href="#/organisms/audit-trail" class="erp-tag">Audit Trail</a>
  </div>

</div>


<!-- MOLECULES -->
<div class="space-y-2">

  <div class="text-xs text-text-muted uppercase tracking-wide">
    Molecules
  </div>

  <div class="flex flex-wrap gap-2">
    <a href="#/molecules/form-row" class="erp-tag">Form Row</a>
    <a href="#/molecules/section-header" class="erp-tag">Section Header</a>
    <a href="#/molecules/notify-bar" class="erp-tag">Notify Bar</a>
    <a href="#/molecules/unsaved-indicator" class="erp-tag">Unsaved Indicator</a>
  </div>

</div>


<!-- ATOMS -->
<div class="space-y-2">

  <div class="text-xs text-text-muted uppercase tracking-wide">
    Atoms
  </div>

  <div class="flex flex-wrap gap-2">
    <a href="#/atoms/button" class="erp-tag">Button</a>
    <a href="#/atoms/input" class="erp-tag">Input</a>
    <a href="#/atoms/select" class="erp-tag">Select</a>
    <a href="#/atoms/status-dot" class="erp-tag">Status Dot</a>
    <a href="#/atoms/avatar" class="erp-tag">Avatar</a>
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
     ├── Config Section
     │    └── Form Rows
     ├── Module Grid
     └── Audit Trail
</pre>
`

  page.appendChild(structure)


  page.appendChild(
    ExampleFrame(
      SettingsView(),
      "#/examples/setting-page"
    )
  )

  return page
}