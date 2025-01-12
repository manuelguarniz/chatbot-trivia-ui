import ChatHeader from "./ChatHeader.tsx";
import ChatMessage from "./ChatMessage.tsx";
import styled from "styled-components";
import useChat from "../../hooks/chatHook.tsx";
import ButtonEnviar from "../Button/ButtonSender.tsx";
import { useState } from "react";

const ChatStyled = styled.div`
  width: 100%;
  max-width: 680px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media (max-width: 480px) {
    max-width: 100%;
    margin: 0 10px;
  }
`
const ChatInputWrapperStyled = styled.div`
  display: flex;
  padding: 10px;
  background-color: #f9f9f9;
  border-top: 1px solid #ddd;
`

const ChatMessageWrapperStyled = styled.div`
    flex: 1;
    padding: 10px;
    overflow-y: auto;
    border-bottom: 1px solid #ddd;
    max-height: 75vh;
    @media (max-width: 480px) {
      padding: 8px;
    }
  `

const ChatInputStyled = styled.input.attrs({
  type: 'text',
  placeholder: 'Escribe tu mensaje aquí...',
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

function Chat() {
  const {messages, sendMessage} = useChat();
  const [inputValue, setInputValue] = useState<string>('');

  const onClickEvent = async () => {
    if (inputValue?.trim() !== '') {
      await sendMessage(inputValue)
      setInputValue('')
    }
  }

  return <>
    <ChatStyled>
      <ChatHeader />
      <ChatMessageWrapperStyled>
        {messages.map((res, index) => (
          <ChatMessage key={index} isUser={res.isUser}>
            {res.message}
          </ChatMessage>
        ))}
      </ChatMessageWrapperStyled>
      <ChatInputWrapperStyled>
        <ChatInputStyled value={inputValue} onChange={(e) => setInputValue(e.target.value)}></ChatInputStyled>
        <ButtonEnviar onClick={onClickEvent}>Enviar</ButtonEnviar>
      </ChatInputWrapperStyled>
    </ChatStyled>
  </>
}

export default Chat