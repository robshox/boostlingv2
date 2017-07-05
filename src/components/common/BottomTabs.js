import React from 'react';
import { View, Text } from 'react-native';

const BottomTabs = (props) => {
        return (
                <View style={[styles.containerStyle, props.style]}>
                        {props.children}
                        <Text>BottomTabs</Text>
                </View>
        );
};

const styles = {
        containerStyle: {
                borderBottomWidth: 1,
                padding: 5,
                backgroundColor: '#fff',
                justifyContent: 'flex-start',
                flexDirection: 'row',
                borderColor: '#ddd',
                position: 'relative',
                flex: 1
        }
};

export { BottomTabs };
