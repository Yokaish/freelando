import styled from "@emotion/styled"

const components = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    body: 'p',
    label: 'label',
}

const styles = {
    h1: `
        font-size: 40px;
        font-style: normal;
        font-weight: 600;
    `,
    h2: `
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
    ` ,
    h3: `
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
    `,
    body1: `
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
    `,

    body1Bold: `
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
    `,

    body2: `
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
    `,
    body2Bold: `
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
    `,

    subtitle1: `
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
    `,
    subtitle2: `
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        text-decoration-line: underline;
    `,
    label1: `
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 8px
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