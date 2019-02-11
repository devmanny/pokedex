import React from 'react';
import {
    arrayOf, oneOfType, node,
} from 'prop-types';
import { SafeAreaView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 5,
    },
});

const LayoutVertical = (props) => {
    const { children } = props;
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    );
};

LayoutVertical.defaultProps = {
    children: null,
};

LayoutVertical.propTypes = {
    children: oneOfType([
        arrayOf(node),
        node,
    ]),
};

export default LayoutVertical;
