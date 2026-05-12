import {View, Text} from "react-native";
import {SearchResult} from "@/utils/data";
import {globalStyles, colors} from "@/styles/global";

interface SearchResultListItemProps {
    searchResult: SearchResult;
}

export const SearchResultListItem = ({searchResult}: SearchResultListItemProps) => {
    return (
        <View>
            <View>
                <Text style={{
                    fontSize: 28,
                    textTransform: "uppercase",
                    color: colors.primary,
                    fontFamily: "Oswald_700Bold"
                }}>
                    {searchResult.store}
                </Text>
            </View>
            <View>
                <Text style={{...globalStyles.text}}>{searchResult.address}</Text>
                <Text style={{...globalStyles.text}}>{searchResult.address2}</Text>
                <Text style={{...globalStyles.text}}>{searchResult.city}, {searchResult.zip}</Text>
                <Text style={{...globalStyles.text}}>{searchResult.country}</Text>
            </View>
            <View style={{marginTop: 12, flexDirection: "row"}}>
                <Text style={{...globalStyles.text}}>What3Words: </Text>
                <Text style={{...globalStyles.text, color: colors.primary}}>{searchResult.what3words}</Text>
            </View>
        </View>
    )
}