import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CharacterSelectPage = (): JSX.Element => {
    return (
        <View>
            <Text style={styles.baseText}>
                <Text style={styles.titleText}>Character Select</Text>
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

export default CharacterSelectPage;
