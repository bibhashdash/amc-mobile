import {ScrollView, Text, View} from "react-native";
import {globalStyles} from "@/styles/global";

export default function HelpScreen() {
    return (
        <ScrollView style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.title}>Help</Text>
            </View>
        </ScrollView>
    )
}