import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ProgressBar from "@ramonak/react-progress-bar";

const Container = styled.section`
  display: flex;
  flex: 1;
  min-height: 100dvh;
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

const Textbox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #212121;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: #656565ff;
  margin: 0;
`;

const CalendarWrapper = styled.div`
  .react-calendar {
    width: 100%;
    max-width: 500px;
    background: none;
    border: none;
    font-family: "Poppins", sans-serif;
  }

  .react-calendar__navigation button {
    font-size: 16px;
    font-weight: 600;
    background: transparent;
    color: #212121;
    padding: 10px;
    border-radius: 12px;
    text-transform: capitalize;
    font-family: "Poppins", sans-serif;
  }

  .react-calendar__navigation__arrow {
    display: none;
  }

  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 600;
    color: #212121;
  }

  .react-calendar__month-view__days {
    gap: 8px;
    display: grid !important;
    grid-template-columns: repeat(7, 1fr) !important;
    padding: 10px;
  }

  .react-calendar__tile {
    border: 2px solid #7b61ff;
    border-radius: 10px;
    padding: 14px 0;
    font-size: 14px;
    font-weight: 600;
    background: #fff;
    color: #1d1d1d;
    transition: 0.2s ease;
  }

  .react-calendar__tile:enabled:hover {
    background: #eee0ff;
    cursor: pointer;
  }

  .react-calendar__tile--now {
    background: #3a00e6;
    border-color: #3a00e6;
    color: #fff;
  }

  .react-calendar__tile--active {
    pointer-events: none;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.25;
    border-style: dashed;
  }

  .faltou {
    background: #ff6767;
    border-color: #ff0000;
    color: #fff !important;
    pointer-events: none;
  }

  .presente {
    background: #47cc35ff;
    border-color: #195a10ff;
    color: #fff;
    pointer-events: none;
  }
`;

const CardFrequency = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 2%;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  gap: 10px;
`;

const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardFrequencyTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
`;

const CardFrequencyText = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: #f1f1f1;
  margin: 0;
`;

export default function Follow() {
  const falta = [1, 2];
  const presenca = [3, 4, 5, 6, 7];

  const currentMonth = 10;
  const currentYear = 2025;

  const isBusinessDay = (day, month, year) => {
    const date = new Date(year, month, day);
    const dayOfWeek = date.getDay();
    return dayOfWeek !== 0 && dayOfWeek !== 6;
  };

  const faltasUteis = falta.filter((day) =>
    isBusinessDay(day, currentMonth, currentYear)
  );

  const presencasUteis = presenca.filter((day) =>
    isBusinessDay(day, currentMonth, currentYear)
  );

  const getBusinessDays = (month, year) => {
    let count = 0;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
      if (isBusinessDay(day, month, year)) {
        count++;
      }
    }

    return count;
  };

  const frequency = () => {
    const totalDays = getBusinessDays(currentMonth, currentYear);
    if (totalDays === 0) return 0;

    const calc = (presencasUteis.length / totalDays) * 100;
    return calc.toFixed(0);
  };

  const days = () => {
    return presencasUteis.length;
  };

  return (
    <>
      <Container>
        <Content>
          <Textbox>
            <Title>Acompanhamento</Title>
            <Subtitle>Presença e faltas</Subtitle>
          </Textbox>

          <CalendarWrapper>
            <Calendar
              locale="pt-BR"
              tileClassName={({ date }) => {
                if (date.getMonth() === currentMonth) {
                  if (faltasUteis.includes(date.getDate())) return "faltou";
                  if (presencasUteis.includes(date.getDate()))
                    return "presente";
                  return null;
                }
              }}
            />
          </CalendarWrapper>

          <CardFrequency>
            <CardFrequencyTitle>
              Estátisticas mensais atuais
            </CardFrequencyTitle>
            <CardGroup>
              <CardFrequencyText>Total de dias presentes:</CardFrequencyText>
              <CardFrequencyText>{days()}</CardFrequencyText>
            </CardGroup>

            <CardGroup>
              <CardFrequencyText>Frequência atual (mês): </CardFrequencyText>
              <ProgressBar
                completed={Number(frequency())}
                maxCompleted={100}
                height="14px"
                width="100%"
                bgColor="#47cc35"
                baseBgColor="rgba(255, 255, 255, 0.3)"
                borderRadius="14px"
                labelColor="#fff"
                labelSize="12px"
                isLabelVisible={true}
              />
            </CardGroup>
          </CardFrequency>
        </Content>
      </Container>
    </>
  );
}
