import {View, TextInput, Text} from "react-native";
import {colors, globalStyles} from "@/styles/global";
import {useState} from "react";
import {LocateIcon} from "lucide-react-native";
import {ResultsView} from "@/components/resultsView";

export const HomeFinder = ({}) => {
    const [text, setText] = useState<string>('');
    return (
        <View style={{
            marginTop: 16
        }}>
            <View style={{marginBottom: 8, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <Text style={{...globalStyles.text, color: colors.primary}}>Find a group</Text>
                <LocateIcon color={colors.primary} size={24} />
            </View>
            <TextInput
                style={globalStyles.input}
                onChangeText={setText}
                value={text}
            />
            <View style={{marginTop: 16}}>
                <ResultsView />
            </View>
        </View>
    )
}