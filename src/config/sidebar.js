export const sidebarConfig = [

  {
    title: "Foundations",
    icon: "⬤",
    base: "/foundations",
    items: [
      { label: "Color System", slug: "colors" },
      { label: "Typography", slug: "typography" },
      { label: "Spacing Scale", slug: "spacing" },
      { label: "Border & Radius", slug: "border-radius" },
      { label: "Elevation & Shadows", slug: "elevation" },
      { label: "Breakpoints", slug: "breakpoints" },
      { label: "Z-Index", slug: "zindex" },
      { label: "Motion & Transitions", slug: "motion" }
    ]
  },

  {
    title: "Atoms",
    icon: "⬤",
    base: "/atoms",
    items: [
      { label: "Button", slug: "button" },
      { label: "Icon Button", slug: "icon-button" },
      { label: "Input", slug: "input" },
      { label: "Textarea", slug: "textarea" },
      { label: "Select", slug: "select" },
      { label: "Checkbox", slug: "checkbox" },
      { label: "Radio", slug: "radio" },
      { label: "Toggle", slug: "toggle" },
      { label: "Tag", slug: "tag" },
      { label: "Badge", slug: "badge" },
      { label: "Status Dot", slug: "status-dot" },
      { label: "Avatar", slug: "avatar" },
      { label: "Link", slug: "link" },
      { label: "Divider", slug: "divider" },
      { label: "Label & Help", slug: "label-help" }
    ]
  },

  {
    title: "Molecules",
    icon: "⬤",
    base: "/molecules",
    items: [
      { label: "Form Row", slug: "form-row" },
      { label: "Input Group", slug: "input-group" },
      { label: "Field Block", slug: "field-block" },
      { label: "Section Header", slug: "section-header" },
      { label: "Tab Bar", slug: "tab-bar" },
      { label: "Notify Bar", slug: "notify-bar" },
      { label: "Unsaved Indicator", slug: "unsaved-indicator" },
      { label: "Action Group", slug: "action-group" }
    ]
  },

  {
    title: "Organisms",
    icon: "⬤",
    base: "/organisms",
    items: [
      { label: "Chrome Layout", slug: "chrome-layout" },
      { label: "Global Header", slug: "global-header" },
      { label: "Sidebar Navigation", slug: "sidebar" },
      { label: "Breadcrumb", slug: "breadcrumb" },
      { label: "Action Bar", slug: "action-bar" },
      { label: "Config Section", slug: "config-section" },
      { label: "Module Grid", slug: "module-grid" },
      { label: "Data Table", slug: "data-table" },
      { label: "Info Panel", slug: "info-panel" },
      { label: "Toast", slug: "toast" },
      { label: "Modal Dialog", slug: "modal" },
      { label: "Dropdown Menu", slug: "dropdown" },
      { label: "Tooltip", slug: "tooltip" },
      { label: "Pagination", slug: "pagination" },
      { label: "Audit Trail", slug: "audit-trail" }
    ]
  },

  {
    title: "Patterns",
    icon: "⬤",
    base: "/patterns",
    items: [
      { label: "Save Flow", slug: "save-flow" },
      { label: "Validation State", slug: "validation" },
      { label: "Loading State", slug: "loading" },
      { label: "Empty State", slug: "empty-state" },
      { label: "Feature Flag", slug: "feature-flag" },
      { label: "Confirmation Pattern", slug: "confirmation" },
      { label: "Module Activation", slug: "module-activation" }
    ]
  },

  {
    title: "Examples",
    icon: "⬤",
    base: "/examples",
    items: [
      { label: "Settings Console", slug: "settings" },
      { label: "Dashboard", slug: "dashboard" },
      { label: "Table View", slug: "table-view" },
      { label: "Record Detail", slug: "record-detail" },
      { label: "Form Editor", slug: "form-editor" },
      { label: "Empty State", slug: "empty-state" },
      { label: "Bulk Table View", slug: "bulk-table" },
      { label: "Approval Workflow", slug: "approval-workflow" },
      { label: "Analytics Report", slug: "analytics-report" }
    ]
  },
  {
    title: "External Resources",
    icon: "↗",
    items: [
      {
        label: "Icons",
        children: [
          { label: "Hero Icons (300+)", url: "https://heroicons.com/", external: true },
          { label: "Tabler Icons (4000+)", url: "https://tabler.io/icons#search", external: true },
          { label: "Lucide Icons (1400+)", url: "https://lucide.dev/icons/", external: true }
        ]
      },
      {
        label: "Charts",
        children: [
          { label: "Chart.js", url: "https://www.chartjs.org/", external: true }
        ]
      },
      {
        label: "Utilities",
        children: [
          { label: "date-fns", url: "https://date-fns.org/", external: true },
          { label: "Clipboard API", url: "https://clipboardjs.com/", external: true },
          { label: "Hotkeys.js", url: "https://wangchujiang.com/hotkeys-js/", external: true }
        ]
      },
      {
        label: "Data Export",
        children: [
          { label: "SheetJS (Excel/CSV)", url: "https://sheetjs.com/demo/table", external: true }
        ]
      }
    ]
  }

]

export function getItemPath(section, item) {
  return item.path || `${section.base}/${item.slug}`
}