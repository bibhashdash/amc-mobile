import {FlatList, Text} from "react-native";
import {SearchResult} from "@/utils/data";
import {colors} from "@/styles/global";

interface ListViewProps {
    data: SearchResult[];
}
export const ListView = ({data}: ListViewProps) => {
    return (
        <FlatList data={data} renderItem={({item}) => <Text style={{
            color: colors.primary,
            fontSize: 18
        }}>{item.address}</Text>} />
    )
}