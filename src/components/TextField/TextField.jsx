import styled from "@emotion/styled";

const StyledInput = styled.input`
    display: block;
    width: 100%;
    height: 40px;
    align-self: stretch;
    border-radius: 16px;
    background: ${props => props.theme.colors.neutral.white};
    border: none;
    outline: none;
    font-family: ${props => props.theme.fontFamily};
    font-size: 14px;
    padding-left: ${props => props.theme.spacing.s}; // Espaçamento adicionado para o texto

    &:focus {
       font-family: ${props => props.theme.fontFamily};
    }
`;


const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${ props => props.theme.spacing.xs};
    text-align: left;
`

export const TextField = ({ label }) => {
    return (
        <StyledLabel>
            {label}
            <StyledInput />
        </StyledLabel>
    );
};
