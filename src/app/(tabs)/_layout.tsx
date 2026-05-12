import {colors} from "../../styles/global"
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import {ScreenHeaderRight} from "@/components/screenHeaderRight";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.background,
                    borderTopColor: colors.surface,
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textSecondary,
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='home' size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name='find-a-group'
                options={{
                    title: 'Find a group',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='location' size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name='get-involved'
                options={{
                    title: 'Get Involved',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='hand-left' size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name='contact'
                options={{
                    title: 'Contact',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='at-circle' size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    href: null,
                }}
            />
            <Tabs.Screen
                name="shop"
                options={{
                    href: null,
                }}
            />
            <Tabs.Screen
                name="help"
                options={{
                    href: null,
                }}
            />
        </Tabs>
    );
}
