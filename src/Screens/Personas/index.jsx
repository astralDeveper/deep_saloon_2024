import React, { useState } from "react";
import Container from "../../Components/Container";
import ProfileCard from "./Components/ProfileCard";
import PersonaSelect from "./Components/PersonaSelect";
import PersonaRewards from "./Components/PersonaRewards";
import PersonaInformation from "./Components/PersonaInformation";

const Personas = () => {
  const [show, setShow] = useState(1);

  return (
    <>
      <Container>
        <div className="bg-secondaryColor">
          <div className="w-full h-[260px] flex items-end justify-center bg-primaryColor">
            <ProfileCard show={show} setShow={setShow} />
          </div>
          <div className="w-[80%] mx-auto lg:pt-[6rem] md:pt-[4rem] sm:pt-[3rem] pt-[3rem]">
            {show === 1 && <PersonaSelect />}
            {show === 2 && <PersonaInformation />}
            {show === 3 && <PersonaRewards />}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Personas;
