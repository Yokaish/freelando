import { Global } from "@emotion/react";

const styles = theme => ({
    "*": {
        boxSizing: "border-box", // Define o box-sizing como border-box para todos os elementos
    },
    html: {
        fontFamily: theme.fontFamily,
    },
    body: {
        margin: 0,
        padding: 0,
    },
});

export const Styles = () => {
    return <Global styles={styles} />;
};
