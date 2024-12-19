import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type EventsScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Events">,
};

export function EventsScreen({ navigation }: EventsScreenProps) {
    return (
        <flexboxLayout style={styles.container}>
            <label className="text-xl mb-4 text-center">
                Événements
            </label>
            
            <scrollView>
                <stackLayout>
                    <label className="text-lg p-4 bg-white mb-2 rounded">
                        Course matinale en groupe
                        {"\n"}Date: 25 Mars 2024 - 7h00
                        {"\n"}Lieu: Parc central
                    </label>
                    
                    <label className="text-lg p-4 bg-white mb-2 rounded">
                        Marathon des débutants
                        {"\n"}Date: 1 Avril 2024 - 9h00
                        {"\n"}Lieu: Centre-ville
                    </label>
                </stackLayout>
            </scrollView>
            
            <button
                className="btn mt-4"
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
        padding: 20,
    },
});