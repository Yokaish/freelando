import styled from '@emotion/styled'

const StyledHeader =  styled.header`
    display: flex;
    width: full;
    padding: 24px 120px;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme.colors.primary.a};
`

export const Header = ( {children}) => {
    return (
        <StyledHeader>
            {children}
        </StyledHeader>
    )
}