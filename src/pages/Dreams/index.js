import React, { useState } from "react";
import {
  ContainerDreamsPage,
  DivDonation,
  Section,
  Div,
  ButtonDonation,
  DonationH1,
  DivSection,
  DivCarousel,
  DivDescription,
  DivDesc,
  DreamImg,
} from "./style";
import CarouselDreams from "./components/carouselDream";
import Description from "../../components/description";
import ProgressBar from "../../components/progressBar";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import ModalConfirm from "../../components/modalConfirm";
import { useDream } from "../../hooks/dream";

const DreamSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { current } = useDream();
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [visible, setVisible] = useState(false);

  function switchVisible() {
    setVisible(!visible);
  }

  function showModal() {
    if (visible === true) {
      return (
        <ModalConfirm
          description={current.description}
          switchVisible={switchVisible}
        />
      );
    }
  }

  console.log(current);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ContainerDreamsPage>
        <div>{current.title}</div>
        <p>{current.user_id.name}</p>
        <Section>
          <DreamImg src={current.picture} />
          <Div>
            <DivDonation>
              <DonationH1>oi</DonationH1>
              <ButtonDonation onClick={switchVisible}>
                Apoiar sonho
              </ButtonDonation>
            </DivDonation>
          </Div>
        </Section>
      </ContainerDreamsPage>
      <DivSection>
        <DivDesc>
          <DivDescription>Descrição</DivDescription>
          <Description>{current.description}</Description>
        </DivDesc>
      </DivSection>
      {showModal()}
    </>
  );
};

export default DreamSection;
