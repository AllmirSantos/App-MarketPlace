import * as Box from "./styled";
import LogoSvg from "@assets/logo1.svg";
import Avatar from "@assets/Avatar.svg";
import Edit from "@assets/Edit.svg";

import { Input, InputPassword } from "@components/Inputs";
import { ButtonNative, ButtonBlack } from "@components/Button";

export function SignUp() {
  return (
    <Box.ContainerScroll>
      <Box.Content>
        <Box.SectionLogo>
          <Box.Logo>
            <LogoSvg width="150" height="60" fill="none" />
          </Box.Logo>
          <Box.TextSn>Boas vindas!</Box.TextSn>
          <Box.TextSm>
            Crie sua conta e use o espaço para comprar itens variados e vender
            seus produtos
          </Box.TextSm>
        </Box.SectionLogo>

        <Box.SectionInput>
          <Box.PhotoProfile>
            <Avatar width="150" height="100" fill="none" />
            <Box.BtnEdit>
              <Edit width="150" height="48" fill="none" />
            </Box.BtnEdit>
          </Box.PhotoProfile>
          <Input placeholder="Nome" keyboardType="name" autoCapitalize="none" />
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            placeholder="Telefone"
            keyboardType="number"
            autoCapitalize="none"
          />
          <InputPassword
            placeholder="Senha"
            keyboardType="password"
            autoCapitalize="none"
          />
          <InputPassword
            placeholder="Confirmar senha"
            keyboardType="password"
            autoCapitalize="none"
          />
          <ButtonBlack mt="5" title="Criar" />
        </Box.SectionInput>
      </Box.Content>
      <Box.SectionBottom>
        <Box.TextInputTop>Já tem uma conta?</Box.TextInputTop>
        <ButtonNative title="Ir para o login" variant="outline" />
      </Box.SectionBottom>
    </Box.ContainerScroll>
  );
}
