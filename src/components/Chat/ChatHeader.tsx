import styled from "styled-components";

const ChatHeaderStyled = styled.div`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  text-align: center;
  @media (max-width: 480px) {
    h2 {
      font-size: 18px;
    }
  }
`

function ChatHeader() {
  return <>
    <ChatHeaderStyled className="chat-header">
      <h2>Chat Trivia</h2>
    </ChatHeaderStyled>
  </>
}

export default ChatHeader;