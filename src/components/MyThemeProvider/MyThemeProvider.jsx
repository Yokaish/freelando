import {ThemeProvider} from '@emotion/react'

export const theme = {
    colors : {

        white: '',
        warning: '',
        focus: '',

        primary : {
            a: '5754ED',
            b: '',
            c: ''
        },
        secondary : {
            a: '#EBEAF9',
            b: '',
            c: ''
        },
        neutral: {
            a: '',
            b: '',
            c: ''
        },
        dark : {
            a: '',
            b: '',
            c: ''
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
    }

}

export const MyThemeProvider = ( { children }) => {
    return <ThemeProvider theme={theme}>
        { children }
    </ThemeProvider>
}