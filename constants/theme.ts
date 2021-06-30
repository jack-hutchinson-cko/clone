export const defaultTheme = {
  colors: {
    success: '#0c1142',
    successDark: '#0c1142',
    successLight: '#FFFFFF',
    danger: '#cc4b3d',
    dangerDark: '#990C0C',
    dangerLight: '#F6E3E3',
    warning: '#EE6D5F',
    warningDark: '#A55A00',
    warningLight: '#FBEFD8',
    white: '#FFFFFF',
    offWhite: '#F2F4F5',
    base: '#3d4168',
    baseLight: '#DFE7EB',
    focus: '#0c1142',
    focusLight: '#354C55',
    blueLight: '#D7E4FD',
    blueTertiary: '#2BD4DB',
    turquoise: '#C0F2F4',
    blueDark: '#3D415C',
    greyLight: '#E6E7EC',
    grayFaded: '#8688a0',
    greyDark: '#B6B8C6',
    cometLight: '#55587b',
    tip: '#70c9b7',
    note: '#f3c25d',
    information: '#80e5e9',
    codeLabelBackground: '#f5f5fc',
    postTag: '#3ab9f4',
    getTag: '#009E7E',
    putTag: '#6964B2',
    optionalTag: '#00b48f',
    recommendedTag: '#ffab00',
    primaryYellow: '#FFFFC8',
    tokenString: '#6964b3',
    tokenNumber: '#0082d9',
  },
  borders: {
    success: ['0px solid #0c1142', '1px solid #0c1142', '3px solid #0c1142', '4px solid #0c1142'],
    successDark: [
      '0px solid #0c1142',
      '1px solid #0c1142',
      '3px solid #0c1142',
      '4px solid #0c1142',
    ],
    successLight: [
      '0px solid #EFF9F6',
      '1px solid #EFF9F6',
      '3px solid #EFF9F6',
      '4px solid #EFF9F6',
    ],
    danger: ['0px solid #CA4A4A', '1px solid #CA4A4A', '3px solid #CA4A4A', '4px solid #CA4A4A'],
    dangerDark: [
      '0px solid #990C0C',
      '1px solid #990C0C',
      '3px solid #990C0C',
      '4px solid #990C0C',
    ],
    dangerLight: [
      '0px solid #F6E3E3',
      '1px solid #F6E3E3',
      '3px solid #F6E3E3',
      '4px solid #F6E3E3',
    ],
    warning: ['0px solid #D98E50', '1px solid #D98E50', '3px solid #D98E50', '4px solid #D98E50'],
    warningDark: [
      '0px solid #A55A00',
      '1px solid #A55A00',
      '3px solid #A55A00',
      '4px solid #A55A00',
    ],
    warningLight: [
      '0px solid #FBEFD8',
      '1px solid #FBEFD8',
      '3px solid #FBEFD8',
      '4px solid #FBEFD8',
    ],
    white: ['0px solid #FFFFFF', '1px solid #FFFFFF', '3px solid #FFFFFF', '4px solid #FFFFFF'],
    offWhite: ['0px solid #F2F4F5', '1px solid #F2F4F5', '3px solid #F2F4F5', '4px solid #F2F4F5'],
    base: ['0px solid #667080', '1px solid #667080', '3px solid #667080', '4px solid #667080'],
    baseLight: ['0px solid #DFE7EB', '1px solid #DFE7EB', '3px solid #DFE7EB', '4px solid #DFE7EB'],
    focus: ['0px solid #1B2F37', '1px solid #1B2F37', '3px solid #1B2F37', '4px solid #1B2F37'],
    focusLight: [
      '0px solid #354C55',
      '1px solid #354C55',
      '3px solid #354C55',
      '4px solid #354C55',
    ],
    blueLight: ['0px solid #D7E4FD', '1px solid #D7E4FD', '3px solid #D7E4FD', '4px solid #D7E4FD'],
  },
  radii: [0, '3px', '30px', '50%'],
  shadows: {
    none: 'none',
    focusLight: [
      '0 1px 3px 0 rgba(53,76,85,0.15)',
      '0 2px 5px 0 rgba(53,76,85,0.15)',
      '0 4px 9px 0 rgba(53,76,85,0.45)',
      '0 8px 18px 0 rgba(53,76,85,0.45)',
      '0 3px 3px -3px rgba(53,76,85,0.45)',
    ],
    success: ['0 1px 3px 0 rgba(61,65,104,0.45)', '0 2px 5px 0 rgba(61,65,104,0.45)'],
    danger: ['0 1px 3px 0 rgba(202,74,74,0.45)', '0 2px 5px 0 rgba(202,74,74,0.45)'],
    focus: '0 0 0 3px rgba(12,17,66,0.5)',
  },
  lineHeights: ['16px', '24px', '32px'],
  fontSizes: ['13px', '16px', '16px', '24px', '40px'],
  space: [0, 0, '8px', '16px', '24px', '32px'],
  padding: {
    sm: '16px',
    md: '24px',
  },
};

export type ThemeType = typeof defaultTheme;
