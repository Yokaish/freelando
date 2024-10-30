import styled from "@emotion/styled"

const StyledPrimaryBtn = styled.button`
        background: ${props => props.theme.colors.primary.b};
        color: ${props => props.theme.colors.neutral.white};
        border: 2px solid ${props => props.theme.colors.primary.b};
        border-radius: ${props => props.theme.spacing.s};
        padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.s};
        box-sizing: border-box;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        cursor: pointer;
        &:hover {
            background: ${props => props.theme.colors.dark.b};
        }
        &:focus {
            outline-color: ${props => props.theme.colors.dark.d};
    }
    `

    const StyledSecondaryBtn = styled.button`
        background: transparent;
        color: ${props => props.theme.colors.primary.b};
        border: 2px solid ${props => props.theme.colors.primary.b};
        border-radius: ${props => props.theme.spacing.s};
        padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.s};
        box-sizing: border-box;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        cursor: pointer;
        &:hover {
            border-color: ${props => props.theme.colors.dark.b};
            color: ${props => props.theme.colors.dark.b};
        }
        &:focus {
            outline-color: ${props => props.theme.colors.focus};
        }
    `

export const Button = ({children, variable = 'primary'}) => {
    if ( variable === 'primary') {
        return (
            <StyledPrimaryBtn>
                {children}
            </StyledPrimaryBtn>
        )
    }
    return (
        <StyledSecondaryBtn>
            {children}
        </StyledSecondaryBtn>
    )
}