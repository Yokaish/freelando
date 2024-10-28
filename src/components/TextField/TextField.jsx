import styled from "@emotion/styled";

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

const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${ props => props.theme.spacing.xs};
`

export const TextField = ({ label }) => {
    return (
        <StyledLabel>
            {label}
            <StyledInput />
        </StyledLabel>
    );
};
