import {ScrollView, Text, View} from "react-native";
import {globalStyles} from "@/styles/global";
import {ScreenWrapper} from "@/components/screenWrapper";

export default function HelpScreen() {
    return (
        <ScreenWrapper title="Help">
            <View style={globalStyles.container}></View>
        </ScreenWrapper>
    )
}