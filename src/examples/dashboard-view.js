export default function DashboardView() {

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
    <aside class="erp-sidebar erp-scrollbar">

        <div class="erp-nav-section">

            <div class="erp-nav-section-header">
              Workspace
            </div>

            <div class="erp-nav-item erp-nav-item-active">
                <span class="erp-nav-label">Dashboard</span>
            </div>

            <div class="erp-nav-item">
                <span class="erp-nav-label">Sales</span>
            </div>

            <div class="erp-nav-item">
                <span class="erp-nav-label">Inventory</span>
            </div>

            <div class="erp-nav-item">
                <span class="erp-nav-label">Finance</span>
            </div>

        </div>

    </aside>


    <!-- MAIN AREA -->
    <div class="erp-main-area">

        <!-- ACTION BAR -->
        <div class="erp-action-bar">

            <span class="erp-action-bar-title">
              Operational Dashboard
            </span>

            <span class="erp-action-bar-subtitle">
              Real-time overview of system activity
            </span>

            <button class="erp-btn erp-btn-secondary">
              Refresh
            </button>

        </div>


        <!-- ALERT STRIP -->
        <div class="erp-notify erp-notify-warn">

          Inventory levels critically low for 3 SKUs

          <span class="erp-notify-close">✕</span>

        </div>


        <!-- WORKSPACE -->
        <div class="p-6 space-y-6 overflow-y-auto erp-scrollbar">


          <!-- KPI PANELS -->
          <div class="grid grid-cols-4 gap-4">

            <div class="erp-info-panel">
              <div class="erp-info-panel-title">Active Orders</div>
              <div class="text-xl font-semibold">1,284</div>
              <span class="erp-tag erp-tag-success">+8% today</span>
            </div>

            <div class="erp-info-panel">
              <div class="erp-info-panel-title">Revenue Today</div>
              <div class="text-xl font-semibold">$24,800</div>
              <span class="erp-tag erp-tag-success">+5%</span>
            </div>

            <div class="erp-info-panel">
              <div class="erp-info-panel-title">Pending Approvals</div>
              <div class="text-xl font-semibold">24</div>
              <span class="erp-tag erp-tag-warning">Review Required</span>
            </div>

            <div class="erp-info-panel">
              <div class="erp-info-panel-title">Users Online</div>
              <div class="text-xl font-semibold">42</div>
              <span class="erp-status-dot erp-status-dot-success"></span>
            </div>

          </div>


          <!-- RECENT TRANSACTIONS -->
          <section class="erp-audit">

            <div class="erp-section-header px-4 py-3">
              <div class="erp-section-title">
                Recent Transactions
              </div>
            </div>

            <table class="erp-mini-table">

              <thead>
                <tr>
                  <th>Order</th>
                  <th>Customer</th>
                  <th>Status</th>
                  <th>Amount</th>
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


          <!-- ACTIVITY FEED -->
          <section class="erp-audit">

            <div class="erp-audit-header">
              Recent Activity
            </div>

            <div class="erp-audit-entry">
              <div class="erp-audit-time">11:32</div>
              <div class="erp-audit-msg">Purchase order approved</div>
              <div class="erp-audit-user">J. Mehta</div>
            </div>

            <div class="erp-audit-entry">
              <div class="erp-audit-time">10:48</div>
              <div class="erp-audit-msg">Inventory adjustment posted</div>
              <div class="erp-audit-user">L. Chen</div>
            </div>

          </section>


          <!-- QUICK MODULES -->
          <section>

            <div class="erp-section-header mb-4">
              <div class="erp-section-title">
                Quick Modules
              </div>
            </div>

            <div class="erp-module-grid">

                <div class="erp-module-cell">
                  <div class="erp-module-cell-icon">📈</div>
                  <div class="erp-module-cell-name">Sales</div>
                </div>

                <div class="erp-module-cell">
                  <div class="erp-module-cell-icon">📦</div>
                  <div class="erp-module-cell-name">Inventory</div>
                </div>

                <div class="erp-module-cell">
                  <div class="erp-module-cell-icon">💰</div>
                  <div class="erp-module-cell-name">Finance</div>
                </div>

                <div class="erp-module-cell">
                  <div class="erp-module-cell-icon">👥</div>
                  <div class="erp-module-cell-name">HR</div>
                </div>

            </div>

          </section>


        </div>

    </div>

  </div>
  `

  return page
}