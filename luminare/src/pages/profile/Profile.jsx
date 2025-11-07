import styled from "styled-components";
import { useEffect } from "react";
import "@fontsource/poppins";
import Photo from "./photo.webp";
import { SquareArrowOutUpRight, ChevronRight } from "lucide-react";
import {
  FaRegGrinStars,
  FaRegSmile,
  FaRegMeh,
  FaRegFrown,
  FaRegSadTear,
} from "react-icons/fa";
import { useState } from "react";

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
  flex-direction: column;
  padding: 2% 4%;
  width: 100%;
  height: 100%;
  gap: 10px;
  font-family: "Poppins", sans-serif;
`;

const ProfileGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

const ProfileWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const BorderImg = styled.div`
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  padding: 5px;
`;

const ProfileImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const EditIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 8px;
  margin: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border: none;
  border-radius: 50%;
`;

const Username = styled.h1`
  font-size: 1.5rem;
  color: #212121;
`;

const MidGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 100%;
  font-family: "Poppins", sans-serif;
`;

const YearTitle = styled.h2`
  font-size: 1.2rem;
  color: #5e5e5eff;
  margin: 0;
`;

const YearLabel = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #212121;
  width: fit-content;
  padding: 5px;
  border-radius: 12px;
  margin: 0;
`;

const Bimonthly = styled(YearTitle)``;

const BimonthlyLabel = styled(YearLabel)``;

const EmotionalThermometer = styled(YearTitle)``;

const IconsEmotionalThermometer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #757575ff;
`;

const Psicology = styled.div`
  position: relative;
  display: flex;
  gap: 5px;
  align-items: center;
  align-self: flex-start;
  justify-content: center;
  width: fit-content;
  padding: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border: none;
  border-radius: 12px;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

export const PsicologyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 8px;
  border: none;
  border-radius: 50%;
  background: #ffffff77;
  color: #fff;
`;

const PsicologyText = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  width: fit-content;
  padding: 5px;
  border-radius: 12px;
  margin: 0;
`;

const PointsTitle = styled(YearTitle)``;

const Points = styled(YearLabel)`
  color: #fff;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 12px;
`;

export default function Profile() {
  const [select, setSelect] = useState(null);

  const moods = [
    { id: 1, icon: <FaRegGrinStars size={32} />, color: "#4CAF50" },
    { id: 2, icon: <FaRegSmile size={32} />, color: "#8BC34A" },
    { id: 3, icon: <FaRegMeh size={32} />, color: "#FFC107" },
    { id: 4, icon: <FaRegFrown size={32} />, color: "#FF9800" },
    { id: 5, icon: <FaRegSadTear size={32} />, color: "#F44336" },
  ];

  const [visible, isVisible] = useState(false);

  useEffect(() => {
    if (select === 5 || select === 4) {
      isVisible(true);
    } else {
      isVisible(false);
    }
  }, [select]);

  return (
    <>
      <Container>
        <Content>
          <ProfileGroup>
            <ProfileWrapper>
              <BorderImg>
                <ProfileImg src={Photo} />
              </BorderImg>
              <EditIcon>
                <SquareArrowOutUpRight size={16} />
              </EditIcon>
            </ProfileWrapper>

            <Username>Maria</Username>
          </ProfileGroup>

          <MidGroup>
            <YearTitle>Ano escolar</YearTitle>

            <YearLabel>3º ano</YearLabel>

            <Bimonthly>Bimestre</Bimonthly>
            <BimonthlyLabel>4</BimonthlyLabel>

            <EmotionalThermometer>
              Como você está se sentindo hoje?
            </EmotionalThermometer>

            <IconsEmotionalThermometer>
              {moods.map((mood) => (
                <div
                  key={mood.id}
                  onClick={() => setSelect(select === mood.id ? null : mood.id)}
                  style={{
                    cursor: "pointer",
                    color: select === mood.id ? mood.color : "#757575",
                    transition: "0.2s ease",
                  }}
                >
                  {mood.icon}
                </div>
              ))}
            </IconsEmotionalThermometer>
          </MidGroup>

          {visible ? (
            <>
              <Psicology>
                <PsicologyText>Fale com o nosso psicólogo</PsicologyText>
                <PsicologyButton>
                  <ChevronRight size={32} />
                </PsicologyButton>
              </Psicology>
            </>
          ) : null}

          <PointsTitle>Pontos acumulados</PointsTitle>
          <Points>1250</Points>
        </Content>
      </Container>
    </>
  );
}
