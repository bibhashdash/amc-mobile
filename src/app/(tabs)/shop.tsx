import {ScrollView, Text, View} from "react-native";
import {globalStyles} from "@/styles/global";
import {ScreenWrapper} from "@/components/screenWrapper";

export default function ShopScreen() {
    return (
        <ScreenWrapper title="Shop">
            <View style={globalStyles.container}></View>
        </ScreenWrapper>
    )
}