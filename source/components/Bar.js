import React from 'react';
import {
    Text, Image, View, StyleSheet, Dimensions,
} from 'react-native';
import { shape } from 'prop-types';

import backgroundRange from '../assets/images/background-bar.png';
import {
    grayTabColor, whiteColor,
} from '../util';

const { width } = Dimensions.get('window');
const barSize = width - 100 - 60; // 200

const styles = StyleSheet.create({
    barContainer: {
        borderRadius: 3,
        position: 'relative',
        backgroundColor: grayTabColor,
        width: barSize,
    },
    bar: {
        borderRadius: 3,
        height: 10,
        width: 40,
    },
    baseStat: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: whiteColor,
        position: 'absolute',
        top: -11,
        width: 40,
        height: 30,
        borderRadius: 4,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: grayTabColor,
    },
    row: {
        marginLeft: 10,
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
    },
    flex: {
        flex: 1,
    },
    statName: {
        width: 100,
    },
});

const Bar = ({ data }) => {
    const baseStat = Math.min(data.base_stat, 200);
    const pixels = baseStat * 200 / barSize;
    return (
        <View style={styles.row}>
            <View style={styles.statName}>
                <Text
                    testID="bar-label-name"
                    numberOfLines={1}
                >
                    {data.stat.name.toUpperCase()}
                </Text>
            </View>
            <View style={styles.flex}>

                <View style={styles.barContainer}>
                    <Image
                        source={backgroundRange}
                        style={[styles.bar, { width: pixels }]}
                    />
                    <View style={[
                        styles.baseStat,
                        { left: pixels },
                    ]}
                    >
                        <Text testID="bar-value">{String(baseStat)}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

Bar.defaultProps = {
    data: {},
};

Bar.propTypes = {
    data: shape({}),
};

export default Bar;
