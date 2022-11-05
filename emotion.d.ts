import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      black: '#18191F',
      black800: '#474A57',
      black700: '#969BAB',
      black300: '#9FA4B4',
      black200: '#EEEFF4',
      black100: '#F4F5F7',
      white: "#fff",
      blue: '#1947E6',
      blue800: '#8094FF',
      blue100: '#E9E7FC',
      pink: '#FF89BB',
      pink800: '#FFC7DE',
      pink100: '#FFF3F8',
      yellow: '#FFBD12',
      yellow800: '#FFD465',
      yellow100: '#FFF4CC',
      green: '#00C6AE',
      green800: '#61E4C5',
      green100: '#D6FCF7',
      red: '#F95A2C',
      red800: '#FF9692',
      red100: '#FFE8E8',

    }
    boxShadow: {
      0: '0px 3px 8px rgba(0, 0, 0, 0.15)'
    }
    transition: {
      base: '0.2s ease all'
    }
    corners: {
      base: 4
      small: 1.5
    }
  }
