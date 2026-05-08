import {ScrollView, Text, View} from "react-native";
import {globalStyles} from "@/styles/global";

export default function ShopScreen() {
    return (
        <ScrollView style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.title}>Shop</Text>
            </View>
        </ScrollView>
    )
}