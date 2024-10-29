import { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

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

    const handleSendMessage = () => {
        if (userMessage.trim()) {
            const newMessages = [
                ...messages,
                { text: userMessage, sender: "user" },
            ];
            setMessages(newMessages);
            setUserMessage("");
            handleBotResponse();
        }
    };

    const handleBotResponse = () => {
        setIsLoading(true);

        setTimeout(() => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: "Essa é uma resposta automática.", sender: "bot" },
            ]);
            setIsLoading(false);
        }, 2000);
    };

    return (
        <ChatContainer>
            {!isOpen && (
                <ChatButton onClick={toggleChat}>
                    <ChatImage src="/img/chatbot.png" alt="Abrir Chat" />
                </ChatButton>
            )}
            {isOpen && (
                <ChatWindow>
                    <ChatHeader>
                        Chatbot
                        <CloseButton onClick={toggleChat}>
                            <AiOutlineClose size={20} />
                        </CloseButton>
                    </ChatHeader>
                    <ChatMessages>
                        {messages.map((msg, index) => (
                            msg.sender === "user" ? (
                                <UserMessage key={index}>{msg.text}</UserMessage>
                            ) : (
                                <BotMessage key={index}>{msg.text}</BotMessage>
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

const ChatContainer = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 1000;
`;

const ChatButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const ChatImage = styled.img`
  width: 50px; /* Ajuste o tamanho conforme necessário */
  height: 50px;
`;

const ChatWindow = styled.div`
  background-color: #f1f1f1;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 300px;
  margin-top: 10px;
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0077ff;
  color: #ffffff;
  padding: 10px;
  font-weight: bold;
  border-radius: 8px 8px 0 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
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
