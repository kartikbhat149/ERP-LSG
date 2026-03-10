export default function AnalyticsReportView() {

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
          Reports
        </div>

        <div class="erp-nav-item erp-nav-item-active">
          <span class="erp-nav-label">
            Sales Analytics
          </span>
        </div>

      </div>

    </aside>


    <!-- MAIN AREA -->
    <div class="erp-main-area">

      <!-- ACTION BAR -->
      <div class="erp-action-bar">

        <span class="erp-action-bar-title">
          Sales Analytics
        </span>

        <span class="erp-action-bar-subtitle">
          Revenue and order performance
        </span>

        <button class="erp-btn erp-btn-secondary">
          Export Report
        </button>

      </div>


      <!-- WORKSPACE -->
      <div class="p-6 space-y-6 overflow-y-auto erp-scrollbar">


        <!-- KPI GRID -->
        <section class="erp-module-grid">

          <div class="erp-module-cell">
            <div class="erp-module-cell-name">
              Revenue
            </div>
            <div class="text-lg font-semibold">
              $120,450
            </div>
          </div>

          <div class="erp-module-cell">
            <div class="erp-module-cell-name">
              Orders
            </div>
            <div class="text-lg font-semibold">
              1,240
            </div>
          </div>

          <div class="erp-module-cell">
            <div class="erp-module-cell-name">
              Conversion Rate
            </div>
            <div class="text-lg font-semibold">
              3.4%
            </div>
          </div>

        </section>


        <!-- REPORT SUMMARY -->
        <section class="erp-info-panel">

          <div class="erp-section-title">
            Report Summary
          </div>

          <div class="text-sm text-text-muted mt-2">
            Revenue increased by 12% compared to the previous quarter.
            Order volume also grew steadily across all regions.
          </div>

        </section>

      </div>

    </div>

  </div>

  `

  return page
}   