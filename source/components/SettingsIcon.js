import React from 'react';
import { Image, StyleSheet } from 'react-native';

import iconSource from '../assets/images/icons8-gear_pok.png';

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        width: 28,
        height: 28,
        alignSelf: 'center',
    },
});

const SettingsIcon = () => (
    <Image
        style={styles.image}
        source={iconSource}
    />
);

export default SettingsIcon;
