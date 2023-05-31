import { Text, View, Button } from "native-base";
import { TouchableOpacity } from "react-native";
import Avatar from "@assets/Profile.svg";
import Arrow from "@assets/IconBack.svg";

import { ButtonBlackAdd } from "@components/Button";

export function HeaderHome({ name, navigation }) {
  return (
    <View>
      <View
        display="flex"
        w="100%"
        pb="10px"
        pl="10px"
        pt="50px"
        mr="20px"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        borderBottomWidth="1px"
        borderColor="#cecece"
      >
        <Avatar width="70" height="50" fill="none" />
        <View flex={1} justifyContent="center" p="5px">
          <Text fontSize="18px" ml="5px" color="gray.1">
            Boas vindas,
          </Text>
          <Text fontSize="18px" color="gray.1" ml="3px" fontWeight="600">
            {name}
          </Text>
        </View>
        <View flex={1.2} justifyContent="center" pr="15px">
          <ButtonBlackAdd
            w="100%"
            title="Criar anúncio"
            onPress={() => navigation.navigate("CreateAd")}
          />
        </View>
      </View>
    </View>
  );
}

export function Header({ title, navigation }) {
  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <View
      borderBottomWidth="1px"
      borderColor="#cecece"
      flexDirection="row"
      pt="50px"
      pb="10px"
      pl="10px"
      alignItems="center"
    >
      <Button
        bg="transparent"
        ml="5px"
        h="50px"
        w="50px"
        rounded="full"
        _pressed={{
          bg: "#e6e3e3",
        }}
        onPress={handleGoBack}
      >
        <Arrow width="30" height="30" fill="none" />
      </Button>
      <Text
        textAlign="center"
        flex="1"
        mr="67px"
        fontSize="20px"
        color="gray.1"
        ml="3px"
        fontWeight="600"
      >
        {title}
      </Text>
    </View>
  );
}
