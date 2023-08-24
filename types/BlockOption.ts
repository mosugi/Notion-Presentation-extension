export type BlockStyle =
  | "Nothing"
  | "Scroll Into View"
  | "Fade In"
  | "Slide In"
  | "Caption"
  | "Hide"

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
  Scroll: {
    name: "Scroll Into View",
    styles: []
  },
  Fade: {
    name: "Fade In",
    styles: [
      { prop: "animationDuration", value: "1s" },
      { prop: "animationName", value: "fadeIn" }
    ]
  },
  Slide: {
    name: "Slide In",
    styles: [
      { prop: "animationDuration", value: "1s" },
      { prop: "animationName", value: "slideInFromRight" }
    ]
  },
  Caption: {
    name: "Caption",
    styles: [
      { prop: "textAlign", value: "center" },
      { prop: "bottom", value: "16px" },
      { prop: "left", value: "50%" },
      { prop: "position", value: "fixed" },
      { prop: "transform", value: "translate(-50%, -50%)" },
      { prop: "zIndex", value: "100" },
      { prop: "backdropFilter", value: "blur(8px)" },
      { prop: "backgroundColor", value: "rgba(255,255,255,0.5)" },
      { prop: "animationDuration", value: "1s" },
      { prop: "animationName", value: "fadeIn" }
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
