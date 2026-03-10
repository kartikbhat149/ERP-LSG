import { createSectionList } from "../utils/createSectionList"

export default function Examples() {

  return createSectionList({

    title: "Examples",

    description: "Complete page compositions demonstrating ERP UI patterns.",

    items: [
      { label: "Settings Console", path: "/examples/settings" },
      { label: "Dashboard", path: "/examples/dashboard" },
      { label: "Table View", path: "/examples/table-view" },
      { label: "Record Detail", path: "/examples/record-detail" },
      { label: "Form Editor", path: "/examples/form-editor" },
      { label: "Empty State", path: "/examples/empty-state" },
      { label: "Bulk Table View", path: "/examples/bulk-table-view" },
      { label: "Approval Workflow", path: "/examples/approval-workflow" },
      { label: "Analytics Report", path: "/examples/analytics-report" }
    ]

  })

}