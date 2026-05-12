import { Stack } from 'expo-router';
import {useFonts, FamiljenGrotesk_400Regular, FamiljenGrotesk_700Bold} from "@expo-google-fonts/familjen-grotesk";
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

export default function RootLayout() {
    const [loaded, error] = useFonts({
        FamiljenGrotesk_400Regular,
        FamiljenGrotesk_700Bold,
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
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name='(tabs)' />
        </Stack>
    );
}