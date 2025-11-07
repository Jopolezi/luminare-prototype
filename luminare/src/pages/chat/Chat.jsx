import styled from "styled-components";
import "@fontsource/poppins";
import { Link } from "react-router";
import User from "./photo.webp";
import { MessageSquarePlus } from "lucide-react";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  background-color: #f1f1f1;
  color: #000;
  font-family: "Poppins", sans-serif;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2% 4%;
  width: 100%;
  height: 100%;
  gap: 10px;
  font-family: "Poppins", sans-serif;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 4%;
  background: #1a1b2e;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: auto;
`;

const Logo = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const TitleHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
`;

const GroupTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleContent = styled(TitleHeader)`
  font-size: 1.2rem;
  color: #212121;
`;

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  padding: 0 4%;
`;

const ChatGroup = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
`;

const AddMessage = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 8px;
  border-radius: 50%;
`;

const PhotoWrapper = styled.div`
  display: flex;
  align-self: flex-start;
  width: 60px;
  height: 60px;
`;

const BorderPhoto = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  padding: 1px;
`;

const Photo = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const Username = styled.h2`
  font-size: 1.2rem;
  color: #212121;
`;

export default function Chat() {
  return (
    <>
      <Container>
        <Header>
          <LogoWrapper>
            <Logo src="/luminare.png" />
          </LogoWrapper>
          <TitleHeader>LuminareChat</TitleHeader>
        </Header>
        <Content>
          <GroupTop>
            <TitleContent>Minhas conversas (1)</TitleContent>

            <AddMessage>
              <MessageSquarePlus />
            </AddMessage>
          </GroupTop>

          <MessagesContainer>
            <ChatGroup to="/mensagens/anaprofessora">
              <PhotoWrapper>
                <BorderPhoto>
                  <Photo src={User} />
                </BorderPhoto>
              </PhotoWrapper>

              <Username>Professora Ana</Username>
            </ChatGroup>
          </MessagesContainer>
        </Content>
      </Container>
    </>
  );
}
