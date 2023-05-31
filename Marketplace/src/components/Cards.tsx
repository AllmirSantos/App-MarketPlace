import {
  Text,
  View,
  Image,
  Pressable,
  Box,
  AspectRatio,
  Center,
  Heading,
  Stack,
  HStack,
} from "native-base";
import Pin from "../assets/pin-icon.png";
import { TouchableOpacity } from "react-native";
import { Details } from "../screens/details";

export function Cards({ title, image, value, navigation, avatar, state }) {
  return (
    <Pressable
      flex="1"
      mb="15px"
      px="2"
      maxWidth="50%"
      onPress={() => navigation.navigate("Details")}
    >
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        bg="#ffffff"
      >
        <Box>
          <AspectRatio w="100%" h="100px" ratio={15 / 9}>
            <Image source={{ uri: image }} alt="image" />
          </AspectRatio>
          <Center
            bg={state === "used" ? "gray.2" : "blue.200"}
            _text={{
              color: "warmGray.50",
              fontWeight: "700",
              fontSize: "10px",
            }}
            position="absolute"
            top="1"
            right="1"
            px="2"
            py="1"
            rounded="10"
          >
            {state === "used" ? "USADO" : "NOVO"}
          </Center>
          <Image
            source={{ uri: avatar }}
            alt="image"
            bg="violet.500"
            position="absolute"
            left="1"
            top="1"
            w="35px"
            h="35px"
            rounded="30"
            borderWidth="1.5px"
            borderColor="#ffffff"
          />
        </Box>
        <Stack p="2">
          <Stack>
            <Text fontSize="14px" ml="-1" isTruncated w="100%">
              {title}
            </Text>
          </Stack>
          <HStack alignItems="flex-end">
            <Text fontWeight="700" fontSize="15px" pr="3px" pb="1px">
              R$
            </Text>
            <Text fontWeight="700" fontSize="18px">
              {value}
            </Text>
          </HStack>
        </Stack>
      </Box>
    </Pressable>
  );
}
