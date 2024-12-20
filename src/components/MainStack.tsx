import { BaseNavigationContainer } from "@react-navigation/core";
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./screens/HomeScreen";
import { MapScreen } from "./screens/MapScreen";
import { ActivitiesScreen } from "./screens/ActivitiesScreen";
import { EventsScreen } from "./screens/EventsScreen";
import { ProfileScreen } from "./screens/ProfileScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
  <BaseNavigationContainer>
    <StackNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#65adf1",
        },
        headerTintColor: "white",
        headerShown: true,
      }}
    >
      <StackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Unify" }}
      />
      <StackNavigator.Screen
        name="Map"
        component={MapScreen}
        options={{ title: "Carte" }}
      />
      <StackNavigator.Screen
        name="Activities"
        component={ActivitiesScreen}
        options={{ title: "Mes Activités" }}
      />
      <StackNavigator.Screen
        name="Events"
        component={EventsScreen}
        options={{ title: "Événements" }}
      />
      <StackNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Mon Profil" }}
      />
    </StackNavigator.Navigator>
  </BaseNavigationContainer>
);
