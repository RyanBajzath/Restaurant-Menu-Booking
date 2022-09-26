import React from "react";
import styled from "styled-components";
const LandingPage = () => {
  return (
    <>
      <FrontPageDiv>
        <StyledImg src="https://cdn.discordapp.com/attachments/1024025000212189275/1024080007414431784/Eat_up.png" />
        <StyledDiscription>
          Home of the best food in town. Grab a tastey meal, wash it down with a
          beverage of your choice and finally, finish your meal with a delicous
          dessert.
        </StyledDiscription>
        <Stylediframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44697.3340785211!2d-73.6896713923242!3d45.55870588742309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc919b0e9107cd3%3A0x2bcc87c29613b17c!2sMount%20Royal%20City%20Hall!5e0!3m2!1sen!2sca!4v1660676427757!5m2!1sen!2sca" />
      </FrontPageDiv>
    </>
  );
};

const FrontPageDiv = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  background-color: #fff0f0;
  flex-direction: column;
  gap: 3vh;
`;

const StyledImg = styled.img`
  height: 80vw;

  background: #f5f5dc;
  border-radius: 50%;
`;

const StyledDiscription = styled.p`
  width: 80vw;
  font-size: 20px;
  font-family: Comic Sans MS;
  font-weight: bold;
`;
const Stylediframe = styled.iframe`
  border: 1px black solid;
  height: 30vh;
`;
export default LandingPage;
