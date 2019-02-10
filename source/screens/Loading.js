import React, { PureComponent } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
    func, shape, string, arrayOf,
} from 'prop-types';
import LottieView from 'lottie-react-native';
import lodash from 'lodash';
import { NavigationActions } from 'react-navigation';

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
        this.getPokemonList();
    }

    getPokemonList = () => {
        const { goToHome, pokemonList, setPokemonList } = this.props;

        if (pokemonList.length === 0) {
            request.get('/pokemon/?offset=0&limit=5000')
                .then((response) => {
                    // this pattern is to get the pokemon ID of the URL of its image
                    const pokemonPattern = /https:\/\/pokeapi\.co\/api\/v2\/pokemon\/(\d+)\//;
                    const securePokemonListFromRequest = lodash.get(response, 'data.results', []);

                    if (securePokemonListFromRequest.length === 0) {
                        setTimeout(() => goToHome(), 1000);
                        return;
                    }

                    const responseList = securePokemonListFromRequest.map((pokemon) => {
                        const id = pokemonPattern.exec(pokemon.url);

                        if (id) {
                            return {
                                ...pokemon,
                                id: id[1],
                            };
                        }

                        return pokemon;
                    });

                    const indexedPokemonList = indexing(responseList, 'id');

                    setPokemonList({
                        raw: responseList,
                        indexed: indexedPokemonList,
                    });
                })
                .catch((err) => {
                    console.warn(err.toString());
                });
        } else {
            setTimeout(() => goToHome(), 3000);
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.conatiner}>
                <LottieView resizeMode="contain" source={Intro} autoPlay loop={false} />
            </SafeAreaView>
        );
    }
}

Loading.defaultProps = {
    pokemonList: [],
    setPokemonList: () => {},
    goToHome: () => {},
};

Loading.propTypes = {
    goToHome: func,
    setPokemonList: func,
    pokemonList: arrayOf(
        shape({
            name: string,
            url: string,
        }),
    ),
};

const mapStateToProps = (state) => {
    console.warn(state.pokemons);
    return ({
        pokemonList: state.pokemons.list,
    });
};

const mapDispatchToProps = dispatch => ({
    setPokemonList: (pokemons) => {
        dispatch({
            type: 'SET_POKEMON_LIST',
            payload: pokemons,
        });
    },
    goToHome: () => {
        dispatch(
            NavigationActions.navigate({
                routeName: 'Home',
            }),
        );
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
