import {globalStyles} from "../../styles/global"
import {ScrollView, View, Text} from "react-native";
export default function GetInvolvedScreen() {
    return (
        <ScrollView style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.title}>Get Involved</Text>
            </View>
        </ScrollView>
    )
}