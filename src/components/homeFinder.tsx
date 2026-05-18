import {Platform, Text, View} from "react-native";
import {colors, globalStyles} from "@/styles/global";
import {useRef, useState} from "react";
import {LocateIcon} from "lucide-react-native";
import {Picker} from "@react-native-picker/picker";
import {SearchInput} from "@/components/SearchInput";
import {ResultsView} from "@/components/resultsView";
import {SearchResult} from "@/utils/data";

interface Props {
    handleSubmit: (text: string, range: number) => void;
    data: SearchResult[];
}

export const HomeFinder = ({handleSubmit,data}: Props) => {
    const [text, setText] = useState<string>('');
    const [selectedRange, setSelectedRange] = useState<number>(0);
    const pickerRef = useRef<Picker<number>>(null);

    return (
        <View style={{
            marginTop: 16
        }}>
            <View
                style={{marginBottom: 8, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <Text style={{...globalStyles.text, color: colors.primary}}>Find a group</Text>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: 1,           // Move border here
                        borderColor: colors.primary,
                        borderRadius: 8,
                        paddingHorizontal: 0,     // Give it some breathing room// Force a consistent height
                        height: 35,
                        marginRight: 8
                    }}>
                        <Picker
                            ref={pickerRef}
                            mode="dropdown"
                            enabled={true}
                            style={{
                                width: 150,
                                backgroundColor: 'transparent',
                                color: colors.text,
                            }}
                            dropdownIconColor={colors.primary}
                            selectedValue={selectedRange}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedRange(itemValue)
                            }>
                            <Picker.Item label="Range" value={0}
                                         color={Platform.OS === 'android' ? '#000' : colors.text}/>
                            <Picker.Item label="5 miles" value={5}
                                         color={Platform.OS === 'android' ? '#000' : colors.text}/>
                            <Picker.Item label="10 miles" value={10}
                                         color={Platform.OS === 'android' ? '#000' : colors.text}/>
                            <Picker.Item label="25 miles" value={25}
                                         color={Platform.OS === 'android' ? '#000' : colors.text}/>
                            <Picker.Item label="50 miles" value={50}
                                         color={Platform.OS === 'android' ? '#000' : colors.text}/>
                            <Picker.Item label="100 miles" value={100}
                                         color={Platform.OS === 'android' ? '#000' : colors.text}/>
                        </Picker>
                    </View>
                    <LocateIcon color={colors.primary} size={24}/>
                </View>
            </View>
            <SearchInput text={text} setText={setText} onSubmit={text => handleSubmit(text, selectedRange)}/>
            <View style={{marginTop: 16}}>
                <ResultsView data={data} />
            </View>
        </View>
    )
}