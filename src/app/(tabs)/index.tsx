import {globalStyles} from "../../styles/global"
import {ScrollView, View, Text} from "react-native";
export default function HomeScreen() {
    return (
        <ScrollView style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.title}>Home</Text>
            </View>
        </ScrollView>
    )
}