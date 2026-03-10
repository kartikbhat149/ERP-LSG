export default function TableExampleView() {

  const page = document.createElement("div")

  page.className = "erp-chrome"

  page.innerHTML = `

  <!-- GLOBAL HEADER -->
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

    <!-- SIDEBAR -->
    <aside class="erp-sidebar">

        <div class="erp-nav-section">

            <div class="erp-nav-section-header">
              Workspace
            </div>

            <div class="erp-nav-item">
                <span class="erp-nav-label">Dashboard</span>
            </div>

            <div class="erp-nav-item erp-nav-item-active">
                <span class="erp-nav-label">Orders</span>
            </div>

        </div>

    </aside>


    <!-- MAIN AREA -->
    <div class="erp-main-area">

      <!-- ACTION BAR -->
      <div class="erp-action-bar">

        <span class="erp-action-bar-title">
          Orders
        </span>

        <span class="erp-action-bar-subtitle">
          Manage and monitor customer orders
        </span>

        <button class="erp-btn erp-btn-secondary">
          Export
        </button>

        <button class="erp-btn erp-btn-primary">
          New Order
        </button>

      </div>


      <!-- WORKSPACE -->
      <div class="p-6 space-y-6 overflow-y-auto erp-scrollbar">

        <!-- FILTER BAR -->
        <div class="flex gap-3">

          <input
            class="erp-input w-64"
            placeholder="Search orders..."
          >

          <select class="erp-select w-40">
            <option>Status</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>

          <button class="erp-btn erp-btn-ghost">
            Reset
          </button>

        </div>


        <!-- DATA TABLE -->
        <section class="erp-audit">

          <div class="erp-section-header px-4 py-3">
            <div class="erp-section-title">
              Recent Orders
            </div>
          </div>

          <table class="erp-mini-table">

            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td class="erp-mini-table-mono">ORD-10021</td>
                <td>Acme Retail</td>
                <td>
                  <span class="erp-badge erp-badge-success">
                    Completed
                  </span>
                </td>
                <td>$4,200</td>
              </tr>

              <tr>
                <td class="erp-mini-table-mono">ORD-10022</td>
                <td>Vertex Ltd.</td>
                <td>
                  <span class="erp-badge erp-badge-warning">
                    Pending
                  </span>
                </td>
                <td>$1,980</td>
              </tr>

              <tr>
                <td class="erp-mini-table-mono">ORD-10023</td>
                <td>BluePeak</td>
                <td>
                  <span class="erp-badge erp-badge-danger">
                    Escalated
                  </span>
                </td>
                <td>$6,120</td>
              </tr>

            </tbody>

          </table>

        </section>


        <!-- PAGINATION -->
        <div class="flex justify-end">
          <div class="erp-pagination">
            <span class="erp-pagination-item">1</span>
            <span class="erp-pagination-item erp-pagination-item-active">2</span>
            <span class="erp-pagination-item">3</span>
          </div>
        </div>

      </div>

    </div>

  </div>
  `

  return page
}