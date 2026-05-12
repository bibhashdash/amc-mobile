import { StyleSheet } from 'react-native';

export const colors = {
    background: '#000000',
    header: '#242444',
    surface: '#2a2a4a',
    primary: '#F1C232',
    text: '#ffffff',
    textSecondary: '#a0a0b0',
    alert: '#ff5252',
};

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        color: colors.text,
        fontFamily: 'FamiljenGrotesk_700Bold'
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.textSecondary,
        marginTop: 30,
        marginBottom: 16,
    },
    empty: {
        color: colors.textSecondary,
        fontSize: 14,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});