import React from "react"
import { ButtonContainer, ButtonInterface } from "./ButtonStyle"

interface PropTypes extends ButtonInterface {
    value?: string,
}

const Button = (props: PropTypes) => {
    return (
        <ButtonContainer
            h={props.h}
            w={props.w}>{props.h}x{props.w}</ButtonContainer>
    )
}

export default Button;