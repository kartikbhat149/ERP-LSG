import { createSectionList } from "../utils/createSectionList"

export default function Patterns() {

  return createSectionList({

    title: "Patterns",

    description: "Interaction flows and behavioral patterns used across ERP modules.",

    items: [
      { label: "Save Flow", path: "/patterns/save-flow" },
      { label: "Validation State", path: "/patterns/validation" },
      { label: "Loading State", path: "/patterns/loading" },
      { label: "Empty State", path: "/patterns/empty-state" },
      { label: "Feature Flag", path: "/patterns/feature-flag" },
      { label: "Confirmation", path: "/patterns/confirmation" },
      { label: "Module Activation", path: "/patterns/module-activation" }
    ]

  })

}