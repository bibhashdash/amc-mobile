import {FlatList, View, Text, StatusBar} from 'react-native';
import {globalStyles} from '../styles/global';
import {ScreenHeaderRight} from './screenHeaderRight';
import {ReactNode} from "react";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export const ScreenWrapper = ({children, title}: { children: ReactNode, title: string }) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView  edges={['top']} style={{
                flex: 1,
                paddingTop: StatusBar.currentHeight,
            }}>
                <FlatList
                    data={[]} // Keep empty to use it as a ScrollView replacement
                    renderItem={null}
                    style={globalStyles.container}
                    ListHeaderComponent={() => (
                        <View>
                            <View style={globalStyles.header}>
                                <Text style={globalStyles.title}>{title}</Text>
                                <ScreenHeaderRight/>
                            </View>
                            {children}
                        </View>
                    )}
                    contentContainerStyle={{paddingBottom: 40}}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    );
};