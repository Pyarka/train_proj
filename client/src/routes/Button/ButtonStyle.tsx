import styled from "styled-components";

export interface ButtonInterface {
    h: number,
    w: number,
}

export const ButtonContainer = styled.button`
    height: ${(props: ButtonInterface) => props.h + 'px'};
    width: ${(props: ButtonInterface) => props.w + 'px'};
    margin: ${window.outerHeight / 2 + 'px ' + window.outerWidth / 2 + 'px'}
`;