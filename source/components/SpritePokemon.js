import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import { string } from 'prop-types';
import { IMAGES_PATH } from '../util';

const { width } = Dimensions.get('window');

const size = (width / 3) - 40;

const styles = StyleSheet.create({
    sprite: {
        width: size,
        height: size,
        resizeMode: 'contain',
    },
});

const SpritePokemon = (props) => {
    const { pokemonId } = props;
    const uri = `${IMAGES_PATH}/${pokemonId}.png`;
    return (<Image style={styles.sprite} source={{ uri }} />);
};

SpritePokemon.defaultProps = {
    pokemonId: '1',
};

SpritePokemon.propTypes = {
    pokemonId: string,
};

export default SpritePokemon;
