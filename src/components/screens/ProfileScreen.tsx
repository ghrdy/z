import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type ProfileScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Profile">,
};

export function ProfileScreen({ navigation }: ProfileScreenProps) {
    return (
        <flexboxLayout style={styles.container}>
            <image
                src="res://profile_placeholder"
                className="h-24 w-24 rounded-full mb-4"
            />
            
            <label className="text-xl font-bold mb-4">
                John Doe
            </label>
            
            <stackLayout className="w-full bg-white p-4 rounded mb-4">
                <label className="text-lg mb-2">Statistiques</label>
                <label>Distance totale: 42.5 km</label>
                <label>Temps total: 3h45</label>
                <label>Sessions: 8</label>
            </stackLayout>
            
            <button
                className="btn"
                onTap={() => navigation.goBack()}
            >
                Retour
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
    },
});