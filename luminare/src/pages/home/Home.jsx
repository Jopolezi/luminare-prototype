import styled from "styled-components";
import "@fontsource/poppins";
import Lívia from "./livia.jpg";
import { Link } from "react-router";

const Container = styled.section`
  display: flex;
  flex: 1;
  width: 100%;
  background-color: #f1f1f1;
  color: #000;
  font-family: "Poppins", sans-serif;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2% 4%;
  width: 100%;
  height: 100%;
  gap: 50px;
`;

const TopGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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

const Textbox = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
`;

const Title = styled.h1`
font-size: 1.5rem;
font-weight: 600;
color: #212121;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #656565ff;
  margin: 0;
`;

const MidGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const BorderWrapper = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  padding: 5px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 120px;
  height: auto;
  border-radius: 50%;
`;

const Profile = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const Username = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: #212121;
  margin: 0;
`;

const LowerGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

const Buttons = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 16px;
  border-radius: 10px;
  color: #fff;
  text-decoration: none;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: inset 0 -3px 12px rgba(255, 255, 255, 0.3);
  }
`;

const Follow = styled(Buttons)`
  background: linear-gradient(135deg, #5b8dee 0%, #45b7cd 100%);
`;

const Games = styled(Buttons)`
  background: linear-gradient(135deg, #6b5dd3 0%, #a855d8 100%);
`;

const Support = styled(Buttons)`
  background: linear-gradient(135deg, #a855d8 0%, #e5459a 100%);
`;

export default function Home() {
  return (
    <>
      <Container>
        <Content>
          <TopGroup>
            <LogoWrapper>
              <Logo src="/luminare.png" alt="Luminare" />
            </LogoWrapper>

            <Textbox>
              <Title>Luminare</Title>
              <Subtitle>Seu futuro brilha aqui</Subtitle>
            </Textbox>
          </TopGroup>

          <MidGroup>
            <BorderWrapper>
              <ProfileWrapper>
                <Profile src={Lívia} alt="Usuário" />
              </ProfileWrapper>
            </BorderWrapper>

            <Username>Bem-vindo(a), Lívia!</Username>
          </MidGroup>

          <LowerGroup>
            <ButtonsGroup>
              <Follow to="/acompanhamento">Acompanhamento</Follow>

              <Games to="/gamificacao"> Gamificação</Games>

              <Support to="/suporte"> Suporte</Support>
            </ButtonsGroup>
          </LowerGroup>
        </Content>
      </Container>
    </>
  );
}
