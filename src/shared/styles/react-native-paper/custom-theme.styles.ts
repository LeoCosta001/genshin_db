import { DefaultTheme } from 'react-native-paper';

// Custom models
declare global {
    namespace ReactNativePaper {
        interface ThemeColors {
            primary50: string;
        }
    }
}

// Custom theme
export const CustomTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#0288D1',
        accent: '#BA68C8',
        primary50: '#0288D180',
    },
};
