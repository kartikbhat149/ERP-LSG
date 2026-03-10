import { createSectionList } from "../utils/createSectionList"

export default function Atoms() {

  return createSectionList({

    title: "Atoms",

    description: "Smallest reusable UI primitives used across forms and layouts.",

    items: [
      { label: "Button", path: "/atoms/button" },
      { label: "Icon Button", path: "/atoms/icon-button" },
      { label: "Input", path: "/atoms/input" },
      { label: "Textarea", path: "/atoms/textarea" },
      { label: "Select", path: "/atoms/select" },
      { label: "Checkbox", path: "/atoms/checkbox" },
      { label: "Radio", path: "/atoms/radio" },
      { label: "Toggle", path: "/atoms/toggle" },
      { label: "Tag", path: "/atoms/tag" },
      { label: "Badge", path: "/atoms/badge" },
      { label: "Status Dot", path: "/atoms/status-dot" },
      { label: "Avatar", path: "/atoms/avatar" },
      { label: "Link", path: "/atoms/link" },
      { label: "Divider", path: "/atoms/divider" },
      { label: "Label Help", path: "/atoms/label-help" }
    ]

  })

}