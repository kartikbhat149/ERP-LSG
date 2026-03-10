export default function EmptyStateView() {

  const page = document.createElement("div")

  page.className = "erp-chrome"

  page.innerHTML = `

<header class="erp-global-header">

  <div class="erp-logo">
    Nexus<span class="erp-logo-highlight">ERP</span>
  </div>

  <div class="erp-header-spacer"></div>

  <div class="erp-header-user">
    <div class="erp-avatar">AR</div>
    <span>A. Ramirez</span>
  </div>

</header>


<div class="erp-body-row">

  <aside class="erp-sidebar">

    <div class="erp-nav-section">

      <div class="erp-nav-section-header">
        CRM
      </div>

      <div class="erp-nav-item erp-nav-item-active">
        <span class="erp-nav-label">
          Customers
        </span>
      </div>

    </div>

  </aside>


  <div class="erp-main-area">

    <div class="erp-action-bar">

      <span class="erp-action-bar-title">
        Customers
      </span>

      <span class="erp-action-bar-subtitle">
        Manage customer records
      </span>

      <button class="erp-btn erp-btn-primary">
        New Customer
      </button>

    </div>


    <div class="p-10 flex items-center justify-center">

      <div class="erp-info-panel text-center max-w-md">

        <div class="text-3xl mb-4">
          📭
        </div>

        <div class="text-sm text-text-muted mb-4">
          No customer records found.
          Create your first customer to start managing relationships.
        </div>

        <button class="erp-btn erp-btn-primary">
          Create Customer
        </button>

      </div>

    </div>

  </div>

</div>
`

  return page
}