import styled from "styled-components";

interface Props {
  isUser?: boolean;
  children?: React.ReactNode;
}


const ChatMessageStyled = styled.div<{
  $isUser: boolean
}>`
  margin-bottom: 10px;
  padding: 8px 12px;
  border-radius: 5px;
  max-width: 80%;
  background-color: #f1f8e9;
  align-self: flex-start;
  @media (max-width: 480px) {
    max-width: 85%;
  }
  ${({$isUser}) => $isUser && `
      background-color: #e0f7fa;
      align-self: flex-end;
      margin-left: auto;
    `}
`

const ChatMessage: React.FC<Props> = ({isUser = false, children}) => {
  return (
    <ChatMessageStyled $isUser={isUser}>
      {children}
    </ChatMessageStyled>
  )
}

export default ChatMessage;