import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Stack} from 'expo-router';
import {Oswald_400Regular, Oswald_700Bold, useFonts} from "@expo-google-fonts/oswald";
import {SchibstedGrotesk_700Bold} from "@expo-google-fonts/schibsted-grotesk";

import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

export default function RootLayout() {
    const [loaded, error] = useFonts({
        Oswald_400Regular,
        Oswald_700Bold,
        'BrandFont': SchibstedGrotesk_700Bold
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }
    return (
        <SafeAreaProvider>
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name='(tabs)' />
        </Stack>
        </SafeAreaProvider>
    );
}