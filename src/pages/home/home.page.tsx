import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HomePage = (): JSX.Element => {
    return (
        <View>
            <Text style={styles.baseText}>
                <Text style={styles.titleText}>Genshin DB</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default HomePage;
