import React, { useState } from "react";

import {
  Input as NativeBaseInput,
  FormControl,
  Icon,
  Pressable,
  View,
  Modal,
  Button,
  useDisclose,
  Actionsheet,
  Box,
  Text,
  Switch,
  Checkbox,
  VStack,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import { ButtonBlack, ButtonNative } from "@components/Button";

import IconFilter from "@assets/Filter.svg";
import IconSearch from "@assets/Search.svg";

export function InputFilter({ ...rest }) {
  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);
  const openModal = (placement) => {
    setOpen(true);
    setPlacement(placement);
  };

  const [selectedButton, setSelectedButton] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <View>
      <FormControl mb={4}>
        <NativeBaseInput
          bg="#ffffff"
          h="45px"
          px={2.5}
          borderWidth={0}
          fontSize="md"
          color="gray.2"
          fontFamily="body"
          placeholderTextColor="gray.4"
          _focus={{
            bgColor: "#ffffff",
            borderWidth: 2,
            borderColor: "blue.100",
          }}
          {...rest}
          InputRightElement={
            <View flexDirection="row">
              <View pl="0px" pr="12px">
                <IconSearch width="21" height="21" fill="none" />
              </View>

              <Pressable
                borderLeftWidth="1px "
                borderColor="#9F9BA1"
                pl="12px"
                pr="12px"
                h="100%"
                onPress={onOpen}
              >
                <IconFilter width="21" height="21" fill="none" />
              </Pressable>
            </View>
          }
        />
      </FormControl>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} pb={3} justifyContent="center">
            <Text fontSize="20" fontWeight="700" color="gray.1">
              Filtrar anúncios
            </Text>
          </Box>
          <Box w="100%" px={4} pb={5} justifyContent="center">
            <Text fontSize="15" fontWeight="700" color="gray.2" pb={3}>
              Condição
            </Text>
            <View flexDirection="row">
              <Button
                onPress={() => setSelectedButton(false)}
                w="80px"
                rounded="80px"
                mr="15px"
                bg={selectedButton === false ? "blue.200" : "gray.5"}
                _pressed={{ bg: "gray.300", color: "#ffffff" }}
                _text={{
                  fontWeight: "600",
                  fontSize: "14px",
                  color: selectedButton === false ? "#ffffff" : "gray.3",
                }}
              >
                NOVO
              </Button>
              <Button
                onPress={() => setSelectedButton(true)}
                w="80px"
                rounded="80px"
                _pressed={{ bg: "gray.300", color: "#ffffff" }}
                bg={selectedButton === true ? "blue.200" : "gray.5"}
                _text={{
                  fontWeight: "600",
                  fontSize: "14px",
                  color: selectedButton === true ? "#ffffff" : "gray.3",
                }}
              >
                USADO
              </Button>
            </View>
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
          <View flexDirection="row" px="10px" pt="25px" pb="15px">
            <ButtonNative
              variant="outline"
              mr="2%"
              w="48%"
              title="Resetar filtros"
            />
            <ButtonBlack ml="2%" w="48%" title="Aplicar filtros" />
          </View>
        </Actionsheet.Content>
      </Actionsheet>
    </View>
  );
}
