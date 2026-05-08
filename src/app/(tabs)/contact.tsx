import {globalStyles} from "../../styles/global"
import {ScrollView, View, Text} from "react-native";
export default function ContactScreen() {
    return (
        <ScrollView style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.title}>Contact</Text>
            </View>
        </ScrollView>
    )
}