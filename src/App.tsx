import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types/navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import ActivitiesScreen from "./screens/ActivitiesScreen";
import ActivityDetailScreen from "./screens/ActivityDetailScreen";
import EventsScreen from "./screens/EventsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ContactsScreen from "./screens/ContactsScreen";
import MessagesScreen from "./screens/MessagesScreen";
import ChatScreen from "./screens/ChatScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#65adf1",
            },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "RunSocial" }}
          />
          <Stack.Screen
            name="Map"
            component={MapScreen}
            options={{ title: "Carte" }}
          />
          <Stack.Screen
            name="Activities"
            component={ActivitiesScreen}
            options={{ title: "Mes Activités" }}
          />
          <Stack.Screen
            name="ActivityDetail"
            component={ActivityDetailScreen}
            options={{ title: "Détails de l'activité" }}
          />
          <Stack.Screen
            name="Events"
            component={EventsScreen}
            options={{ title: "Événements" }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ title: "Mon Profil" }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ title: "Paramètres" }}
          />
          <Stack.Screen
            name="Contacts"
            component={ContactsScreen}
            options={{ title: "Contacts" }}
          />
          <Stack.Screen
            name="Messages"
            component={MessagesScreen}
            options={{ title: "Messages" }}
          />
          <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={({ route }) => ({
              title: route.params.contactName,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
