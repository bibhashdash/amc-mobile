import {useState} from 'react'
import {View, Text, Pressable} from "react-native";
import {globalStyles, colors} from "@/styles/global";
import {ListView} from "@/components/listView";
import {MapView} from "@/components/mapView";
import {SearchResult} from "@/utils/data";

interface Props {
    data: SearchResult[];
}

export const ResultsView = ({data}: Props) => {
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
                            List View
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
                            Map View
                        </Text>
                    </Pressable>
                </View>
            </View>

            {/* Tab Panes */}
            <View style={{
                borderColor: colors.textSecondary,
                borderRadius: 8,
                borderWidth: 1,
                height: 300,
                marginTop: 8
            }}>
                {
                    active === 0
                    ? <ListView data={data} />
                        : <MapView />
                }
            </View>
        </View>
    )
}