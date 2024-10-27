import styled from "@emotion/styled";
import { Typography } from "../Typography/Typography";

const StyledInput = styled.input`
    display: block;
    width: 100%;
    height: 40px;
    align-self: stretch;
    border-radius: 16px;
    background: ${props => props.theme.colors.white};
    border: none;
    outline: none;
    padding-left: ${props => props.theme.spacing.s};
    font-family: ${props =>props.theme.fontFamily};
    font-size: 14px;

    &:focus {
       font-family: ${props =>props.theme.fontFamily}
    }
`;

export const TextField = ({ label }) => {
    return (
        <Typography component='label' variable='label1'>
            {label}
            <StyledInput />
        </Typography>
    );
};
