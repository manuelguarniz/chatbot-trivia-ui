import { useState } from "react";

const API_URL = "http://localhost:8081/trivia"; // URL de tu backend

interface Message {
  message: string;
  isUser?: boolean;
}

interface Response {
  response: string;
}

async function sendClientMessage(message: string): Promise<Response> {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    return await response.json()
  } catch (error) {
    console.error(error)
    return { response: "Error: no se pudo conectar con el servidor." }
  }
}

function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (message: string, isUser: boolean = false) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { message, isUser }
    ])
  }

  const sendMessage =  async (input: string) => {
    addMessage(input, true)
    const data = await sendClientMessage(input)

    if (data?.response) {
      addMessage(data.response)
    } else {
      addMessage('Error: no se recibió respuesta del servidor.')
    }
  }

  return {
    messages,
    sendMessage,
  }
}

export default useChat;