import React from 'react';
import {
    arrayOf, oneOfType, node,
} from 'prop-types';
import { SafeAreaView, StyleSheet } from 'react-native';
import { whiteColor } from '../util';

const styles = StyleSheet.create({
    container: {
        backgroundColor: whiteColor,
        height: 40,
        marginHorizontal: -5,
    },
});

const SearchConatiner = (props) => {
    const { children } = props;
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    );
};

SearchConatiner.defaultProps = {
    children: null,
};

SearchConatiner.propTypes = {
    children: oneOfType([
        arrayOf(node),
        node,
    ]),
};

export default SearchConatiner;
