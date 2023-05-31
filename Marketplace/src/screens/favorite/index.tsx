import { VStack, Text, Center } from "native-base";

export function Favorite() {
  return (
    <VStack flex={1}>
      <Center flex={1} bg="green.500">
        <Text color="#ffffff" ml={1} textTransform="capitalize">
          Favorito
        </Text>
      </Center>
    </VStack>
  );
}
