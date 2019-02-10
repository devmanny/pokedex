import React, { PureComponent } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { func, arrayOf } from 'prop-types';
import LottieView from 'lottie-react-native';

import { whiteColor, indexing } from '../util';
import Intro from '../assets/animations/intro';
import request from '../request';

const styles = StyleSheet.create({
    conatiner: {
        backgroundColor: whiteColor,
        flex: 1,
    },
});

class Loading extends PureComponent {
    constructor(props) {
        super(props);

        const { pokemonList, setPokemonList } = props;

        if (pokemonList.length === 0) {
            request.get('/pokemon/?offset=0&limit=5000')
                .then((response) => {
                    const pokemonPattern = /https:\/\/pokeapi\.co\/api\/v2\/pokemon\/(\d+)\//;

                    const responseList = response.data.map((pokemon) => {
                        const id = pokemonPattern.exec(pokemon.url);

                        if (id) {
                            return {
                                ...pokemon,
                                id: id[1],
                            };
                        }

                        return pokemon;
                    });

                    const pokemons = indexing(responseList, 'id');

                    setPokemonList(pokemons);
                })
                .catch((err) => {
                    console.warn(err);
                });
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.conatiner}>
                <LottieView resizeMode="contain" source={Intro} autoPlay />
            </SafeAreaView>
        );
    }
}

Loading.defaultProps = {
    pokemonList: [],
    setPokemonList: () => {},
};

Loading.propTypes = {
    setPokemonList: func,
    pokemonList: arrayOf,
};

const mapStateToProps = state => ({
    pokemonList: state.pokemons.list,
});

const mapDispatchToProps = dispatch => ({
    setPokemonList: (pokemons) => {
        dispatch({
            type: 'SET_POKEMON_LIST',
            payload: pokemons,
        });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
