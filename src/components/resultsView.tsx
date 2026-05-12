import {useState} from 'react'
import {View, Text, Pressable} from "react-native";
import {globalStyles, colors} from "@/styles/global";

export const ResultsView = () => {
    const [active, setActive] = useState<number>(0);
    const getTabActiveClass = (id: number) => {
        return active === id
            ? globalStyles.activeFinderTab
            : {
                color: colors.text,
                borderBottomColor: colors.background,
                borderBottomWidth: 0,
            }
    }
    return (
        <View>
            {/* Tabbed Navigation*/}
            <View style={{
                flexDirection: "row",
                justifyContent: "space-evenly"
            }}>
                <View>
                    <Pressable onPress={() => setActive(0)}>
                        <Text style={{
                            ...globalStyles.text,
                            textAlign: "center",
                            fontSize: 16,
                            ...getTabActiveClass(0)
                        }}>
                            Map View
                        </Text>
                    </Pressable>
                </View>
                <View>
                    <Pressable onPress={() => setActive(1)}>
                        <Text style={{
                            ...globalStyles.text,
                            textAlign: "center",
                            fontSize: 16,
                            ...getTabActiveClass(1)
                        }}>
                            List View
                        </Text>
                    </Pressable>
                </View>
            </View>

            {/* Tab Panes */}
            <View>

            </View>
        </View>
    )
}