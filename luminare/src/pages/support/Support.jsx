import { useState } from "react";
import styled from "styled-components";
import "@fontsource/poppins";
import {
  MessagesSquare,
  ChevronRight,
  Mail,
  PhoneCall,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

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

const Textbox = styled.div`
  display: flex;
  text-align: left;
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

const GroupTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`;

const ContactCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 12px;
  border-radius: 12px;
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
`;

const ContactCardEmail = styled(ContactCard)`
  background: linear-gradient(135deg, #6b5dd3 0%, #a855d8 100%);
`;

const ContactCardPhone = styled(ContactCard)`
  background: linear-gradient(135deg, #a855d8 0%, #e5459a 100%);
`;

const ContactCardTextbox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ContactCardTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
`;

const ContactCardText = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #e6e5e5ff;
  margin: 0;
`;

const CardButton = styled.div`
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

const AccordionGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const AccordionRoot = styled(Accordion.Root)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

const Item = styled(Accordion.Item)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  overflow: hidden;
`;

const Header = styled(Accordion.Header)`
  display: flex;
  align-items: center;
  color: #fff;
  width: 100%;
`;

const Trigger = styled(Accordion.Trigger)`
  width: 100%;
  padding: 18px;
  display: flex;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  cursor: pointer;
  background: transparent;
  border: none;
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  font-family: "Poppins", sans-serif;
`;

const ContentAccordion = styled(Accordion.Content)`
  font-family: "Poppins", sans-serif;
  padding: 0 18px 18px;
  font-size: 0.95rem;
  color: #dcdcdc;
  line-height: 1.4;

  animation: slideDown 0.25s ease-in-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const FaqTitle = styled(Title)``;

export default function Support() {
  const [isOpen, setOpen] = useState(null);

  return (
    <>
      <Container>
        <Content>
          <Textbox>
            <Title>Suporte</Title>
            <Subtitle>Entre em contato conosco</Subtitle>
          </Textbox>

          <GroupTop>
            <ContactCard>
              <MessagesSquare size={32} />

              <ContactCardTextbox>
                <ContactCardTitle>Chat com a equipe</ContactCardTitle>
                <ContactCardText>Fale com um organizador</ContactCardText>
              </ContactCardTextbox>

              <CardButton>
                <ChevronRight size={32} />
              </CardButton>
            </ContactCard>

            <ContactCardEmail>
              <Mail size={32} />

              <ContactCardTextbox>
                <ContactCardTitle>E-mail</ContactCardTitle>
                <ContactCardText>suporte@luminare.com</ContactCardText>
              </ContactCardTextbox>

              <CardButton>
                <ChevronRight size={32} />
              </CardButton>
            </ContactCardEmail>

            <ContactCardPhone>
              <PhoneCall size={32} />

              <ContactCardTextbox>
                <ContactCardTitle>Ligação</ContactCardTitle>
                <ContactCardText>0800 123 4567</ContactCardText>
              </ContactCardTextbox>

              <CardButton>
                <ChevronRight size={32} />
              </CardButton>
            </ContactCardPhone>
          </GroupTop>

          <FaqTitle>Perguntas frequentes </FaqTitle>

          <AccordionGroup>
            <AccordionRoot
              type="single"
              collapsible
              onValueChange={(value) => setOpen(value)}
            >
              <Item value="faq1">
                <Header>
                  <Trigger>
                    Como justifico uma falta?
                    {isOpen === "faq1" ? (
                      <ChevronUp size={32} />
                    ) : (
                      <ChevronDown size={32} />
                    )}
                  </Trigger>
                </Header>
                <ContentAccordion>
                  Para justificar uma falta, você pode utilizar os canais de
                  suporte e apresentar um comprovante que justifique a falta.
                </ContentAccordion>
              </Item>

              <Item value="faq2">
                <Header>
                  <Trigger>
                    Como resgatar meus pontos?
                    {isOpen === "faq2" ? (
                      <ChevronUp size={32} />
                    ) : (
                      <ChevronDown size={32} />
                    )}
                  </Trigger>
                </Header>
                <ContentAccordion>
                  Você consegue resgatar seus pontos através da presença em
                  aulas e em atividades integrativas
                </ContentAccordion>
              </Item>

              <Item value="faq3">
                <Header>
                  <Trigger>
                    Por que meus pontos não atualizaram?
                    {isOpen === "faq3" ? (
                      <ChevronUp size={32} />
                    ) : (
                      <ChevronDown size={32} />
                    )}
                  </Trigger>
                </Header>
                <ContentAccordion>
                  Os pontos podem levar alguns minutos para aparecer, caso não apareça, feche e abra novamente o app. Persistindo, entre em contato com o suporte.
                </ContentAccordion>
              </Item>
            </AccordionRoot>
          </AccordionGroup>
        </Content>
      </Container>
    </>
  );
}
