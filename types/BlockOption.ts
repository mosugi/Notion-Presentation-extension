export type BlockStyle = "Nothing" | "Fade In" | "Slide In" | "Caption" | "Hide"

export type BlockOption = {
  style: BlockStyle
  useAsSeparator: boolean
  isReadAloud: boolean
}

export const SlideBlockStyle = {
  None: {
    name: "Nothing",
    styles: []
  },
  Fade: {
    name: "Fade In",
    styles: [
      { prop: "animationDuration", value: "1s" },
      { prop: "animationName", value: "fade-in" }
    ]
  },
  Slide: {
    name: "Slide In",
    styles: [
      [
        { prop: "animationDuration", value: "1s" },
        { prop: "animationName", value: "slide-in" }
      ]
    ]
  },
  Caption: {
    name: "Caption",
    styles: [
      { prop: "bottom", value: "16px" },
      { prop: "position", value: "fixed" },
      { prop: "animationDuration", value: "1s" },
      { prop: "animationName", value: "fade-in" }
    ]
  },
  Hide: {
    name: "Hide",
    styles: [[{ prop: "display", value: "none" }]]
  }
}

export type SlideBlockStyle =
  (typeof SlideBlockStyle)[keyof typeof SlideBlockStyle]

export const getSlideStyles = (style: string) =>
  Object.values(SlideBlockStyle)
    .filter((it) => it.name === style)
    .flatMap((it) => it.styles)
