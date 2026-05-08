import {View} from "react-native";
import {colors} from "../styles/global";
import {Info, MessageCircleQuestionMark, Shirt} from "lucide-react-native";
import {Link} from 'expo-router';

export const ScreenHeaderRight = () => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 18
        }}>
            <Link href="/(tabs)/about"><Info color={colors.text} /></Link>
            <Link href="/shop"><Shirt color={colors.text} /></Link>
            <Link href="/help"><MessageCircleQuestionMark color={colors.text} /></Link>
        </View>
    )
}