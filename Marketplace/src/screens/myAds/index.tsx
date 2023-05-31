import * as Box from "./styled";
import LogoSvg from "@assets/logo1.svg";
import LogoSvgTwo from "@assets/marketspace.svg";

import { Input, InputPassword } from "@components/Inputs";
import { ButtonNative } from "@components/Button";
import { Text } from "native-base";

export function MyAds({ navigation }) {
  return (
    <Box.ContainerScroll>
      <Text>Meus anúncios</Text>
    </Box.ContainerScroll>
  );
}
