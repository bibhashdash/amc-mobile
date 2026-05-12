import {FlatList} from "react-native";
import {SearchResult} from "@/utils/data";
import {SearchResultListItem} from "@/components/searchResultListItem";

interface ListViewProps {
    data: SearchResult[];
}
export const ListView = ({data}: ListViewProps) => {
    return (
        <FlatList keyExtractor={(item) => item.id} nestedScrollEnabled={true} data={data} renderItem={({item}) =>
            <SearchResultListItem searchResult={item} />
        } />
    )
}