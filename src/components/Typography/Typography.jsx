import styled from "@emotion/styled"

const components = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    body: 'p',
}

const styles = {
    h1: `
        font-size: 40px;
        font-style: normal;
        font-weight: 600;
        margin: 0px;
    `,
    h2: `
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        margin: 0px;
    ` ,
    h3: `
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        margin: 0px;
    `,
    body1: `
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        margin: 0px;
    `,

    body1Bold: `
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        margin: 0px;
    `,

    body2: `
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        margin: 0px;
    `,
    body2Bold: `
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        margin: 0px;
    `,

    subtitle1: `
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        margin: 0px;
    `,
    subtitle2: `
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        text-decoration-line: underline;
        margin: 0px;
    `
}

export const Typography = ({variable, component, children}) => {

    const tag = components[component]
    const UtilizedComponent = styled[tag]`${styles[variable]}`

    return (
        <UtilizedComponent>
            {children}
        </UtilizedComponent>
    )


}