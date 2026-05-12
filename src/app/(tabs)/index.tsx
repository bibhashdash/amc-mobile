import {globalStyles} from "../../styles/global"
import {ScrollView, Text, View} from "react-native";
import {ScreenHeaderRight} from "../../components/screenHeaderRight";
import {HomeFinder} from "@/components/homeFinder";

export default function HomeScreen() {
    return (
        <ScrollView style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.title}>Home</Text>
                <ScreenHeaderRight />
            </View>
            <Text style={{
                fontSize: 48,
                color: '#ffffff',
                fontFamily: 'BrandFont'
            }}>It&#39;s okay to talk</Text>
            <HomeFinder />
        </ScrollView>
    )
}