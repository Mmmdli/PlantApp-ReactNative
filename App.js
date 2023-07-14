import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./view/screens/HomeScreen";
import DetailsScreen from "./view/screens/DetailsScreen";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import COLORS from "./consts/colors";
import { Ionicons } from '@expo/vector-icons';
const Stack = createStackNavigator();
const App = () => {
  return(
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white}/>
      <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Details" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;