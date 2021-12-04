import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const WeaponsSelectPage = (): JSX.Element => {
    return (
        <View>
            <Text style={styles.baseText}>
                <Text style={styles.titleText}>Weapons Select</Text>
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

export default WeaponsSelectPage;
