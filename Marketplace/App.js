import { Platform } from "react-native";
import { useTheme } from "native-base";

import { Tema } from "./src/theme";

import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SignIn } from "./src/screens/signIn";
import { SignUp } from "./src/screens/signUp";
import { Details } from "./src/screens/details";
import { Profile } from "./src/screens/profile";
import { Favorite } from "./src/screens/favorite";
import { Home } from "./src/screens/home";
import { CreateAd } from "./src/screens/createAd";
import { MyAds } from "./src/screens/myAds";

import {
  FontAwesome5,
  AntDesign,
  MaterialCommunityIcons,
  Octicons,
  Ionicons,
} from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  const { sizes } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#F35D38",
        tabBarInactiveTintColor: "#99999b",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          height: Platform.OS === "android" ? "auto" : 90,
          paddingBottom: sizes[6],
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="myAds"
        component={MyAds}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="pricetags-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SignIn"
        component={SignIn}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="exit-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NativeBaseProvider theme={Tema}>
      <StatusBar animated={true} barStyle={"dark-content"} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
          }}
          initialRouteName="SignIn"
        >
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="CreateAd" component={CreateAd} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
