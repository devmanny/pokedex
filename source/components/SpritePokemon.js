import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import { string, number, oneOfType } from 'prop-types';
import { IMAGES_PATH } from '../util';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    sprite: {
        resizeMode: 'contain',
    },
});

const SpritePokemon = (props) => {
    const { pokemonId, size } = props;
    let realSize = size;
    if (!size) {
        realSize = (width / 3) - 40;
    }
    const uri = `${IMAGES_PATH}/${pokemonId}.png`;
    return (
        <Image
            style={[
                styles.sprite,
                { width: realSize, height: realSize },
            ]}
            source={{
                uri,
                cache: 'force-cache',
            }}
        />
    );
};

SpritePokemon.defaultProps = {
    pokemonId: '1',
    size: (width / 3) - 40,
};

SpritePokemon.propTypes = {
    pokemonId: oneOfType([string, number]),
    size: number,
};

export default SpritePokemon;
