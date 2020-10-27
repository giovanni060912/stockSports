import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "../../screens/Register";
import Home from "../../screens/Home";
import Details from "../../screens/Details";

const Navigation = () => {
  const defaultOptions = {
    headerShown: false,
    cardStyle: {
      backgroundColor: "#fff",
    },
  };
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator mode="card" initialRouteName="Initial">
        <Stack.Screen
          name="Login"
          options={defaultOptions}
          component={Register}
        />
        <Stack.Screen name="Home" options={defaultOptions} component={Home} />
        <Stack.Screen
          name="Details"
          options={defaultOptions}
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
