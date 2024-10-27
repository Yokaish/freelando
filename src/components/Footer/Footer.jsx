import styled from "@emotion/styled"

const StyledFooter = styled.footer`
    background: ${props => props.theme.colors.primary.a};
    padding: 24px 120px;
    color: ${props => props.theme.colors.neutral.white}
`

export const Footer = ({children}) => {
    return (
        <StyledFooter>
            {children}
        </StyledFooter>
    )
}