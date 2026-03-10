import { createSectionList } from "../utils/createSectionList"

export default function Foundations() {

  return createSectionList({

    title: "Foundations",

    description: "Design tokens and system primitives used across the ERP interface.",

    items: [
      { label: "Colors", path: "/foundations/colors" },
      { label: "Typography", path: "/foundations/typography" },
      { label: "Spacing", path: "/foundations/spacing" },
      { label: "Border Radius", path: "/foundations/border-radius" },
      { label: "Elevation", path: "/foundations/elevation" },
      { label: "Breakpoints", path: "/foundations/breakpoints" },
      { label: "Z Index", path: "/foundations/zindex" },
      { label: "Motion", path: "/foundations/motion" }
    ]

  })

}