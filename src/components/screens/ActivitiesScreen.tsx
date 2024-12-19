import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type ActivitiesScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Activities">,
};

export function ActivitiesScreen({ navigation }: ActivitiesScreenProps) {
    return (
        <flexboxLayout style={styles.container}>
            <label className="text-xl mb-4 text-center">
                Mes Activités
            </label>
            
            <scrollView>
                <stackLayout>
                    <label className="text-lg p-4 bg-white mb-2 rounded">
                        Course du 20 Mars 2024
                        {"\n"}Distance: 5.2 km
                        {"\n"}Durée: 28 min
                    </label>
                    
                    <label className="text-lg p-4 bg-white mb-2 rounded">
                        Course du 18 Mars 2024
                        {"\n"}Distance: 3.8 km
                        {"\n"}Durée: 22 min
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