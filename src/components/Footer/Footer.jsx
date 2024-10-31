import styled from "@emotion/styled"
import { Typography } from "../Typography/Typography"

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: ${props => props.theme.colors.primary.a};
    padding: 24px 120px;
    color: ${props => props.theme.colors.neutral.white}
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.s};
`;

const StyledImage = styled.img`
    align-self: flex-start; // Mantém o tamanho original da imagem
`;

export const Footer = () => {
    return (
        <StyledFooter>
            <StyledDiv>
                <StyledImage src="../../img/small logo.svg" alt="Logo" />
                <Typography variable={'body2'} component={'body'}>
                    Desenvolvido por Kauã Gomes. Projeto fictício sem fins comerciais.
                </Typography>
            </StyledDiv>
            <StyledDiv>
                <Typography variable={'body2'} component={'body'}>Acesse nossas redes</Typography>
                <div>
                    <a><img src="../../img/Whatsapp.svg" alt="icone" /></a>
                    <a><img src="../../img/Twitch.svg" alt="icone" /></a>
                    <a><img src="../../img/Instagram.svg" alt="icone" /></a>
                    <a><img src="../../img/Twitter.svg" alt="icone" /></a>
                </div>
            </StyledDiv>
        </StyledFooter>
    );
}
