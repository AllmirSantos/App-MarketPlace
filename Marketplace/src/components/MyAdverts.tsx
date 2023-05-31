import { Text, View } from "native-base";

import IconAdverts from "@assets/IconAdverts.svg";
import Arrow from "@assets/Arrow.svg";
import { TouchableOpacity } from "react-native";

export function MyAdverts({ numberAdverts, navigation }) {
  return (
    <View
      bg="#647ac71a"
      rounded="6px"
      pt="12px"
      pb="12px"
      mt="16px"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="row"
    >
      <View flexDirection="row" alignItems="center" pl={4}>
        <IconAdverts width="23" height="23" fill="none" />
        <View pl={4}>
          <Text fontSize="20px" fontWeight="700" color="gray.2">
            {numberAdverts}
          </Text>
          <Text fontSize="14px" color="gray.2">
            anúncios ativos
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <View flexDirection="row" pr={4}>
          <Text pr={2} fontSize="14px" fontWeight="600" color="blue.200">
            Meus anúncios
          </Text>
          <Arrow width="20" height="20" fill="none" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
