import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Olá! Como posso te ajudar?", sender: "bot" },
    ]);
    const [userMessage, setUserMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = async () => {
        if (userMessage.trim()) {
            const newMessages = [
                ...messages,
                { text: userMessage, sender: "user" },
            ];
            setMessages(newMessages);
            setUserMessage("");
            await handleBotResponse(userMessage);
        }
    };

    const handleBotResponse = async (userMessage) => {
        setIsLoading(true);

        try {
            // Atraso de 2 segundos antes de fazer a requisição
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: userMessage }],
                },
                {
                    headers: {
                        'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            const botReply = response.data.choices[0].message.content;
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: botReply, sender: "bot" },
            ]);
        } catch (error) {
            console.error("Erro ao comunicar com a API:", error);
            if (error.response) {
                // Captura a resposta da API
                const { status, data } = error.response;
                if (status === 429) {
                    setMessages((prevMessages) => [
                        ...prevMessages,
                        { text: "Desculpe, estou sobrecarregado. Tente novamente mais tarde.", sender: "bot" },
                    ]);
                } else {
                    setMessages((prevMessages) => [
                        ...prevMessages,
                        { text: "Desculpe, não consegui responder.", sender: "bot" },
                    ]);
                }
            } else {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: "Erro desconhecido. Tente novamente mais tarde.", sender: "bot" },
                ]);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ChatContainer>
            <ChatButton onClick={toggleChat}>{isOpen ? "Fechar Chat" : "Abrir Chat"}</ChatButton>
            {isOpen && (
                <ChatWindow>
                    <ChatHeader>Chatbot</ChatHeader>
                    <ChatMessages>
                        {messages.map((msg, index) => (
                            msg.sender === "user" ? (
                                <UserMessage key={index}>
                                    {msg.text}
                                </UserMessage>
                            ) : (
                                <BotMessage key={index}>
                                    {msg.text}
                                </BotMessage>
                            )
                        ))}
                        {isLoading && <LoadingIndicator>...</LoadingIndicator>}
                    </ChatMessages>
                    <ChatInputContainer>
                        <ChatInput
                            type="text"
                            placeholder="Digite sua mensagem..."
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                        />
                        <SendButton onClick={handleSendMessage}>Enviar</SendButton>
                    </ChatInputContainer>
                </ChatWindow>
            )}
        </ChatContainer>
    );
};

export default ChatBot;

// Estilos do Chat
const ChatContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  z-index: 1000;
`;

const ChatButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0077ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
`;

const ChatWindow = styled.div`
  background-color: #f1f1f1;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: 400px;
  margin-top: 10px;
`;

const ChatHeader = styled.div`
  background-color: #0077ff;
  color: #ffffff;
  padding: 10px;
  font-weight: bold;
  text-align: center;
  border-radius: 8px 8px 0 0;
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
`;

const BotMessage = styled.div`
  background-color: #0077ff;
  color: #ffffff;
  padding: 8px 12px;
  margin: 20px 0;
  border-radius: 12px;
  align-self: flex-start;
  max-width: 80%;
  font-size: 14px;
`;

const UserMessage = styled.div`
  background-color: #d3d3d3;
  color: #000;
  padding: 8px 12px;
  margin: 20px 0;
  border-radius: 12px;
  align-self: flex-end;
  max-width: 80%;
  font-size: 14px;
`;

const LoadingIndicator = styled.div`
  font-size: 50px;
  color: #0077ff;
  margin: 10px 0;
`;

const ChatInputContainer = styled.div`
  display: flex;
  padding: 10px;
  background-color: #fff;
  border-radius: 0 0 8px 8px;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 5px;
  font-size: 14px;
`;

const SendButton = styled.button`
  background-color: #0077ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #005ecb;
  }
`;
