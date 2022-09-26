import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const FoodPage = () => {
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(`loading`);

  useEffect(() => {
    fetch(`http://localhost:8000/foodMenu/food`)
      .then((res) => res.json())
      .then((data) => {
        setFoodData(data.data.themeList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(typeof foodData);
  return (
    <>
      <FoodPageDiv>
        <StyledTitle>Food Page</StyledTitle>

        {foodData.map((foodItem) => {
          return (
            <FoodItemDiv>
              <FoodImg src={foodItem.imgSrc} />
              <FoodDescription>
                {foodItem.name} ${foodItem.price}
              </FoodDescription>
            </FoodItemDiv>
          );
        })}
      </FoodPageDiv>
    </>
  );
};

const StyledTitle = styled.h1`
  margin-top: 1vh;

  color: #ff7f507b;
  -webkit-text-stroke-width: 1.2px;
  -webkit-text-stroke-color: coral;
`;

const FoodPageDiv = styled.div`
  background-color: #fff0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const FoodItemDiv = styled.div`
  margin-bottom: 2.5vh;
  margin-top: 2.5vh;
  background: #f5f5dc;
  border-radius: 50%;
`;

const FoodDescription = styled.h2`
  color: #ff7f50c8;
  -webkit-text-stroke-width: 1.2px;
  -webkit-text-stroke-color: coral;
`;

const FoodImg = styled.img`
  width: 80vw;
  height: auto;
  border-radius: 16px;
`;

export default FoodPage;
