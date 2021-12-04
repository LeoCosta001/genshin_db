import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

enum STATUS_BAR_STYLE {
    LIGHT = 'light-content',
    DARK = 'dark-content',
}

const style = {
    safeArea1: { flex: 0, backgroundColor: '#121212' },
    safeArea2: { flex: 1, backgroundColor: '#121212' },
};

export const SafeAreaViewComponent = (props: React.PropsWithChildren<{}>): JSX.Element => {
    return (
        <>
            <SafeAreaView style={style.safeArea1} />
            <SafeAreaView style={style.safeArea2}>
                <StatusBar barStyle={STATUS_BAR_STYLE.DARK} />
                {props.children}
            </SafeAreaView>
        </>
    );
};
