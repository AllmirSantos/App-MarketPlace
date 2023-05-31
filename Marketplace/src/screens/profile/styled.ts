import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  display: flex;
  background: #f2f5fb;
  flex: 1;
`;
export const Header = styled.View`
  width: 100%;
  flex: 1;
  background: #f2f5fb;
  align-items: center;
  display: flex;
  background: #f35d38;
  border-radius: 30px;
`;
export const SectionInfo = styled.View`
  width: 100%;
  padding-top: 40px;
  flex: 1;
  background: #f2f5fb;
  justify-content: center;
  align-items: center;
  display: flex;
  background: #ffffff;
  border-radius: 30px;
`;
export const ImageProfile = styled.Image`
  height: 160px;
  width: 160px;
  border-radius: 160px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
export const Name = styled.Text`
  font-size: 35px;
  font-weight: 700;
  margin-top: 20px;
  color: #352641;
`;
export const Location = styled.Text`
  font-size: 16px;
  color: #afb2bf;
  margin-top: 5px;
`;
export const SectionBoxSocial = styled.View`
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  height: 90px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;
export const BoxSocial = styled.View`
  justify-content: center;
  align-items: center;
`;
export const NumberSocial = styled.Text`
  font-size: 22px;
  margin-bottom: 4px;
  font-weight: 700;
  color: #ffffff;
`;
export const NameSocial = styled.Text`
  font-size: 12px;
  color: #ffffff;
`;

export const SectionOptionsProfile = styled.View`
  padding: 20px;
  margin: 25px;
  border-radius: 30px;
  background: #ffffff;
  height: 210px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const SectionOptionsTop = styled.View`
  width: 100%;
  height: 110px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: flex;
  border-bottom-width: 1px;
  border-color: #cecece;
`;
export const SectionOptionsBottom = styled.View`
  width: 100%;
  height: 110px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: flex;
`;
export const BtnOptions = styled.TouchableOpacity`
  flex: 1;
  height: 110px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
export const NameOptions = styled.Text`
  font-size: 14px;
  color: #afb2bf;
  margin-top: 10px;
  font-weight: 500;
`;
