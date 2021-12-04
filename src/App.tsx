import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Routes
import MainRoute from './routes/main.route';
// Components
import { SafeAreaViewComponent } from './shared/components/safe-area-view/safe-area-view.component';

const App = (): JSX.Element => {
    return (
        <SafeAreaViewComponent>
            <NavigationContainer>
                <MainRoute />
            </NavigationContainer>
        </SafeAreaViewComponent>
    );
};

export default App;
