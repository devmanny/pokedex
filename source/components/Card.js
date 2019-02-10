import React from 'react';
import { connect } from 'react-redux';
import {
    View, Text, Dimensions, StyleSheet,
} from 'react-native';
import { StackActions } from 'react-navigation';
import { string, func } from 'prop-types';
import Touchable from 'react-native-platform-touchable';
import SpritePokemon from './SpritePokemon';
import { whiteColor } from '../util';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    touchableContainer: {
        backgroundColor: whiteColor,
        margin: 5,
    },
    container: {
        width: (width / 3) - 13,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pokemonName: {
        marginVertical: 10,
    },
});

const Card = (props) => {
    const { pokemonId, name, handleCardPress } = props;

    return (
        <Touchable
            onPress={() => handleCardPress(pokemonId)}
            style={styles.touchableContainer}
        >
            <View style={styles.container}>
                <SpritePokemon pokemonId={pokemonId} />
                <Text numberOfLines={1} style={styles.pokemonName}>{name}</Text>
            </View>
        </Touchable>
    );
};

Card.defaultProps = {
    handleCardPress: () => {},
    pokemonId: '1',
    name: 'Bulbasaur',
};

Card.propTypes = {
    handleCardPress: func,
    pokemonId: string,
    name: string,
};

const mapStateToProps = (state, props) => {
    const { name } = state.pokemons.details[props.pokemonId];

    return ({
        name,
    });
};

const mapDispatchToProps = dispatch => ({
    handleCardPress: (pokemonID) => {
        dispatch({
            type: 'SET_SELECTED_POKEMON',
            payload: pokemonID,
        });

        dispatch(StackActions.push({
            routeName: 'PokemonDetails',
        }));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
