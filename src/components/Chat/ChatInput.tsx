import styled from "styled-components";
import { forwardRef } from "react";

interface Props {
  children?: React.ReactNode;
}

const ChatInputStyled = styled.input.attrs({
  type: 'text',
  placeholder: 'Escribe tu mensaje aquí...'
})`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px;
  }
`

const ChatInput = forwardRef<HTMLInputElement, Props>(({ children }, ref) => {
  return <>
    <ChatInputStyled ref={ref}>
      {children}
    </ChatInputStyled>
  </>
})

export default ChatInput;