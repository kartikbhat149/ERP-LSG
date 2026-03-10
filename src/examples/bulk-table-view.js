export default function BulkTableView() {

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
        <span class="erp-nav-label">Order List</span>
      </div>

    </div>

  </aside>


  <div class="erp-main-area">

    <div class="erp-action-bar">

      <span class="erp-action-bar-title">
        Orders
      </span>

      <button class="erp-btn erp-btn-secondary">
        Export
      </button>

      <button class="erp-btn erp-btn-primary">
        Create Order
      </button>

    </div>


    <div class="p-6 space-y-6">

      <section class="erp-audit">

        <div class="erp-section-header px-4 py-3">
          <div class="erp-section-title">
            Orders
          </div>
        </div>

        <table class="erp-mini-table">

          <thead>
            <tr>
              <th><input type="checkbox" class="erp-checkbox"></th>
              <th>Order</th>
              <th>Customer</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td><input type="checkbox" class="erp-checkbox"></td>
              <td class="erp-mini-table-mono">ORD-1012</td>
              <td>Acme Retail</td>
              <td>
                <span class="erp-badge erp-badge-success">
                  Completed
                </span>
              </td>
            </tr>

            <tr>
              <td><input type="checkbox" class="erp-checkbox"></td>
              <td class="erp-mini-table-mono">ORD-1013</td>
              <td>Vertex Ltd.</td>
              <td>
                <span class="erp-badge erp-badge-warning">
                  Pending
                </span>
              </td>
            </tr>

          </tbody>

        </table>

      </section>

    </div>

  </div>

</div>
`

  return page
}