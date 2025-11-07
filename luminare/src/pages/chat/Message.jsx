import styled from "styled-components";
import "@fontsource/poppins";
import { ArrowLeft, SendHorizontal } from "lucide-react";
import { Link } from "react-router";
import User from "./photo.webp";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #f1f1f1;
  font-family: "Poppins", sans-serif;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100dvh - 140px);
  gap: 10px;
  font-family: "Poppins", sans-serif;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  height: 70px;
  padding: 0 4%;
  background: #1a1b2e;
  color: #fff;
`;

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Photo = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`;

const MessagesArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2% 4%;
  gap: 10px;
  flex: 1;
  overflow-y: auto;
`;

const MessageBox = styled.div`
  max-width: 75%;
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 0.95rem;
  line-height: 1.3;
  color: #000;

  ${({ sent }) =>
    sent
      ? `
    align-self: flex-end;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #fff;
    border-bottom-right-radius: 0;
  `
      : `
    align-self: flex-start;
    background: #fff;
    border-bottom-left-radius: 0;
  `}
`;

const InputArea = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 4%;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  border: 1px solid #c1c1c1;
  outline: none;
  background: #f2f2f2;
  padding: 12px;
  border-radius: 8px;
  font-size: 1rem;
`;

const SendButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export default function Message() {
  return (
    <Container>
      <Header>
        <BackButton to="/mensagens">
          <ArrowLeft />
        </BackButton>

        <Profile>
          <Photo src={User} />
          <Name>Professora Ana</Name>
        </Profile>
      </Header>

      <Content>
        <MessagesArea>
          <MessageBox>
            Bom dia! Só passando para lembrar da atividade de hoje. 😊
          </MessageBox>

          <MessageBox sent>
            Oi, professora! Acabei de enviar no Classroom
          </MessageBox>

          <MessageBox>
            Ahh, que ótimo! Vou corrigir ainda hoje, obrigado. 👏
          </MessageBox>

          <MessageBox sent>De nada! Qualquer coisa estou por aqui!</MessageBox>
        </MessagesArea>

        <InputArea>
          <Input placeholder="Digite sua mensagem..." />
          <SendButton>
            <SendHorizontal size={20} />
          </SendButton>
        </InputArea>
      </Content>
    </Container>
  );
}
