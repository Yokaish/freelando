import styled from '@emotion/styled'

const StyledHeader =  styled.header`
    display: flex;
    width: full;
    padding: 24px 120px;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme.colors.primary.a};
`

const StyledAnchor = styled.a`
    text-decoration: none;
    font-size: 20px;
    font-weight: 400;
    color: ${props => props.theme.colors.neutral.c};
`

export const Header = () => {
    return (
        <StyledHeader>
            <img src='../../img/Logo-02 1.svg' alt='logo'></img>
            <StyledAnchor href='#tag'>Login</StyledAnchor>
        </StyledHeader>
    )
}