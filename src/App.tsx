import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

// Routes
import MainRoute from './routes/main.route';
// Styles
import { CustomTheme } from './shared/styles/react-native-paper/custom-theme.styles';
// Components
import { SafeAreaViewComponent } from './shared/components/safe-area-view/safe-area-view.component';

const App = (): JSX.Element => {
    return (
        <PaperProvider theme={CustomTheme}>
            <SafeAreaViewComponent>
                <NavigationContainer>
                    <MainRoute />
                </NavigationContainer>
            </SafeAreaViewComponent>
        </PaperProvider>
    );
};

export default App;
