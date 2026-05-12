import {ScrollView, Text, View} from "react-native";
import {globalStyles} from "@/styles/global";
import {ScreenWrapper} from "@/components/screenWrapper";

export default function AboutScreen() {
    return (
        <ScreenWrapper title="About">
            <View style={globalStyles.container}></View>
        </ScreenWrapper>
    )
}