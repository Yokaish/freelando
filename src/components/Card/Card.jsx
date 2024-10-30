import styled from '@emotion/styled'

const StyledDiv = styled.div`
    padding: ${props => props.theme.spacing.l};
    background: ${props => props.theme.colors.secondary.a};
    border-radius: ${props => props.theme.spacing.s};
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.m};
    text-align: center
`

export const Card  = ({ children }) => {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    )
}