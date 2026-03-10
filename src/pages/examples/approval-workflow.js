import ExampleFrame from "../../components/ExampleFrame"
import ApprovalWorkflowView from "../../examples/approval-workflow-view"

export default function ApprovalWorkflowExample() {

  const page = document.createElement("div")

  page.className = "space-y-6"

  page.innerHTML = `
    <div>

      <h1 class="text-lg font-semibold text-text-primary">
        Approval Workflow
      </h1>

      <p class="text-sm text-text-muted">
        ERP approval process example showing request summary,
        decision actions and approval history.
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

    <a href="#/organisms/chrome-layout" class="erp-tag">
      Chrome Layout
    </a>

    <a href="#/organisms/global-header" class="erp-tag">
      Global Header
    </a>

    <a href="#/organisms/sidebar" class="erp-tag">
      Sidebar Navigation
    </a>

    <a href="#/organisms/action-bar" class="erp-tag">
      Action Bar
    </a>

    <a href="#/organisms/info-panel" class="erp-tag">
      Info Panel
    </a>

    <a href="#/organisms/audit-trail" class="erp-tag">
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

    <a href="#/molecules/section-header" class="erp-tag">
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

    <a href="#/atoms/button" class="erp-tag">
      Button
    </a>

    <a href="#/atoms/avatar" class="erp-tag">
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
     ├── Request Summary (Info Panel)
     └── Approval History (Audit Trail)
</pre>
`

  page.appendChild(structure)


  page.appendChild(
    ExampleFrame(
      ApprovalWorkflowView(),
      "#/examples/approval-workflow-page"
    )
  )

  return page
}