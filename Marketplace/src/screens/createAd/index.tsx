import {
  VStack,
  Text,
  View,
  Image,
  Button,
  Switch,
  Checkbox,
  Box,
  ScrollView,
  Radio,
  Stack,
} from "native-base";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import DetailsImg from "../../assets/kayak-big.png";
import Pin from "../../assets/pin-icon.png";
import ImgFavoriteTrue from "../../assets/heart.png";
import ImgFavorite from "../../assets/Vector.png";

import { ButtonBlack, ButtonNative } from "@components/Button";
import { Input, TextArea, InputCash } from "@components/Inputs";

import { Header } from "@components/Headers";

export function CreateAd() {
  const [selectedButton, setSelectedButton] = useState(false);
  const navigation = useNavigation();
  const [value, setValue] = React.useState("one");
  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <View flex={1}>
      <Header title="Criar anúncio" navigation={navigation} />
      <ScrollView px={1}>
        <Box w="100%" pt={4} px={4} pb={3} justifyContent="center">
          <Text fontSize="16" fontWeight="700" color="gray.2">
            Imagens
          </Text>
          <Text fontSize="14" color="gray.3" mt="5px">
            Escolha até 3 imagens para mostrar o quando o seu produto é
            incrível!
          </Text>
        </Box>
        <Box w="100%" pt={4} px={4} pb={3} justifyContent="center">
          <Text fontSize="16" fontWeight="700" color="gray.2">
            Sobre o produto
          </Text>
          <Box w="100%" pt={4} pb={3} justifyContent="center">
            <Input placeholder="Título do anúncio" keyboardType="text" />
            <TextArea placeholder="Descrição do produto" keyboardType="text" />
          </Box>
        </Box>
        <Box w="100%" px={4} pb={5} justifyContent="center">
          <Text fontSize="15" fontWeight="700" color="gray.2" pb={3}>
            Condição
          </Text>
          <Radio.Group
            name="myRadioGroup"
            flexDirection="row"
            accessibilityLabel="favorite number"
            value={value}
            onChange={(nextValue) => {
              setValue(nextValue);
            }}
          >
            <Stack flexDirection="row">
              <Radio size="md" value="one" colorScheme="blue">
                Produto novo
              </Radio>
              <Radio size="md" value="two" ml={3} colorScheme="blue">
                Produto usado
              </Radio>
            </Stack>
          </Radio.Group>
        </Box>
        <Box w="100%" px={4} pb={3} justifyContent="center">
          <Text fontSize="15" pb={2} fontWeight="700" color="gray.2">
            Venda
          </Text>
          <InputCash placeholder="Valor do produto" keyboardType="text" />
        </Box>
        <Box w="100%" px={4} pb={3} justifyContent="center">
          <Text fontSize="15" pb={2} fontWeight="700" color="gray.2">
            Aceita troca?
          </Text>
          <Switch size="md" onTrackColor="blue.200" />
        </Box>
        <Box w="100%" px={4} pb={3} mt={2} justifyContent="center">
          <Text fontSize="15" fontWeight="700" color="gray.2">
            Meios de pagamento aceitos
          </Text>
          <View>
            <VStack space={4} mt={3}>
              <Checkbox value="one" colorScheme="blue">
                Boleto
              </Checkbox>
              <Checkbox value="two" colorScheme="blue">
                Pix
              </Checkbox>
              <Checkbox value="tree" colorScheme="blue">
                Dinheiro
              </Checkbox>
              <Checkbox value="for" colorScheme="blue">
                Cartão de Crédito
              </Checkbox>
              <Checkbox value="five" colorScheme="blue">
                Depósito Bancário
              </Checkbox>
            </VStack>
          </View>
        </Box>
        <View bg="#ffffff" flexDirection="row" px="10px" pt="25px" pb="45px">
          <ButtonNative variant="outline" mr="2%" w="48%" title="Cancelar" />
          <ButtonBlack ml="2%" w="48%" title="Avançar" />
        </View>
      </ScrollView>
    </View>
  );
}
