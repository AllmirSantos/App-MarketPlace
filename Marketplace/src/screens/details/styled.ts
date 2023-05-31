import { Dimensions } from "react-native";

import styled, { css } from "styled-components/native";
const windowWidth = Dimensions.get("window").width;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 50px 15px 15px 15px;
    position: absolute;
    z-index: 1;
    top: 0px;
  `}
`;

export const ImageDetails = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
  `}
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    padding: 20px 10px 10px 20px;
    font-size: 28px;
  `}
`;
export const BtnFavorite = styled.View`
  ${({ theme }) => css`
    display: flex;
    margin-top: -35px;
    border-radius: 100%;
    border: solid 2px #f35d38;
    align-self: flex-end;
    margin-right: 20px;
  `}
`;
export const TextDetails = styled.View`
  ${({ theme }) => css`
    padding: 0px 20px 0px 20px;
    display: flex;
    width: 100%;
    margin-top: -40px;
    background: #ffffff;
    border-radius: 40px;
    color: "#000000";
  `}
`;
export const InfoBottom = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
  `}
`;
