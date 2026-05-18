import {useState} from "react";
import {globalStyles} from "@/styles/global"
import {Text, View} from "react-native";
import {HomeFinder} from "@/components/homeFinder";
import {MasterScreen} from "@/components/masterScreen";
import {SearchResultListItem} from "@/components/searchResultListItem";
import {getData} from "@/utils/api";
import {SearchResult} from "@/utils/data";
export default function HomeScreen() {
    const [data, setData] = useState<SearchResult[]>([]);

    const handleSubmit = (text: string, range: number) => {
        setData(getData(String(range)))
    }
    return (
        <MasterScreen
            title="Home"
            headerContent={
                <View style={globalStyles.container}>
                    <Text style={{
                        fontSize: 48,
                        color: '#ffffff',
                        fontFamily: 'BrandFont'
                    }}>It&#39;s okay to talk</Text>
                    {/*<View>*/}
                    {/*    <Text style={globalStyles.text}>*/}
                    {/*        ANDYSMANCLUB are a men’s suicide prevention charity, offering free to attend peer-to-peer*/}
                    {/*        support*/}
                    {/*        groups across the United Kingdom and online. We want to end the stigma surrounding men’s*/}
                    {/*        mental*/}
                    {/*        health and help men through the power of conversation.*/}
                    {/*    </Text>*/}
                    {/*</View>*/}
                    <HomeFinder data={data} handleSubmit={ (text, range) => handleSubmit(text, range)}/>
                </View>
            }
            renderItem={({item}: {item: SearchResult}) => <SearchResultListItem searchResult={item} />}
            data={data}
        />
    )
}