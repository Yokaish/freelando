import {ThemeProvider} from '@emotion/react'

export const theme = {
    colors : {

        white: '',
        warning: '',
        focus: '',

        primary : {
            a: '#5754ED',
            b: '#D93114',
            c: '#168070'
        },
        secondary : {
            a: '#EBEAF9',
            b: '#FDF8F8',
            c: '#EBFCF9'
        },
        neutral: {
            a: '#373737',
            b: '#E8E8E8',
            c: '#F5F5F5',
            white: '#FFFFFF'
        },
        dark : {
            a: '#110EA0',
            b: '#B61B00',
            warning: '#FF0E0E',
            focus: '#B009FF'
        }
        
    },

    spacing: {
        xxs : '4px',
        xs: '8px',
        s: '16px',
        m: '24px',
        l: '32px',
        xl: '48px',
        xxl: '64px'
    },

    fontFamily: "'Montserrat', sans-serif;"

}

export const MyThemeProvider = ( { children }) => {
    return <ThemeProvider theme={theme}>
        { children }
    </ThemeProvider>
}