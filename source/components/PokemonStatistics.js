import React from 'react';
import { shape } from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import { grayTabColor } from '../util';
import Bars from './Bars';

const styles = StyleSheet.create({
    line: {
        height: 1,
        flex: 1,
        backgroundColor: grayTabColor,
        margin: 10,
    },
    row: {
        marginVertical: 25,
        alignItems: 'center',
        flexDirection: 'row',
    },
    statistics: {
        fontSize: 10,
    },
});

const PokemonStatistics = ({ data }) => (
    <View>
        <View style={styles.row}>
            <View style={styles.line} />
            <Text style={styles.statistics}>STATISTICS</Text>
            <View style={styles.line} />
        </View>
        <Bars data={data} />
    </View>
);

PokemonStatistics.defaultProps = {
    data: null,
};

PokemonStatistics.propTypes = {
    data: shape({}),
};


export default PokemonStatistics;
