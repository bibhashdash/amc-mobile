import {colors, globalStyles} from "@/styles/global";
import {Pressable, TextInput, View} from "react-native";
import {SearchIcon} from "lucide-react-native";

interface SearchInputProps {
    text: string;
    setText: (text: string) => void;
    onSubmit: (text: string) => void;
}

export const SearchInput = ({text, setText, onSubmit}: SearchInputProps) => {
    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center"
        }}>
            <TextInput
                style={{
                    paddingVertical: 18,
                    borderWidth: 1,
                    padding: 10,
                    borderColor: colors.textSecondary,
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                    color: colors.text, flex: 5}}
                onChangeText={setText}
                value={text}
            />
            <Pressable onPress={() => onSubmit(text)}>
                <View
                    style={
                    {
                        flex: 1,
                        alignItems: "center",
                        flexDirection: "row",
                        borderWidth: 1,
                        padding: 10,
                        borderColor: colors.textSecondary,
                        borderTopRightRadius: 8,
                        borderBottomRightRadius: 8,
                        backgroundColor: colors.background
                    }
                }
                >
                    <SearchIcon color={colors.primary} size={24} />
                </View>
            </Pressable>
        </View>
    )
}