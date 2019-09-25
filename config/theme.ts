interface ThemeShape {
  breakpoints: BPs
  fontSizes: string[]
  maxWidth: string
  maxWidthText: string
  colors: {
    [key: string]: string
  }
  space: string[]
  fontWeights: {
    [key: string]: number
  }
  sidebarWidth: {
    [key: string]: string
  }
}

type BPs = {
  xs: string
  s: string
  m: string
  l: string
}

const theme: ThemeShape = {
  breakpoints: {
    xs: '400px',
    s: '750px',
    m: '900px',
    l: '1200px',
  },
  // breakpoints: ['480px', '650px', '1000px', '1200px', '1400px'],
  fontSizes: ['1rem', '1.2rem', '1.44rem', '1.728rem', '2.074rem', '2.488rem'],
  colors: {
   primary: '#3D63AE',
   bg: '#e5e5e5',
   black: '#191919',
   greyLight: '#e5e5e5',
   smoke: '#757577',
   greyBlue: '#a2bce2',
   grey: '#595C62',
   greyDark: '#303643',
   greyDarker: '#1c252b',
   secondary: '#58545a',
   shade: '#f5f5f5',
  },
  space: [
    '0',
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
    '4rem',
    '6rem',
    '8rem',
    '12rem',
    '16rem',
  ],
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  sidebarWidth: {
    big: '375px',
    normal: '320px',
  },
  maxWidth: '1000px',
  maxWidthText: '720px',
}

export default theme
