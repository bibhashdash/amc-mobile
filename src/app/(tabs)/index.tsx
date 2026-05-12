import {globalStyles} from "../../styles/global"
import {Text, View} from "react-native";
import {HomeFinder} from "@/components/homeFinder";
import {ScreenWrapper} from "@/components/screenWrapper";

export default function HomeScreen() {
    return (
        <ScreenWrapper title="Home">
            <View style={globalStyles.container}>
                <Text style={{
                    fontSize: 48,
                    color: '#ffffff',
                    fontFamily: 'BrandFont'
                }}>It&#39;s okay to talk</Text>
                <View>
                    <Text style={globalStyles.text}>
                        ANDYSMANCLUB are a men’s suicide prevention charity, offering free to attend peer-to-peer support
                        groups across the United Kingdom and online. We want to end the stigma surrounding men’s mental
                        health and help men through the power of conversation.
                    </Text>
                </View>
                <HomeFinder/>
            </View>
        </ScreenWrapper>
    )
}