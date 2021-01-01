import css from 'styled-jsx/css'

// See slack-kit for theme
// https://a.slack-edge.com/bv1-9/slack-kit-styles.a483c72.css?cacheKey=gantry-1608842627
export default css.global`
  // One day: https://www.w3.org/TR/css-color-4/#funcdef-color-mod
  :root {
    --theme-space: 4px;
    --theme-space-4: 16px;
    --theme-space-6: 24px;
    --theme-space-8: 32px;
    --theme-space-12: 48px;
    --theme-space-16: 64px;
    --theme-space-24: 96px;
    --theme-space-32: 128px;

    --threshold-sm: 480px;
    --threshold-md: 600px;
    --threshold-lg: 1281px;

    --highlight-accent: 29, 155, 209;
    --secondary-highlight: 242, 199, 68;
  }

  @media (prefers-color-scheme: light) {
    :root {
      --primary-foreground: 29, 28, 29;
      --primary-background: 255, 255, 255;
      --inverted-foreground: 255, 255, 255;
      --inverted-background: 29, 28, 29;
      --foreground-max: 29, 28, 29;
      --foreground-high: 29, 28, 29;
      --foreground-low: 29, 28, 29;
      --foreground-min: 29, 28, 29;
      --foreground-max-solid: 97, 96, 97;
      --foreground-high-solid: 134, 134, 134;
      --foreground-low-solid: 221, 221, 221;
      --foreground-min-solid: 248, 248, 248;
      --highlight: 18, 100, 163;
      --highlight-hover: 11, 76, 140;
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --primary-foreground: 209, 210, 211;
      --primary-background: 26, 29, 33;
      --inverted-foreground: 26, 29, 33;
      --inverted-background: 209, 210, 211;
      --foreground-max: 232, 232, 232;
      --foreground-high: 232, 232, 232;
      --foreground-low: 232, 232, 232;
      --foreground-min: 232, 232, 232;
      --foreground-max-solid: 171, 171, 173;
      --foreground-high-solid: 129, 131, 133;
      --foreground-low-solid: 53, 55, 59;
      --foreground-min-solid: 34, 37, 41;
      --highlight: 29, 155, 209;
      --highlight-hover: 29, 155, 209;
    }
  }
`
