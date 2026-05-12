import {globalStyles} from "../../styles/global"
import {ScrollView, View, Text} from "react-native";
import {ScreenHeaderRight} from "../../components/screenHeaderRight";
export default function HomeScreen() {
    return (
        <ScrollView style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.title}>Home</Text>
                <ScreenHeaderRight />
            </View>
            <Text style={globalStyles.title}>It&#39;s okay to talk</Text>
        </ScrollView>
    )
}