import styled from "styled-components";
import "@fontsource/poppins";
import ProgressBar from "@ramonak/react-progress-bar";
import { Headphones, Backpack, Book, Palette, Star } from "lucide-react";
import { FaStar } from "react-icons/fa6";

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
  gap: 10px;
  font-family: "Poppins", sans-serif;
`;

const Title = styled.h1`
  text-align: left;
  font-size: 1.5rem;
  font-weight: 600;
  color: #212121;
  margin: 0;
`;

const GroupTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const GroupPoints = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2%;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const TitlePoints = styled.h2`
  text-align: left;
  font-size: 1.5rem;
  color: #fff;
  margin: 0;
`;

const Points = styled.p`
  text-align: left;
  font-size: 1.5rem;
  font-weight: 600;
  color: #f1f1f1;
  margin: 0;
`;

const NextPointsGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const NextPoints = styled.p`
  align-self: flex-end;
  font-size: 12px;
  color: #7b7b7bff;
  margin: 0;
`;

const RewardGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const RewardTitle = styled(Title)``;

const RewardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
`;

const CardReward = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border: none;
  border-radius: 12px;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

const NecessaryPoints = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 4px;
  margin: 4px;
  font-size: 12px;
//   background: #667eeab4;
  border: none;
  border-radius: 24px;
  color: #fff;
`;

export default function Games() {
  return (
    <>
      <Container>
        <Content>
          <Title>Gamificação</Title>
          <GroupTop>
            <GroupPoints>
              <TitlePoints>Pontos acumulados:</TitlePoints>
              <Points>1.250</Points>
            </GroupPoints>

            <NextPointsGroup>
              <ProgressBar
                completed={1250}
                maxCompleted={1500}
                height="14px"
                width="100%"
                bgColor="#d066eaff"
                baseBgColor="rgba(160, 160, 160, 0.6)"
                borderRadius="14px"
                labelColor="#fff"
                labelSize="12px"
                customLabel="1250"
                isLabelVisible={true}
              />
              <NextPoints>1500</NextPoints>
            </NextPointsGroup>
          </GroupTop>

          <RewardGroup>
            <RewardTitle>Recompensas</RewardTitle>

            <RewardGrid>
              <CardReward>
                <Palette size={32} />
                Kit Material
                <NecessaryPoints>
                  <FaStar size={16} />
                  750
                </NecessaryPoints>
              </CardReward>

              <CardReward>
                <Book size={32} />
                Vale-livro (R$50)

                <NecessaryPoints>
                  <FaStar size={16} />
                  1000
                </NecessaryPoints>
              </CardReward>

              <CardReward>
                <Backpack size={32} />
                Mochila exclusiva

                <NecessaryPoints>
                  <FaStar size={16} />
                  1250
                </NecessaryPoints>
              </CardReward>

              <CardReward>
                <Headphones size={32} />
                Fones de ouvidos

                <NecessaryPoints>
                  <Star size={16} />
                  1500
                </NecessaryPoints>
              </CardReward>
            </RewardGrid>
          </RewardGroup>
        </Content>
      </Container>
    </>
  );
}
