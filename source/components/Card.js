import React from 'react';
import { connect } from 'react-redux';
import {
    View, Text, Dimensions, StyleSheet,
} from 'react-native';
import { string } from 'prop-types';
import Touchable from 'react-native-platform-touchable';
import SpritePokemon from './SpritePokemon';
import { whiteColor } from '../util';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    touchableContainer: {
        width: (width - 10) / 3,
    },
    container: {
        backgroundColor: whiteColor,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pokemonName: {
        marginVertical: 10,
    },
});

const Card = (props) => {
    const { pokemonId, name } = props;

    return (
        <Touchable style={styles.touchableContainer}>
            <View style={styles.container}>
                <SpritePokemon pokemonId={pokemonId} />
                <Text numberOfLines={1} style={styles.pokemonName}>{name}</Text>
            </View>
        </Touchable>
    );
};

Card.defaultProps = {
    pokemonId: '1',
    name: 'Bulbasaur',
};

Card.propTypes = {
    pokemonId: string,
    name: string,
};

const mapStateToProps = (state, props) => {
    const { name } = state.pokemons.details[props.pokemonId];

    return ({
        name,
    });
};

export default connect(mapStateToProps)(Card);
