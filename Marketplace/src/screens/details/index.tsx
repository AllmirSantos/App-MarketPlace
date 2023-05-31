import { VStack, Text, View, Image, Button } from "native-base";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import * as Box from "./styled";
import Arrow from "../../assets/arrow.png";
import DetailsImg from "../../assets/kayak-big.png";
import Pin from "../../assets/pin-icon.png";
import ImgFavoriteTrue from "../../assets/heart.png";
import ImgFavorite from "../../assets/Vector.png";

export function Details() {
  const [selectedButton, setSelectedButton] = useState(0);
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <VStack flex={1}>
      <Box.ImageDetails>
        <Box.Header>
          <Button
            bg="transparent"
            ml="5px"
            h="50px"
            w="50px"
            rounded="full"
            onPress={handleGoBack}
          >
            <Image w="20px" source={Arrow} alt="back" />
          </Button>
        </Box.Header>
        <Image
          w="full"
          h="full"
          position="absolute"
          flex={1}
          source={DetailsImg}
          alt="Nome do exercício"
        />
        <View flex={1} justifyContent="flex-end" p="5px" pb="65px">
          <Text fontSize="32px" ml="5px" mb="2px" color="#ffffff">
            Hiking the Grand Canyon
          </Text>
          <View flexDirection="row" mb="3px">
            <Image w="20px" h="20px" ml="3px" source={Pin} alt="location" />
            <Text fontSize="16px" color="#ffffff" ml="3px" mt="0px">
              USA
            </Text>
          </View>
        </View>
      </Box.ImageDetails>
      <Box.TextDetails>
        <Box.BtnFavorite>
          {selectedButton === 0 && (
            <Button
              w="65px"
              h="65px"
              rounded="full"
              key={1}
              bg="#ffffff"
              onPress={() => setSelectedButton(1)}
            >
              <Image
                w="27px"
                h="23px"
                ml="3px"
                source={ImgFavoriteTrue}
                alt="location"
              />
            </Button>
          )}
          {selectedButton === 1 && (
            <Button
              w="65px"
              h="65px"
              rounded="full"
              key={0}
              bg="#ffffff"
              onPress={() => setSelectedButton(0)}
            >
              <Image
                w="27px"
                h="23px"
                ml="3px"
                source={ImgFavorite}
                alt="location"
              />
            </Button>
          )}
        </Box.BtnFavorite>
        <Text fontSize="32px">Detalhes</Text>
        <Text color="#C4C4C4" pt="10px" fontSize="16px">
          Great day hikes and backpacking routes on the North and South Rim of
          this century-old national park include easy hikes overlooking the rim
          and more rugged trekking options that descend into the canyon.
        </Text>
        <Box.InfoBottom>
          <View>
            <Text>PRICE</Text>
            <View display="flex" flexDirection="row" alignItems="flex-end">
              <Text fontSize="24px" color="#F35D38">
                $350
              </Text>
              <Text pb="5px">/person</Text>
            </View>
          </View>
          <View>
            <Text>RATING</Text>
            <View display="flex" flexDirection="row" alignItems="flex-end">
              <Text fontSize="24px" color="#F35D38">
                4.5
              </Text>
              <Text pb="5px">/5</Text>
            </View>
          </View>
          <View>
            <Text>DURATION</Text>
            <View display="flex" flexDirection="row" alignItems="flex-end">
              <Text fontSize="24px" color="#F35D38">
                3
              </Text>
              <Text pb="5px">hours</Text>
            </View>
          </View>
        </Box.InfoBottom>
        <Button bg="#F35D38" rounded="10px" mt="25px" mb="30px" height="53px">
          <Text color="#ffffff" fontSize="19px">
            Book Now
          </Text>
        </Button>
      </Box.TextDetails>
    </VStack>
  );
}
