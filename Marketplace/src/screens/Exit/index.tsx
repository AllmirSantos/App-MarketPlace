import * as Box from "./styled";
import LogoSvg from "@assets/logo1.svg";
import LogoSvgTwo from "@assets/marketspace.svg";

import { Input, InputPassword } from "@components/Inputs";
import { ButtonNative } from "@components/Button";

export function SignIn({ navigation }) {
  return (
    <Box.ContainerScroll>
      <Box.Content>
        <Box.SectionLogo>
          <Box.Logo>
            <LogoSvg width="200" height="80" fill="none" />
          </Box.Logo>
          <Box.Logo>
            <LogoSvgTwo width="200" height="40" fill="none" />
          </Box.Logo>
          <Box.TextSm>Seu espaço de compra e venda</Box.TextSm>
        </Box.SectionLogo>

        <Box.SectionInput>
          <Box.TextInputTop>Acesse a conta</Box.TextInputTop>
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <InputPassword
            placeholder="Senha"
            keyboardType="password"
            autoCapitalize="none"
          />

          <ButtonNative
            mt="5"
            title="Acessar"
            onPress={() => navigation.navigate("Tabs")}
          />
        </Box.SectionInput>
      </Box.Content>
      <Box.SectionBottom>
        <Box.TextInputTop>Ainda não tem acesso?</Box.TextInputTop>
        <ButtonNative
          title="Criar uma conta"
          variant="outline"
          onPress={() => navigation.navigate("SignUp")}
        />
      </Box.SectionBottom>
    </Box.ContainerScroll>
  );
}
