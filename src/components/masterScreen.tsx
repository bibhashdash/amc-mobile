import {FlatList, View, Text, StatusBar} from 'react-native';
import {globalStyles} from '@/styles/global';
import {ScreenHeaderRight} from './screenHeaderRight';
import {ReactNode} from "react";
import {SafeAreaView} from 'react-native-safe-area-context';

interface MasterScreenProps {
    title: string;
    headerContent?: ReactNode; // Things like the Hero text and Search Bar
    footerContent?: ReactNode; // Things like the Mission Statement
    data?: any[];              // Your array of 50+ search results
    renderItem?: any;          // How to draw each result card
}

export const MasterScreen = ({
                                 title,
                                 headerContent,
                                 footerContent,
                                 data = [],
                                 renderItem
                             }: MasterScreenProps) => {
    return (
        <SafeAreaView edges={['top']} style={{flex: 1, backgroundColor: '#000'}}>
            <StatusBar barStyle="light-content"/>
            <FlatList
                data={data}
                renderItem={renderItem}
                style={globalStyles.container}
                // Performance: Only render what's on screen
                removeClippedSubviews={true}
                initialNumToRender={10}
                maxToRenderPerBatch={10}

                ListHeaderComponent={() => (
                    <View>
                        <View style={globalStyles.header}>
                            <Text style={globalStyles.title}>{title}</Text>
                            <ScreenHeaderRight/>
                        </View>
                        {headerContent}
                    </View>
                )}

                ListFooterComponent={() => (
                    <View style={{paddingBottom: 60}}>
                        {footerContent}
                    </View>
                )}

                // This ensures the list takes up the full screen height
                contentContainerStyle={data.length === 0 ? {flexGrow: 1} : {}}
            />
        </SafeAreaView>
    );
};