import {
  config,
  keyframes,
  styled
} from "/build/_shared/chunk-5IJAOJZT.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-HKVP2BFN.js";

// app/styles/breakpoints.ts
var { media } = config;
var breakpoints = { xs: "", ...media };

// app/styles/helpers.ts
function getStylePropsFromToken(token) {
  return Object.keys(token).reduce((acc, key) => {
    const tokenKey = key;
    acc[tokenKey] = `$${key}`;
    return acc;
  }, {});
}
function toRem(px, rootFontSize = 16) {
  return `${px / rootFontSize}rem`;
}

// app/styles/common.ts
var {
  theme: { colors }
} = config;
var bgColor = getStylePropsFromToken(colors);
var display = {
  block: "block",
  "inline-block": "inline-block",
  inline: "inline",
  flex: "flex",
  "inline-flex": "inline-flex",
  grid: "grid",
  "inline-grid": "inline-grid",
  hidden: "none"
};
var position = {
  static: "static",
  fixed: "fixed",
  absolute: "absolute",
  relative: "relative",
  sticky: "sticky"
};
var positionOptions = {
  top: "",
  right: "",
  left: "",
  bottom: ""
};
var zIndex = {
  z0: "0",
  z10: "10",
  z20: "20",
  z30: "30",
  z40: "40",
  z50: "50",
  zAuto: "auto"
};
var maxWidth = {
  "0": "0rem",
  none: "none",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  full: "100%",
  wMin: "min-content",
  wMax: "max-content",
  wFit: "fit-content"
};
var minHeight = {
  "0": "0",
  none: "none",
  full: "100%",
  screen: "100vh",
  hMin: "min-content",
  hMax: "max-content",
  hFit: "fit-content"
};
var opacity = {
  "0": "0",
  "5": "0.05",
  "10": "0.1",
  "20": "0.2",
  "25": "0.25",
  "30": "0.3",
  "40": "0.4",
  "50": "0.5",
  "60": "0.6",
  "70": "0.7",
  "75": "0.75",
  "80": "0.8",
  "90": "0.9",
  "95": "0.95",
  "100": "1"
};
var pointerEvents = {
  auto: "auto",
  none: "none"
};
var overflow = {
  auto: "auto",
  hidden: "hidden",
  clip: "clip",
  visible: "visible",
  scroll: "scroll"
};
var overflowX = overflow;
var overflowY = overflow;
var visibility = {
  visible: "visible",
  invisible: "hidden",
  collapse: "collapse"
};
var gridRow = {
  auto: "auto",
  full: "1 / -1",
  unset: "unset",
  "1": "span 1 / span 1",
  "2": "span 2 / span 2",
  "3": "span 3 / span 3",
  "4": "span 4 / span 4",
  "5": "span 5 / span 5",
  "6": "span 6 / span 6"
};
var gridColumn = {
  ...gridRow,
  "7": "span 7 / span 7",
  "8": "span 8 / span 8",
  "9": "span 9 / span 9",
  "10": "span 10 / span 10",
  "11": "span 11 / span 11",
  "12": "span 12 / span 12"
};
var gridRowEnd = {
  auto: "auto",
  unset: "unset",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7"
};
var gridColumnEnd = {
  ...gridRowEnd,
  "8": "8",
  "9": "9",
  "10": "10",
  "11": "11",
  "12": "12",
  "13": "13"
};
var justifySelf = {
  auto: "auto",
  start: "start",
  end: "end",
  center: "center",
  stretch: "stretch"
};
var alignSelf = {
  auto: "auto",
  start: "flex-start",
  end: "flex-end",
  center: "center",
  stretch: "stretch",
  baseline: "baseline"
};
var grid = {
  gridColumn,
  gridColumnEnd,
  gridColumnStart: gridColumnEnd,
  gridRow,
  gridRowEnd,
  gridRowStart: gridRowEnd,
  justifySelf,
  alignSelf
};
var flexGrow = {
  "0": "0",
  "1": "1"
};
var flex = {
  flexBasis: "",
  flexGrow,
  flexShrink: flexGrow
};
var size = {
  width: "",
  height: "",
  size: "",
  maxHeight: ""
};
var padding = {
  padding: "",
  paddingTop: "",
  paddingRight: "",
  paddingBottom: "",
  paddingLeft: "",
  paddingX: "",
  paddingY: ""
};
var margin = {
  margin: "",
  marginTop: "",
  marginRight: "",
  marginBottom: "",
  marginLeft: "",
  marginX: "",
  marginY: ""
};
var commonStyleProps = {
  display,
  ...grid,
  ...flex,
  ...size,
  maxWidth,
  minHeight,
  position,
  ...positionOptions,
  zIndex,
  ...margin,
  ...padding,
  opacity,
  pointerEvents,
  overflow,
  overflowX,
  overflowY,
  visibility,
  transform: "",
  transition: ""
};

// app/utils/primitives/index.ts
var breakpointKeys = Object.keys(breakpoints);
var remStyleProps = ["margin", "padding", "width", "height", "gap"];
function splitProps(props, stylePropsKeys) {
  const styleProps8 = {};
  const restProps = {};
  Object.entries(props).forEach(([key, value]) => {
    if (stylePropsKeys.includes(key))
      styleProps8[key] = value;
    else
      restProps[key] = value;
  });
  return [styleProps8, restProps];
}
function getMediaStyles(stylesWithBreakpointsProps, stylesWithBreakpoints, styleAliases7) {
  function getValue({
    styleValue,
    index,
    mediaKey,
    defaultValue
  }) {
    let value = defaultValue;
    if (Array.isArray(styleValue)) {
      value = styleValue[index];
    } else if (typeof styleValue === "object") {
      value = styleValue[mediaKey];
    }
    return value;
  }
  function formatStyles({ styleKey, styleValue, acc, ...options }) {
    const value = getValue({ styleValue, ...options });
    const key = styleAliases7 ? styleAliases7[styleKey] || styleKey : styleKey;
    if (value != null) {
      const styleProp = stylesWithBreakpoints && stylesWithBreakpoints[styleKey];
      const stylePropsValue = styleProp && typeof styleProp === "object" ? styleProp[value] : value;
      const formatToRem = remStyleProps.some((remStyleProp) => styleKey.includes(remStyleProp));
      const formattedValue = typeof stylePropsValue === "number" && formatToRem ? toRem(stylePropsValue) : stylePropsValue;
      acc[key] = formattedValue;
    }
  }
  return breakpointKeys.reduce((acc, mediaKey, index) => {
    if (index === 0) {
      Object.entries(stylesWithBreakpointsProps).forEach(([styleKey, styleValue]) => {
        formatStyles({
          styleKey,
          styleValue,
          index,
          mediaKey,
          defaultValue: styleValue,
          acc
        });
      });
    } else {
      const accMedia = `@${mediaKey}`;
      acc[accMedia] = Object.entries(stylesWithBreakpointsProps).reduce(
        (styleAcc, [styleKey, styleValue]) => {
          formatStyles({
            styleKey,
            styleValue,
            index,
            mediaKey,
            acc: styleAcc
          });
          return styleAcc;
        },
        {}
      );
    }
    return acc;
  }, {});
}
function getformattedProps({ props, styleProps: styleProps8, styleAliases: styleAliases7 }) {
  const stylePropsKeys = [
    ...styleProps8 ? Object.keys(styleProps8) : [],
    ...Object.keys(commonStyleProps)
  ];
  const [componentStyleProps, restProps] = splitProps(props, stylePropsKeys);
  const mediaStyles = getMediaStyles(
    componentStyleProps,
    { ...styleProps8, ...commonStyleProps },
    styleAliases7
  );
  return { mediaStyles, restProps };
}

// app/ui/primitives/dataDisplay/List/styles.tsx
var StyledList = styled("ul", {});
var StyledListItem = styled("li", {
  listStyle: "none"
});

// app/ui/primitives/dataDisplay/List/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var List = ({ children, css, ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({ props });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledList, {
    css: { ...mediaStyles, ...css },
    ...restProps,
    children
  }, void 0, false, {
    fileName: "app/ui/primitives/dataDisplay/List/index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
};
var ListItem = ({ children, css, ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({ props });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledListItem, {
    css: { ...mediaStyles, ...css },
    ...restProps,
    children
  }, void 0, false, {
    fileName: "app/ui/primitives/dataDisplay/List/index.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};

// app/ui/primitives/form/Button/index.tsx
var import_react = __toESM(require_react());

// app/ui/primitives/form/Button/styles.tsx
var StyledButton = styled("button", {
  fontSize: "$sm",
  cursor: "pointer",
  transition: "0.15s all ease-in-out"
});

// app/ui/primitives/form/Button/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Button = import_react.default.forwardRef(
  ({ children, css, ...props }, forwardedRef) => {
    const { mediaStyles, restProps } = getformattedProps({ props });
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledButton, {
      type: "button",
      css: { ...mediaStyles, ...css },
      ref: forwardedRef,
      ...restProps,
      children
    }, void 0, false, {
      fileName: "app/ui/primitives/form/Button/index.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this);
  }
);
Button.displayName = "Button";

// app/ui/primitives/layout/Box/styles.tsx
var styleAliases = {
  bgColor: "backgroundColor",
  bgImage: "backgroundImage",
  bgSize: "backgroundSize",
  bgPosition: "backgroundPosition",
  bgRepeat: "backgroundRepeat"
};
var bgSize = {
  auto: "auto",
  cover: "cover",
  contain: "contain"
};
var bgPosition = {
  bottom: "bottom",
  center: "center",
  left: "left",
  leftBottom: "left bottom",
  leftTop: "left top",
  right: "right",
  rightBottom: "right bottom",
  rightTop: "right top",
  top: "top"
};
var bgRepeat = {
  repeat: "repeat",
  noRepeat: "no-repeat",
  repeatX: "repeat-x",
  repeatY: "repeat-y",
  repeatRound: "round",
  repeatSpace: "space"
};
var customStyleProps = {
  background: "",
  bgImage: "",
  borderRadius: ""
};
var styleProps = {
  bgSize,
  bgPosition,
  bgRepeat,
  bgColor,
  ...customStyleProps
};
var border = "1px solid $white";
var variants = {
  border: {
    full: {
      border
    },
    bottom: {
      borderBottom: border
    },
    x: {
      borderX: border
    },
    y: {
      borderY: border
    }
  }
};
var StyledDiv = styled("div", {
  variants
});

// app/ui/primitives/layout/Box/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Box = ({ children, border: border2, css, ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({ props, styleProps, styleAliases });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledDiv, {
    border: border2,
    css: { ...mediaStyles, ...css },
    ...restProps,
    children
  }, void 0, false, {
    fileName: "app/ui/primitives/layout/Box/index.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
};

// app/ui/primitives/layout/Container/styles.tsx
var styleAliases2 = {
  bgColor: "backgroundColor"
};
var styleProps2 = {
  bgColor,
  background: ""
};
var variants2 = {
  variant: {
    "center-self": {
      margin: "0 auto"
    },
    "center-content": {
      display: "flex",
      alignItems: "center"
    },
    wrap: {
      width: "100%",
      marginX: "auto",
      paddingX: toRem(12),
      "@md": {
        paddingX: "0",
        maxWidth: toRem(744)
      },
      "@lg": {
        maxWidth: toRem(980)
      },
      "@xl": {
        maxWidth: toRem(1200)
      },
      "@2xl": {
        maxWidth: toRem(1280)
      }
    }
  }
};
var StyledDiv2 = styled("div", {
  variants: variants2
});

// app/ui/primitives/layout/Center/styles.tsx
var styleAliases3 = styleAliases;
var styleProps3 = styleProps;
var variants3 = {
  ...variants,
  ...variants2
};
var StyledDiv3 = styled("div", {
  variants: variants3
});

// app/ui/primitives/layout/Center/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Center = ({ children, css, border: border2, variant = "center-content", ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({
    props,
    styleProps: styleProps3,
    styleAliases: styleAliases3
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledDiv3, {
    border: border2,
    variant,
    css: { ...mediaStyles, ...css },
    ...restProps,
    children
  }, void 0, false, {
    fileName: "app/ui/primitives/layout/Center/index.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
};

// app/ui/primitives/layout/Container/index.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Container = import_react2.default.forwardRef(
  ({ as = "div", variant, css, children, ...props }, forwardedRef) => {
    const { mediaStyles, restProps } = getformattedProps({ props, styleProps: styleProps2, styleAliases: styleAliases2 });
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledDiv2, {
      as,
      variant,
      css: { ...mediaStyles, ...css },
      ...restProps,
      ref: forwardedRef,
      children
    }, void 0, false, {
      fileName: "app/ui/primitives/layout/Container/index.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this);
  }
);
Container.displayName = "Container";

// app/ui/primitives/layout/Grid/styles.tsx
var styleAliases4 = {
  align: "alignItems",
  autoColumns: "gridAutoColumns",
  autoFlow: "gridAutoFlow",
  autoRows: "gridAutoRows",
  templateColumns: "gridTemplateColumns",
  templateRows: "gridTemplateRows"
};
var align = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  baseline: "baseline",
  stretch: "stretch"
};
var autoColumns = {
  auto: "auto",
  min: "min-content",
  max: "max-content",
  fr: "minmax(0, 1fr)"
};
var autoFlow = {
  row: "row",
  col: "column",
  dense: "dense",
  rowDense: "row dense",
  colDense: "col dense"
};
var autoRows = autoColumns;
var templateRows = {
  "1": "repeat(1, minmax(0, 1fr))",
  "2": "repeat(2, minmax(0, 1fr))",
  "3": "repeat(3, minmax(0, 1fr))",
  "4": "repeat(4, minmax(0, 1fr))",
  "5": "repeat(5, minmax(0, 1fr))",
  "6": "repeat(6, minmax(0, 1fr))",
  none: "none"
};
var templateColumns = {
  ...templateRows,
  "7": "repeat(7, minmax(0, 1fr))",
  "8": "repeat(8, minmax(0, 1fr))",
  "9": "repeat(9, minmax(0, 1fr))",
  "10": "repeat(10, minmax(0, 1fr))",
  "11": "repeat(11, minmax(0, 1fr))",
  "12": "repeat(12, minmax(0, 1fr))"
};
var customStyleProps2 = {
  gap: ""
};
var styleProps4 = {
  align,
  autoColumns,
  autoFlow,
  autoRows,
  templateColumns,
  templateRows,
  ...customStyleProps2
};
var StyledDiv4 = styled("div", {
  display: "grid"
});

// app/ui/primitives/layout/Grid/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Grid = ({ children, css, ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({ props, styleProps: styleProps4, styleAliases: styleAliases4 });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledDiv4, {
    css: { ...mediaStyles, ...css },
    ...restProps,
    children
  }, void 0, false, {
    fileName: "app/ui/primitives/layout/Grid/index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
};

// app/ui/primitives/layout/Flex/styles.tsx
var styleAliases5 = {
  direction: "flexDirection",
  justify: "justifyContent",
  align: "alignItems",
  wrap: "flexWrap"
};
var direction = {
  row: "row",
  rowReverse: "row-reverse",
  col: "column",
  colReverse: "column-reverse"
};
var justify = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly"
};
var align2 = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  baseline: "baseline",
  stretch: "stretch"
};
var wrap = {
  wrap: "wrap",
  reverse: "wrap-reverse",
  noWrap: "nowrap"
};
var customStyleProps3 = {
  gap: ""
};
var styleProps5 = {
  direction,
  justify,
  align: align2,
  wrap,
  ...customStyleProps3
};
var variants4 = {
  variant: {
    list: {
      display: "block",
      "@xl": {
        display: "flex"
      }
    }
  }
};
var StyledDiv5 = styled("div", {
  display: "flex",
  variants: variants4
});

// app/ui/primitives/layout/Flex/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Flex = ({ children, variant, css, ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({
    props,
    styleProps: styleProps5,
    styleAliases: styleAliases5
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledDiv5, {
    variant,
    css: { ...mediaStyles, ...css },
    ...restProps,
    children
  }, void 0, false, {
    fileName: "app/ui/primitives/layout/Flex/index.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
};

// app/utils/hooks/useProgressiveImage.ts
var import_react3 = __toESM(require_react());
function useProgressiveImage(lowQualitySrc, highQualitySrc) {
  const [src, setSrc] = (0, import_react3.useState)(lowQualitySrc || highQualitySrc);
  (0, import_react3.useEffect)(() => {
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setSrc(highQualitySrc);
    };
  }, [lowQualitySrc, highQualitySrc]);
  return { src, blur: src === lowQualitySrc };
}

// app/ui/primitives/media/Img/styles.tsx
var styleAliases6 = {
  align: "objectPosition",
  fit: "objectFit"
};
var fit = {
  contain: "contain",
  cover: "cover",
  fill: "fill",
  none: "none",
  scaleSown: "scale-down"
};
var align3 = {
  bottom: "bottom",
  center: "center",
  left: "left",
  leftBottom: "left bottom",
  leftTop: "left top",
  right: "right",
  rightBottom: "right bottom",
  rightTop: "right top",
  top: "top"
};
var customStyleProps4 = {
  maxWidth: "",
  borderRadius: ""
};
var styleProps6 = {
  align: align3,
  fit,
  ...customStyleProps4
};
var StyledImg = styled("img");

// app/ui/primitives/media/Img/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Img = ({
  src: fullSrc,
  thumbSrc,
  alt,
  loading = "lazy",
  width,
  height,
  css,
  ...props
}) => {
  const { mediaStyles, restProps } = getformattedProps({
    props: { ...props, width, height },
    styleProps: styleProps6,
    styleAliases: styleAliases6
  });
  const { src, blur } = useProgressiveImage(thumbSrc, fullSrc);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledImg, {
    css: {
      ...mediaStyles,
      filter: blur ? "blur(8px)" : "none",
      transition: blur ? "none" : "filter 500ms ease-in 0ms",
      ...css
    },
    src,
    alt,
    loading,
    ...restProps
  }, void 0, false, {
    fileName: "app/ui/primitives/media/Img/index.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
};

// app/ui/primitives/navigation/Link/styles.tsx
var moveUpDown = keyframes({
  "0%, to": { transform: "translateY(-15%)" },
  "50%": { transform: "translateY(15%)" }
});
var variants5 = {
  variant: {
    line: {
      position: "relative",
      "&::before": {
        width: "0",
        height: ".12rem",
        position: "absolute",
        bottom: "45%",
        content: "",
        left: "-9%",
        backgroundColor: "white",
        visibility: "hidden",
        transition: "all .25s ease-in-out"
      },
      "&:hover": {
        "&::before": {
          width: "115%",
          visibility: "visible"
        }
      }
    },
    scrollDown: {
      animation: `${moveUpDown} 1.1s linear infinite`
    }
  }
};
var StyledLink = styled("a", {
  color: "$white",
  textDecoration: "none",
  transition: "0.15s color ease-in-out",
  cursor: "pointer",
  outline: "1px solid transparent",
  variants: variants5
});

// app/ui/primitives/navigation/Link/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var externalLinkProps = {
  rel: "noopener noreferrer nofollow",
  target: "_blank"
};
var Link = ({ children, css, isExternal = true, variant, ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({ props });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledLink, {
    css: { ...mediaStyles, ...css },
    variant,
    ...isExternal && externalLinkProps,
    ...restProps,
    children
  }, void 0, false, {
    fileName: "app/ui/primitives/navigation/Link/index.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
};

// app/ui/primitives/typography/Text/styles.tsx
var {
  theme: { colors: colors2, fontSizes, fonts }
} = config;
var fontColor = getStylePropsFromToken(colors2);
var fontFamily = getStylePropsFromToken(fonts);
var fontSize = getStylePropsFromToken(fontSizes);
var fontWeight = {
  normal: "400",
  bold: "700"
};
var align4 = {
  left: "left",
  center: "center",
  right: "right",
  justify: "justify",
  start: "start",
  end: "end"
};
var textTransform = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
  normalCase: "none"
};
var lineHeight = {
  "3": ".75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "7": "1.75rem",
  "8": "2rem",
  "9": "2.25rem",
  "10": "2.5rem",
  none: "1",
  tight: "1.25",
  snug: "1.375",
  normal: "1.5",
  relaxed: "1.625",
  loose: "2"
};
var styleProps7 = {
  fontColor,
  fontFamily,
  fontSize,
  fontWeight,
  align: align4,
  textTransform,
  lineHeight
};
var variants6 = {
  variant: {
    withSeparator: {
      "&::after": {
        content: "|",
        display: "none",
        padding: `0 ${toRem(4)}`,
        "@sm": {
          display: "inline-flex"
        }
      }
    }
  }
};
var StyledSpan = styled("span", {
  variants: variants6
});

// app/ui/primitives/typography/Text/index.tsx
var import_react4 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Text = import_react4.default.forwardRef(({ as = "span", css, variant, children, ...props }, forwardedRef) => {
  const { mediaStyles, restProps } = getformattedProps({ props, styleProps: styleProps7 });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSpan, {
    as,
    variant,
    css: { ...mediaStyles, ...css },
    ref: forwardedRef,
    ...restProps,
    children
  }, void 0, false, {
    fileName: "app/ui/primitives/typography/Text/index.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
});
Text.displayName = "Text";

// app/assets/img/about-heading.svg
var about_heading_default = "/build/_assets/about-heading-CI2LQBHM.svg";

// app/assets/img/profile-bw.jpg
var profile_bw_default = "/build/_assets/profile-bw-IXR6EU56.jpg";

// app/assets/img/bolt.svg
var bolt_default = "/build/_assets/bolt-22GJDHJR.svg";

// app/assets/img/skull.svg
var skull_default = "/build/_assets/skull-N67EAKSS.svg";

// app/ui/components/About/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function About() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    as: "section",
    id: "about",
    paddingTop: { xs: 46, lg: 86 },
    paddingBottom: 86,
    minHeight: "screen",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
      variant: "wrap",
      height: "100%",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
          templateColumns: "12",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
              src: about_heading_default,
              alt: "about",
              display: "flex",
              gridColumn: { xs: "12", lg: "2" },
              gridColumnStart: { lg: "3" },
              maxHeight: 60,
              marginTop: { lg: 12 },
              css: { maxWidth: `${toRem(60)}` }
            }, void 0, false, {
              fileName: "app/ui/components/About/index.tsx",
              lineNumber: 19,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
              as: "p",
              gridColumn: { xs: "12", lg: "3" },
              fontSize: "lg",
              "padding-bottom": { xs: 80, lg: 20, xl: "0" },
              children: "Hi, I'm Elena Bravo, a multidisciplinary front-end developer and digital designer based in Madrid, Spain. With over 7 years of experience working with all types of clients and projects, I thrive on bringing both the technical and visual aspects of digital products to life."
            }, void 0, false, {
              fileName: "app/ui/components/About/index.tsx",
              lineNumber: 29,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
              align: "center",
              justify: "center",
              wrap: "wrap",
              gridColumn: { xs: "12", lg: "3" },
              gridColumnStart: { lg: "9" },
              position: "relative",
              width: "100%",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
                  display: { xs: "hidden", xl: "block" },
                  position: "relative",
                  width: 280,
                  height: 420,
                  zIndex: "z20",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
                    className: "cardImage",
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
                      className: "cardImageInner",
                      width: "100%",
                      height: "100%",
                      overflow: "hidden"
                    }, void 0, false, {
                      fileName: "app/ui/components/About/index.tsx",
                      lineNumber: 63,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/ui/components/About/index.tsx",
                    lineNumber: 56,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: "app/ui/components/About/index.tsx",
                  lineNumber: 49,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
                  className: "profileLoading",
                  position: { lg: "absolute" },
                  top: "0",
                  left: { lg: "-28%", xl: "0", "2xl": 20 },
                  width: 280,
                  height: 420,
                  zIndex: "z10",
                  css: { "&.hide .profileLoadingImg": { opacity: 0, visibility: "hidden" } },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
                    className: "profileLoadingImg",
                    src: profile_bw_default,
                    alt: "Elena Bravo profile photo in black and white",
                    opacity: "100",
                    visibility: "visible",
                    pointerEvents: "none",
                    css: { userSelect: "none" }
                  }, void 0, false, {
                    fileName: "app/ui/components/About/index.tsx",
                    lineNumber: 76,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: "app/ui/components/About/index.tsx",
                  lineNumber: 66,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
                  src: bolt_default,
                  alt: "bolt",
                  position: "absolute",
                  top: { xs: "50%", lg: "0" },
                  left: { xs: "50%", lg: "0" },
                  width: 150,
                  zIndex: "z30",
                  transform: {
                    xs: "translate(-120%, -100%)",
                    sm: "translate(-140%, -70%)",
                    lg: `translateY(-${toRem(160)}) translateX(-${toRem(100)})`,
                    xl: `translateY(-${toRem(160)}) translateX(-${toRem(50)})`
                  },
                  pointerEvents: "none"
                }, void 0, false, {
                  fileName: "app/ui/components/About/index.tsx",
                  lineNumber: 86,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/ui/components/About/index.tsx",
              lineNumber: 40,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/ui/components/About/index.tsx",
          lineNumber: 18,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
          templateColumns: "12",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
            gridColumn: { xs: "12", lg: "4" },
            gridColumnStart: { lg: "3" },
            paddingTop: { xs: 60, lg: 0 },
            transform: { lg: `translateY(-${toRem(110)})` },
            position: "relative",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
                src: skull_default,
                alt: "skull logo",
                display: { xs: "hidden", lg: "flex" },
                position: "absolute",
                left: "0",
                top: 300,
                width: 120,
                transform: { lg: `translateY(-${toRem(50)})` },
                pointerEvents: "none"
              }, void 0, false, {
                fileName: "app/ui/components/About/index.tsx",
                lineNumber: 112,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
                as: "p",
                fontSize: "lg",
                children: "My main focus as a developer is building accessible, high performance and inclusive digital experiences without sacrificing creativity. Basically, I like creating cool sh*t."
              }, void 0, false, {
                fileName: "app/ui/components/About/index.tsx",
                lineNumber: 123,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/ui/components/About/index.tsx",
            lineNumber: 105,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/About/index.tsx",
          lineNumber: 104,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
          templateColumns: "12",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
            as: "p",
            gridColumn: { xs: "12", lg: "6" },
            gridColumnStart: { lg: "5" },
            children: [
              "I'm currently working as a lead senior front-end developer at",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                href: "https://samy.com/",
                variant: "line",
                display: "inline-flex",
                position: "relative",
                marginX: 6,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
                  children: "Samy"
                }, void 0, false, {
                  fileName: "app/ui/components/About/index.tsx",
                  lineNumber: 140,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/ui/components/About/index.tsx",
                lineNumber: 133,
                columnNumber: 13
              }, this),
              "and developing smaller projects for friends from time to time. I'm always available for fun and interesting side projects, so feel free to get in touch if you'd like to work together."
            ]
          }, void 0, true, {
            fileName: "app/ui/components/About/index.tsx",
            lineNumber: 131,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/About/index.tsx",
          lineNumber: 130,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/ui/components/About/index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/About/index.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/assets/img/contact-heading.svg
var contact_heading_default = "/build/_assets/contact-heading-FMZV5LKH.svg";

// app/assets/img/hover-line-sm.svg
var hover_line_sm_default = "/build/_assets/hover-line-sm-5L3WNE4F.svg";

// app/assets/img/hover-line-xl.svg
var hover_line_xl_default = "/build/_assets/hover-line-xl-6UCRQDWE.svg";

// app/assets/img/ghost.svg
var ghost_default = "/build/_assets/ghost-4TL2I7QX.svg";

// app/ui/components/Contact/Email.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ContactEmail() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
        templateColumns: "12",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
          src: contact_heading_default,
          alt: "Get in touch",
          gridColumn: "2",
          gridColumnStart: { lg: "3" },
          width: "8rem"
        }, void 0, false, {
          fileName: "app/ui/components/Contact/Email.tsx",
          lineNumber: 12,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/ui/components/Contact/Email.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
        templateColumns: "12",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
            position: "relative",
            gridColumn: { xs: "12", lg: "7" },
            gridColumnStart: { lg: "3" },
            marginTop: 20,
            marginBottom: { xs: 40, lg: 60 },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
              href: "mailto:mailto:hey@elenabravo.com",
              position: "relative",
              css: { "&:hover .linkLine": { width: "100%" } },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
                      display: { xs: "hidden", lg: "flex" },
                      position: "absolute",
                      top: -5,
                      left: "0",
                      height: 108,
                      width: 244,
                      transform: "translateX(-6%)",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
                        className: "linkLine",
                        display: "flex",
                        width: "0",
                        transition: "width .5s cubic-bezier(.16,1,.3,1)",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
                          src: hover_line_sm_default,
                          alt: "link underline",
                          pointerEvents: "none"
                        }, void 0, false, {
                          fileName: "app/ui/components/Contact/Email.tsx",
                          lineNumber: 49,
                          columnNumber: 19
                        }, this)
                      }, void 0, false, {
                        fileName: "app/ui/components/Contact/Email.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/ui/components/Contact/Email.tsx",
                      lineNumber: 34,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
                      fontSize: { xs: "3xl", sm: "5xl" },
                      lineHeight: "none",
                      children: "hey@"
                    }, void 0, false, {
                      fileName: "app/ui/components/Contact/Email.tsx",
                      lineNumber: 52,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/ui/components/Contact/Email.tsx",
                  lineNumber: 33,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
                      display: { xs: "hidden", lg: "flex" },
                      position: "absolute",
                      top: 76,
                      left: "0",
                      height: 106,
                      width: 628,
                      transform: "translateX(-2.5%)",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
                        className: "linkLine",
                        display: "flex",
                        width: "0",
                        transition: "width .5s cubic-bezier(.16,1,.3,1)",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
                          src: hover_line_xl_default,
                          alt: "link underline",
                          pointerEvents: "none"
                        }, void 0, false, {
                          fileName: "app/ui/components/Contact/Email.tsx",
                          lineNumber: 72,
                          columnNumber: 19
                        }, this)
                      }, void 0, false, {
                        fileName: "app/ui/components/Contact/Email.tsx",
                        lineNumber: 66,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/ui/components/Contact/Email.tsx",
                      lineNumber: 57,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
                      fontSize: { xs: "3xl", sm: "5xl" },
                      lineHeight: "none",
                      children: "elenabravo.com"
                    }, void 0, false, {
                      fileName: "app/ui/components/Contact/Email.tsx",
                      lineNumber: 75,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/ui/components/Contact/Email.tsx",
                  lineNumber: 56,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/ui/components/Contact/Email.tsx",
              lineNumber: 28,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/Contact/Email.tsx",
            lineNumber: 21,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
            src: ghost_default,
            alt: "ghost",
            display: { xs: "hidden", lg: "flex" },
            width: 120,
            transform: `translateY(-${toRem(80)})`,
            pointerEvents: "none"
          }, void 0, false, {
            fileName: "app/ui/components/Contact/Email.tsx",
            lineNumber: 81,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/ui/components/Contact/Email.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/components/Contact/Email.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/assets/img/follow-heading.svg
var follow_heading_default = "/build/_assets/follow-heading-WPI55DF7.svg";

// app/ui/components/Contact/Social/networks.ts
var networks_default = [
  {
    name: "Github",
    href: "https://github.com/elenabravo"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/elena-bravo/"
  },
  {
    name: "Spotify",
    href: "https://spoti.fi/34t4OZJ"
  }
];

// app/ui/components/Contact/Social/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ContactSocial() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
    templateColumns: "12",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
        src: follow_heading_default,
        alt: "Follow",
        gridColumn: { xs: "3", lg: "2" },
        gridColumnStart: { lg: "3" },
        width: 85,
        height: 30
      }, void 0, false, {
        fileName: "app/ui/components/Contact/Social/index.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
        direction: "col",
        gridColumnStart: { xs: "9", sm: "unset" },
        children: networks_default.map(({ name, href }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            variant: "line",
            href,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
              textTransform: "uppercase",
              css: { fontSize: toRem(20) },
              children: name
            }, void 0, false, {
              fileName: "app/ui/components/Contact/Social/index.tsx",
              lineNumber: 21,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/Contact/Social/index.tsx",
            lineNumber: 20,
            columnNumber: 13
          }, this)
        }, name, false, {
          fileName: "app/ui/components/Contact/Social/index.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this))
      }, void 0, false, {
        fileName: "app/ui/components/Contact/Social/index.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/components/Contact/Social/index.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/ui/components/Contact/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Contact() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    as: "section",
    paddingTop: { xs: 26, lg: 0 },
    paddingBottom: { xs: 40, lg: 100 },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
      variant: "wrap",
      maxHeight: 708,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactEmail, {}, void 0, false, {
          fileName: "app/ui/components/Contact/index.tsx",
          lineNumber: 9,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactSocial, {}, void 0, false, {
          fileName: "app/ui/components/Contact/index.tsx",
          lineNumber: 10,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/ui/components/Contact/index.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Contact/index.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/ui/components/Inspiration/album.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Album({ album, artist }) {
  const { name: albumName, image: cover } = album;
  const { name: artistName, image: artistImage } = artist;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
    position: "absolute",
    size: { xs: 150, sm: 200, lg: 250 },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
        src: cover,
        alt: albumName
      }, void 0, false, {
        fileName: "app/ui/components/Inspiration/album.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "100%",
        height: "33%",
        background: "linear-gradient(180deg,transparent,rgba(0,0,0,.895))"
      }, void 0, false, {
        fileName: "app/ui/components/Inspiration/album.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
        align: "center",
        position: "absolute",
        bottom: "0",
        left: "0",
        paddingX: 16,
        paddingBottom: 16,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
            src: artistImage,
            alt: artistName,
            size: 30,
            marginRight: 4,
            borderRadius: "50%"
          }, void 0, false, {
            fileName: "app/ui/components/Inspiration/album.tsx",
            lineNumber: 20,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
            fontSize: "sm",
            children: artistName
          }, void 0, false, {
            fileName: "app/ui/components/Inspiration/album.tsx",
            lineNumber: 21,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/ui/components/Inspiration/album.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/components/Inspiration/album.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/ui/components/Inspiration/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Inspiration({ albums }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    as: "section",
    id: "inspiration",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
      position: "relative",
      children: albums.map((data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Album, {
        ...data
      }, data.id, false, {
        fileName: "app/ui/components/Inspiration/index.tsx",
        lineNumber: 10,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: "app/ui/components/Inspiration/index.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Inspiration/index.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/assets/img/intro-cta.svg
var intro_cta_default = "/build/_assets/intro-cta-4YG5YVOH.svg";

// app/ui/components/Intro/CTA.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CTA() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
    href: "mailto:hey@elenabravo.com",
    position: { xs: "fixed", lg: "relative" },
    gridColumnStart: { lg: "11" },
    alignSelf: { lg: "start" },
    width: { xs: 100, lg: 120 },
    height: { xs: 100, lg: 120 },
    bottom: { xs: 32, sm: 40 },
    right: 20,
    transform: { xl: `translateY(-${toRem(20)})` },
    css: { "&:hover .ctaInner": { transform: "scale(1.2)" } },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
      position: "relative",
      justify: "center",
      align: "center",
      width: "100%",
      height: "100%",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
          className: "ctaInner",
          position: "absolute",
          width: "100%",
          height: "100%",
          bgColor: "white",
          borderRadius: "50%",
          transform: "scale(1)",
          transition: "transform 1.2s cubic-bezier(.16,1,.3,1)"
        }, void 0, false, {
          fileName: "app/ui/components/Intro/CTA.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
          src: intro_cta_default,
          alt: "Get in touch",
          position: "absolute",
          top: "50%",
          size: "50%",
          transform: "translateY(-50%) rotate(10deg)"
        }, void 0, false, {
          fileName: "app/ui/components/Intro/CTA.tsx",
          lineNumber: 30,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/ui/components/Intro/CTA.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Intro/CTA.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/assets/img/heading.svg
var heading_default = "/build/_assets/heading-EOWW6AIC.svg";

// app/ui/components/Intro/Heading.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Heading() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
    src: heading_default,
    alt: "Front-end JAMstack Developer",
    gridColumn: { xs: "10", lg: "6" },
    gridColumnStart: { xs: "2", sm: "3", lg: "3" },
    height: 425,
    maxWidth: "md",
    paddingY: { xs: 50, sm: 0 },
    pointerEvents: "none"
  }, void 0, false, {
    fileName: "app/ui/components/Intro/Heading.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/assets/img/arrow.svg
var arrow_default = "/build/_assets/arrow-6HCQ7SNL.svg";

// app/ui/components/Intro/ScrollDown.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ScrollDown() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    position: "absolute",
    bottom: 50,
    width: "100%",
    paddingBottom: 86,
    zIndex: "z50",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
      height: 1,
      variant: "wrap",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
        href: "#about",
        variant: "scrollDown",
        display: "flex",
        width: 40,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
          src: arrow_default,
          alt: "down arrow",
          position: "relative",
          width: "100%"
        }, void 0, false, {
          fileName: "app/ui/components/Intro/ScrollDown.tsx",
          lineNumber: 9,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/ui/components/Intro/ScrollDown.tsx",
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/ui/components/Intro/ScrollDown.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Intro/ScrollDown.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/ui/components/Intro/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Intro() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    width: "100%",
    height: "100vh",
    as: "section",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
      height: "100%",
      variant: "wrap",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
        height: "100%",
        direction: "col",
        justify: "center",
        position: "relative",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
            align: "center",
            templateColumns: "12",
            height: "100%",
            paddingTop: 20,
            maxHeight: 500,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {}, void 0, false, {
                fileName: "app/ui/components/Intro/index.tsx",
                lineNumber: 12,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CTA, {}, void 0, false, {
                fileName: "app/ui/components/Intro/index.tsx",
                lineNumber: 13,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/ui/components/Intro/index.tsx",
            lineNumber: 11,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollDown, {}, void 0, false, {
            fileName: "app/ui/components/Intro/index.tsx",
            lineNumber: 15,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/ui/components/Intro/index.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/ui/components/Intro/index.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Intro/index.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/assets/img/logo.svg
var logo_default = "/build/_assets/logo-LEM2OEFN.svg";

// app/ui/components/Layout/Header.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    as: "header",
    position: { xs: "absolute", lg: "fixed" },
    top: 30,
    left: { xs: 20, lg: 40, "2xl": "calc(((100vw - 1280px)/2) - 28px)" },
    zIndex: "z40",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
      src: logo_default,
      alt: "Elena Bravo logo",
      size: { xs: 120, sm: 150 },
      pointerEvents: "none"
    }, void 0, false, {
      fileName: "app/ui/components/Layout/Header.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Layout/Header.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/ui/components/Layout/Menu/Mobile.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function MobileMenu({ menuItems: menuItems2 }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    position: "fixed",
    display: { xs: "flex", lg: "hidden" },
    width: "100vw",
    height: "100vh",
    top: "0",
    left: "0",
    zIndex: "z50",
    pointerEvents: "none",
    overflow: "hidden",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
        direction: "col",
        justify: "center",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        paddingY: 32,
        opacity: "0",
        pointerEvents: "none",
        transform: "translateX(100%)",
        visibility: "invisible",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
            variant: "wrap",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
              src: logo_default,
              alt: "Elena Bravo logo",
              size: { xs: 120, sm: 150 },
              pointerEvents: "none"
            }, void 0, false, {
              fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
              lineNumber: 33,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
            as: "nav",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, {
              children: menuItems2.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListItem, {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                  href: `#${item}`,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
                    children: item
                  }, void 0, false, {
                    fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
                    lineNumber: 40,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
                  lineNumber: 39,
                  columnNumber: 17
                }, this)
              }, item, false, {
                fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
                lineNumber: 38,
                columnNumber: 15
              }, this))
            }, void 0, false, {
              fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
              lineNumber: 36,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
        variant: "wrap",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
          position: "absolute",
          width: "100%",
          bottom: 40,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Center, {
              variant: "center-self",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                href: "https://github.com/elenabravo",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
                  children: "Github"
                }, void 0, false, {
                  fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
                  lineNumber: 52,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
                lineNumber: 51,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
              lineNumber: 50,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
            lineNumber: 49,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
          lineNumber: 48,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
        lineNumber: 47,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
          children: "Menu"
        }, void 0, false, {
          fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
          lineNumber: 59,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
        lineNumber: 58,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
          children: "Close"
        }, void 0, false, {
          fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
          lineNumber: 62,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
        lineNumber: 61,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/ui/components/Layout/Menu/Desktop.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function DesktopMenu({ menuItems: menuItems2 }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    as: "nav",
    display: { xs: "hidden", lg: "flex" },
    position: "fixed",
    bottom: 86,
    right: { xs: "0", lg: 40, xl: `calc(((100vw - ${toRem(1280)})/2) - ${toRem(28)})` },
    paddingTop: { lg: 86 },
    zIndex: "z50",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
      direction: "col",
      align: "end",
      children: menuItems2.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
        href: `#${item}`,
        variant: "line",
        position: "relative",
        paddingY: 5,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
          fontSize: "lg",
          textTransform: "uppercase",
          children: item
        }, void 0, false, {
          fileName: "app/ui/components/Layout/Menu/Desktop.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this)
      }, item, false, {
        fileName: "app/ui/components/Layout/Menu/Desktop.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: "app/ui/components/Layout/Menu/Desktop.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Layout/Menu/Desktop.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/ui/components/Layout/Menu/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var menuItems = ["about", "stack", "inspiration", "contact"];
function Menu() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MobileMenu, {
        menuItems
      }, void 0, false, {
        fileName: "app/ui/components/Layout/Menu/index.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DesktopMenu, {
        menuItems
      }, void 0, false, {
        fileName: "app/ui/components/Layout/Menu/index.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/components/Layout/Menu/index.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/assets/img/spotify.svg
var spotify_default = "/build/_assets/spotify-FXIG6M67.svg";

// app/ui/components/Layout/Footer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var year = new Date().getFullYear();
function footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    as: "footer",
    paddingY: 28,
    paddingBottom: { sm: 20 },
    paddingX: { xs: 0, sm: 20 },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
      variant: "wrap",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
        direction: { xs: "col", sm: "row" },
        align: { xs: "start", sm: "center" },
        justify: { sm: "center" },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
              variant: "withSeparator",
              children: [
                "\xA9 ",
                year
              ]
            }, void 0, true, {
              fileName: "app/ui/components/Layout/Footer.tsx",
              lineNumber: 17,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
              children: "Designed & coded with \u{1F525} by Elena Bravo while listening to"
            }, void 0, false, {
              fileName: "app/ui/components/Layout/Footer.tsx",
              lineNumber: 18,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
              href: "https://spoti.fi/3JVSAsH",
              display: "inline-flex",
              marginLeft: 6,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
                src: spotify_default,
                alt: "Spotify's logo",
                size: 16,
                transform: `translateY(${toRem(2)}) scale(1)`,
                transition: "transform 0.2s ease-in",
                css: {
                  "&:hover": {
                    transform: `translateY(${toRem(2)}) scale(1.15)`,
                    transition: "transform 0.2s ease-in-out"
                  }
                }
              }, void 0, false, {
                fileName: "app/ui/components/Layout/Footer.tsx",
                lineNumber: 20,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/ui/components/Layout/Footer.tsx",
              lineNumber: 19,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/ui/components/Layout/Footer.tsx",
          lineNumber: 16,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/ui/components/Layout/Footer.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/ui/components/Layout/Footer.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Layout/Footer.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/ui/components/Layout/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Layout = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, false, {
        fileName: "app/ui/components/Layout/index.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, {}, void 0, false, {
        fileName: "app/ui/components/Layout/index.tsx",
        lineNumber: 15,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
        as: "main",
        children
      }, void 0, false, {
        fileName: "app/ui/components/Layout/index.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(footer, {}, void 0, false, {
        fileName: "app/ui/components/Layout/index.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/components/Layout/index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
};

// app/assets/img/stack-heading.svg
var stack_heading_default = "/build/_assets/stack-heading-ZOPFLVVX.svg";

// app/assets/img/skelly.svg
var skelly_default = "/build/_assets/skelly-RE5E4ZTX.svg";

// app/ui/components/Stack/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Stack() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    as: "section",
    id: "stack",
    minHeight: "screen",
    paddingY: { xs: 0, lg: 86 },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
      variant: "wrap",
      maxHeight: { xl: 708 },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
          templateColumns: "12",
          marginBottom: 18,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
            src: stack_heading_default,
            alt: "Stack/Technologies",
            gridColumn: { xs: "3", lg: "2" },
            gridColumnStart: { lg: "3" },
            width: 202
          }, void 0, false, {
            fileName: "app/ui/components/Stack/index.tsx",
            lineNumber: 11,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/Stack/index.tsx",
          lineNumber: 10,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
          templateColumns: "12",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
              as: "p",
              gridColumn: { xs: "12", lg: "7" },
              gridColumnStart: { lg: "3" },
              marginTop: { xs: 20 },
              fontFamily: "secondary",
              lineHeight: { xs: "tight", sm: "none" },
              fontSize: { xs: "2xl", sm: "3xl", md: "4xl" },
              children: "JAVASCRIPT, TYPESCRIPT, REACT, NEXT, REMIX, GRAPHQL, APOLLO, REDUX, WEBPACK, JEST, REACT TESTING LIBRARY, CYPRESS, NODE, EXPRESS, SASS, CSS IN JS, TAILWINDCSS, GSAP, PUG, GIT, GITLAB, STORYBOOK, FIREBASE, NETLIFY, GATSBY, FIGMA, ILLUSTRATOR"
            }, void 0, false, {
              fileName: "app/ui/components/Stack/index.tsx",
              lineNumber: 20,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
              src: skelly_default,
              alt: "skelleton illustration with a hat",
              display: { xs: "hidden", lg: "block" },
              alignSelf: "end",
              transform: {
                lg: `translateY(${toRem(80)}) translateX(${toRem(40)})`,
                xl: `translateY(${toRem(80)}) translateX(${toRem(0)})`
              },
              pointerEvents: "none"
            }, void 0, false, {
              fileName: "app/ui/components/Stack/index.tsx",
              lineNumber: 33,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/ui/components/Stack/index.tsx",
          lineNumber: 19,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/ui/components/Stack/index.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Stack/index.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/ui/screens/Home.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Home = ({ albums }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Intro, {}, void 0, false, {
        fileName: "app/ui/screens/Home.tsx",
        lineNumber: 7,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(About, {}, void 0, false, {
        fileName: "app/ui/screens/Home.tsx",
        lineNumber: 8,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {}, void 0, false, {
        fileName: "app/ui/screens/Home.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Inspiration, {
        albums
      }, void 0, false, {
        fileName: "app/ui/screens/Home.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Contact, {}, void 0, false, {
        fileName: "app/ui/screens/Home.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/screens/Home.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
};

// app/routes/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  const albums = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Home, {
    albums
  }, void 0, false, {
    fileName: "app/routes/index.tsx",
    lineNumber: 16,
    columnNumber: 10
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-LR7X5BZV.js.map
