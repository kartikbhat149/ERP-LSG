export default function RecordDetailView() {

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

      <div class="erp-nav-section-header">Orders</div>

      <div class="erp-nav-item erp-nav-item-active">
        <span class="erp-nav-label">Order Detail</span>
      </div>

    </div>

  </aside>


  <div class="erp-main-area">

    <div class="erp-action-bar">

      <span class="erp-action-bar-title">
        Order #ORD-10021
      </span>

      <span class="erp-action-bar-subtitle">
        Customer order record
      </span>

      <button class="erp-btn erp-btn-secondary">
        Print
      </button>

      <button class="erp-btn erp-btn-primary">
        Edit
      </button>

    </div>


    <div class="p-6 space-y-6">

      <section class="erp-audit">

        <div class="erp-section-header px-4 py-3">
          <div class="erp-section-title">Order Summary</div>
        </div>

        <div class="grid grid-cols-2 gap-4 p-4">

          <div>
            <div class="text-xs text-text-muted">Customer</div>
            <div class="font-medium">Acme Retail</div>
          </div>

          <div>
            <div class="text-xs text-text-muted">Total</div>
            <div class="font-medium">$4,200</div>
          </div>

        </div>

      </section>


      <section class="erp-audit">

        <div class="erp-audit-header">
          Activity Log
        </div>

        <div class="erp-audit-entry">
          <div class="erp-audit-time">11:02</div>
          <div class="erp-audit-msg">Order approved</div>
          <div class="erp-audit-user">A. Ramirez</div>
        </div>

      </section>

    </div>

  </div>

</div>
`

  return page
}