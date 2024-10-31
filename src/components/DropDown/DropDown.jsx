import styled from "@emotion/styled";
import { useState } from "react";
import ArrowUp from '../assets/icons/arrow-up.svg';
import ArrowDown from '../assets/icons/arrow-down.svg';

const StyledLabel = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
    text-align: left;
    position: relative;
`;

const StyledButton = styled.button`
    cursor: pointer;
    display: flex;
    height: 40px;
    width: 100%;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    margin: 0px;
    font-family: ${props => props.theme.fontFamily}; 
    outline: none;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    border-radius: 18px;
    border-bottom-left-radius: ${props => props.isOpen ? '0px' : '18px'};
    border-bottom-right-radius: ${props => props.isOpen ? '0px' : '18px'};
    margin-top: ${props => props.theme.spacing.xs};
    padding: ${props => props.theme.spacing.s};
    background: ${props => props.theme.colors.neutral.white};
    border: none;

    &:focus {
        border-color: ${props => props.theme.colors.dark.focus};
    }
`;

const StyledUl = styled.ul`
    position: absolute;
    width: 100%; // Responsivo à largura de StyledButton
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.colors.neutral.white};
    z-index: 100;
    text-align: center;
    padding: 0px;
    margin: 0px;
    font-size: 14px;
    font-weight: 400;
    max-height: 200px; // Altura máxima do menu
    overflow-y: auto;  // Adiciona o scroll vertical
    border-bottom-left-radius: 18px; // Arredondamento da borda inferior esquerda
    border-bottom-right-radius: 18px; // Arredondamento da borda inferior direita
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Ajuste os valores conforme necessário
    &::-webkit-scrollbar {
        width: 0px; /* largura da barra de rolagem */
        background: transparent; /* torna a barra invisível */
    }
`;

const StyledLi = styled.li`
    padding: ${props => props.theme.spacing.s};
    cursor: pointer;
    background: ${props => props.theme.colors.neutral.white};
    width: 100%; // Adiciona largura completa
    text-align: left;
    list-style: none;
    &:hover {
        background: ${props => props.theme.colors.neutral.b}; // Realce no hover
    }
`;

export const DropDown = ({ title, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StyledLabel>
            {title}
            <StyledButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                Selecione 
                <span>
                    <img src={isOpen ? ArrowUp : ArrowDown} alt={isOpen ? 'Seta para cima' : 'Seta para baixo'} />
                </span>
            </StyledButton>
            {isOpen && (
                <StyledUl>
                    {options.map(option => (
                        <StyledLi key={option.value}>
                            {option.text}
                        </StyledLi>
                    ))}
                </StyledUl>
            )}
        </StyledLabel>
    );
};
