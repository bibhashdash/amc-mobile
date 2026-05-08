import {globalStyles} from "../../styles/global"
import {ScrollView, View, Text} from "react-native";
export default function FindAGroupScreen() {
    return (
        <ScrollView style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.title}>Find a group</Text>
            </View>
        </ScrollView>
    )
}