import { createSectionList } from "../utils/createSectionList"

export default function Molecules() {

  return createSectionList({

    title: "Molecules",

    description: "Composed UI blocks built from atoms.",

    items: [
      { label: "Form Row", path: "/molecules/form-row" },
      { label: "Input Group", path: "/molecules/input-group" },
      { label: "Field Block", path: "/molecules/field-block" },
      { label: "Section Header", path: "/molecules/section-header" },
      { label: "Tab Bar", path: "/molecules/tab-bar" },
      { label: "Notify Bar", path: "/molecules/notify-bar" },
      { label: "Unsaved Indicator", path: "/molecules/unsaved-indicator" },
      { label: "Action Group", path: "/molecules/action-group" }
    ]

  })

}