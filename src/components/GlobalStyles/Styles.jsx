import { css, Global } from "@emotion/react";

const styles = css`
    * {
        margin: 0;
        padding: 0;
        font-family: "Montserrat", sans-serif;
    }
`

export const Styles = () => {

    return <Global styles={styles} />;
};
