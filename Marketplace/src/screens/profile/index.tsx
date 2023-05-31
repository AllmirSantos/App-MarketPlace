import { Text, View } from "react-native";
import * as ST from "./styled";
import ImgFavoriteTrue from "../../assets/person.png";
import {
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  SimpleLineIcons,
} from "@expo/vector-icons";

export function Profile() {
  return (
    <ST.Container>
      <ST.Header>
        <ST.SectionInfo>
          <ST.ImageProfile source={ImgFavoriteTrue} />
          <ST.Name>Jack Snow</ST.Name>
          <ST.Location>San Francisco - CA</ST.Location>
        </ST.SectionInfo>
        <ST.SectionBoxSocial>
          <ST.BoxSocial>
            <ST.NumberSocial>125</ST.NumberSocial>
            <ST.NameSocial> FOLLOWERS</ST.NameSocial>
          </ST.BoxSocial>
          <ST.BoxSocial>
            <ST.NumberSocial>150</ST.NumberSocial>
            <ST.NameSocial> FOLLOWING</ST.NameSocial>
          </ST.BoxSocial>
          <ST.BoxSocial>
            <ST.NumberSocial>321</ST.NumberSocial>
            <ST.NameSocial> LIKES</ST.NameSocial>
          </ST.BoxSocial>
        </ST.SectionBoxSocial>
      </ST.Header>
      <ST.SectionOptionsProfile>
        <ST.SectionOptionsTop>
          <ST.BtnOptions>
            <Ionicons name="chatbox-ellipses-outline" size={24} color="black" />
            <ST.NameOptions>Chat</ST.NameOptions>
          </ST.BtnOptions>
          <ST.BtnOptions>
            <MaterialCommunityIcons
              name="dock-window"
              size={24}
              color="black"
            />
            <ST.NameOptions>Docks</ST.NameOptions>
          </ST.BtnOptions>
          <ST.BtnOptions>
            <Ionicons name="location-outline" size={24} color="black" />
            <ST.NameOptions>Location</ST.NameOptions>
          </ST.BtnOptions>
        </ST.SectionOptionsTop>
        <ST.SectionOptionsBottom>
          <ST.BtnOptions>
            <Feather name="users" size={24} color="black" />
            <ST.NameOptions>Friends</ST.NameOptions>
          </ST.BtnOptions>
          <ST.BtnOptions>
            <SimpleLineIcons name="settings" size={24} color="black" />
            <ST.NameOptions>Settings</ST.NameOptions>
          </ST.BtnOptions>
          <ST.BtnOptions>
            <Ionicons name="notifications-outline" size={24} color="black" />
            <ST.NameOptions>Notifications</ST.NameOptions>
          </ST.BtnOptions>
        </ST.SectionOptionsBottom>
      </ST.SectionOptionsProfile>
    </ST.Container>
  );
}
