import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// Pages
import HomePage from '../pages/home/home.page';
import CharacterSelectPage from '../pages/characters/character-select/character-select.page';
import WeaponsSelectPage from '../pages/weapons/weapons-select/weapons-select.page';
import ArtifactsSelectPage from '../pages/artifacts/artifacts-select/artifacts-select.page';
import MaterialsSelectPage from '../pages/materials/materials-select/materials-select.page';

// Tabs
const Tab = createBottomTabNavigator();

const MainRoute = (): JSX.Element => {
    return (
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={{
                tabBarActiveTintColor: '#FFF',
                tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.3)',
                tabBarActiveBackgroundColor: '#121212',
                tabBarInactiveBackgroundColor: '#121212',
                tabBarStyle: {
                    borderTopColor: 'transparent',
                    paddingBottom: 5,
                    paddingTop: 5,
                    backgroundColor: '#121212',
                },
            }}>
            <Tab.Screen
                name="characters"
                component={CharacterSelectPage}
                options={{
                    tabBarLabel: 'Characters',
                    tabBarIcon: iconProps => <MIcon name="people" size={iconProps.size} color={iconProps.color} />,
                }}
            />
            <Tab.Screen
                name="weapons"
                component={WeaponsSelectPage}
                options={{
                    tabBarLabel: 'Weapons',
                    tabBarIcon: iconProps => <McIcon name="sword-cross" size={iconProps.size} color={iconProps.color} />,
                }}
            />
            <Tab.Screen
                name="home"
                component={HomePage}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: iconProps => <MIcon name="home" size={iconProps.size} color={iconProps.color} />,
                }}
            />
            <Tab.Screen
                name="artifacts"
                component={ArtifactsSelectPage}
                options={{
                    tabBarLabel: 'Artifacts',
                    tabBarIcon: iconProps => <McIcon name="movie-roll" size={iconProps.size} color={iconProps.color} />,
                }}
            />
            <Tab.Screen
                name="materials"
                component={MaterialsSelectPage}
                options={{
                    tabBarLabel: 'Materials',
                    tabBarIcon: iconProps => <McIcon name="cube-outline" size={iconProps.size} color={iconProps.color} />,
                }}
            />
        </Tab.Navigator>
    );
};

export default MainRoute;
