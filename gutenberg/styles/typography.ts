import Typography from 'typography'

const systemFonts = [
  '-apple-system', // iOS Safari, macOS Safari, Firefox
  'BlinkMacSystemFont', // Chrome: macOS
  'Segoe UI', // Windows, Windows Phone
  'Roboto', // Android,ChromeOS
  'Oxygen', // KDE
  'Ubuntu', // Ubuntu
  'Cantarell', // GNOME
  'Fira Sans', // Firefox OS
  'Droid Sans', // Older Android
  'Helvetica Neue', // macOS < 10.11
  'sans-serif', // Any
]

// https://make.wordpress.org/core/2016/07/07/native-fonts-in-4-6/
// Use system fonts for performance: https://bitsofco.de/the-new-system-font-stack/
export default new Typography({
  overrideStyles: () => ({}),
  headerFontFamily: systemFonts,
  bodyFontFamily: systemFonts,
  headerWeight: 'normal',
})
