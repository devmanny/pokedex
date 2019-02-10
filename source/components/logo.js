import React from 'react';
import { Image, StyleSheet } from 'react-native';

import logoSource from '../assets/images/logo-pokemon.png';

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        width: 95, // 189*70
        height: 35,
        marginHorizontal: 10,
        alignSelf: 'center',
    },
});

const Logo = () => (
    <Image
        style={styles.image}
        source={logoSource}
    />
);

export default Logo;
