import styled from "styled-components";
import { forwardRef } from "react";

interface Props {
  onClick?: () => void;
  children?: React.ReactNode;
}

const ButtonSenderStyled = styled.button`
    padding: 10px 15px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
    cursor: pointer;
    font-size: 16px;
    &:hover {
        background-color: #45a049;
    }
    @media (max-width: 480px) {
        font-size: 14px;
        padding: 8px;
    }
`

const ButtonSender = forwardRef<HTMLButtonElement, Props>(({onClick, children}, ref) => {
  return <>
    <ButtonSenderStyled ref={ref} onClick={onClick} id="send-button">
      {children}
    </ButtonSenderStyled>
  </>
})

export default ButtonSender;