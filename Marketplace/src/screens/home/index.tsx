import { VStack, Text, View, Image, Button, FlatList } from "native-base";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import * as Box from "./styled";

import { HeaderHome } from "@components/Headers";
import { InputFilter } from "@components/InputFilter";
import { MyAdverts } from "@components/MyAdverts";
import { Cards } from "@components/Cards";

import { DATA } from "./data";

export function Home({ navigation }) {
  return (
    <Box.Container>
      <HeaderHome name="Maria!" navigation={navigation} />
      <Box.ContainerScroll>
        <Box.TextSm>Seus produtos anunciados para venda </Box.TextSm>

        <MyAdverts numberAdverts="4" navigation={navigation} />
        <Box.TextSm>Compre produtos variados </Box.TextSm>
        <InputFilter mt="15px" />

        <FlatList
          display="flex"
          flex="1"
          numColumns={2}
          data={DATA}
          renderItem={({ item }) => (
            <Cards
              title={item.title}
              value={item.value}
              image={item.image}
              state={item.state}
              avatar={item.avatar}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{
            pb: 2,
            mt: 3,
          }}
        />
      </Box.ContainerScroll>
    </Box.Container>
  );
}
