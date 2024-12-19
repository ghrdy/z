import { Dialogs } from '@nativescript/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type HomeScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <flexboxLayout style={styles.container}>
            <label className="text-2xl mb-4 font-bold text-center">
                RunSocial
            </label>
            
            <button
                className="btn mb-4"
                onTap={() => navigation.navigate("Map")}
            >
                Trouver des coureurs
            </button>
            
            <button
                className="btn mb-4"
                onTap={() => navigation.navigate("Activities")}
            >
                Mes activités
            </button>
            
            <button
                className="btn mb-4"
                onTap={() => navigation.navigate("Events")}
            >
                Événements
            </button>
            
            <button
                className="btn"
                onTap={() => navigation.navigate("Profile")}
            >
                Mon profil
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        padding: 20,
    },
});