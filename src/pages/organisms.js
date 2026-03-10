import { createSectionList } from "../utils/createSectionList"

export default function Organisms() {

  return createSectionList({

    title: "Organisms",

    description: "Large UI structures combining multiple molecules and atoms.",

    items: [
      { label: "Chrome Layout", path: "/organisms/chrome-layout" },
      { label: "Global Header", path: "/organisms/global-header" },
      { label: "Sidebar Navigation", path: "/organisms/sidebar" },
      { label: "Breadcrumb", path: "/organisms/breadcrumb" },
      { label: "Action Bar", path: "/organisms/action-bar" },
      { label: "Config Section", path: "/organisms/config-section" },
      { label: "Module Grid", path: "/organisms/module-grid" },
      { label: "Data Table", path: "/organisms/data-table" },
      { label: "Info Panel", path: "/organisms/info-panel" },
      { label: "Toast", path: "/organisms/toast" },
      { label: "Modal", path: "/organisms/modal" },
      { label: "Dropdown", path: "/organisms/dropdown" },
      { label: "Tooltip", path: "/organisms/tooltip" },
      { label: "Pagination", path: "/organisms/pagination" },
      { label: "Audit Trail", path: "/organisms/audit-trail" }
    ]

  })

}