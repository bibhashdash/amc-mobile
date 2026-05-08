import {ScrollView, Text, View} from "react-native";
import {globalStyles} from "@/styles/global";

export default function AboutScreen() {
    return (
        <ScrollView style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.title}>About</Text>
            </View>
        </ScrollView>
    )
}