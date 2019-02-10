import React, { PureComponent } from 'react';
import {
    SafeAreaView, StatusBar, Platform, StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import {
    func, shape, string, arrayOf,
} from 'prop-types';
import LottieView from 'lottie-react-native';
import lodash from 'lodash';
import { NavigationActions } from 'react-navigation';

import { whiteColor, indexing, redColor } from '../util';
import Intro from '../assets/animations/intro';
import request from '../util/request';

const styles = StyleSheet.create({
    conatiner: {
        backgroundColor: whiteColor,
        flex: 1,
    },
});

/**
 * This screen is responsible for downloading
 * the entire pokemon list and saving it in
 * the store while displaying a loading animation,
 * as well as checking if it was
 * previously downloaded it going
 * directly to home
 *
 * @class Loading
 * @extends {PureComponent}
 */

class Loading extends PureComponent {
    constructor(props) {
        super(props);
        this.getPokemonList();
        this.setStatusBarStyle();
    }

    setStatusBarStyle = () => {
        StatusBar.setBarStyle('light-content');
        if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor(redColor);
        }
    }

    getPokemonList = () => {
        const { goToHome, pokemonList, setPokemonList } = this.props;
        if (pokemonList.length === 0) {
            request.get('/pokemon/?offset=0&limit=5000')
                .then((response) => {
                    const securePokemonListFromRequest = lodash.get(response, 'data.results', []);
                    if (securePokemonListFromRequest.length === 0) {
                        setTimeout(() => goToHome(), 1000);
                        return;
                    }

                    // this pattern is to get the pokemon ID of the URL of its image
                    const pokemonPattern = /https:\/\/pokeapi\.co\/api\/v2\/pokemon\/(\d+)\//;

                    // adding a pokemon Id to every item
                    const responseListWithId = securePokemonListFromRequest.map((pokemon) => {
                        const id = pokemonPattern.exec(pokemon.url);
                        if (id && id.length > 0) {
                            return {
                                ...pokemon,
                                id: id[1],
                            };
                        }
                        return pokemon;
                    });

                    const indexedPokemonList = indexing(responseListWithId, 'id');

                    setPokemonList({
                        raw: responseListWithId,
                        indexed: indexedPokemonList,
                    });
                })
                .catch(() => {
                    setTimeout(() => goToHome(), 1000);
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

const mapStateToProps = state => ({
    pokemonList: state.pokemons.list,
});

const mapDispatchToProps = dispatch => ({
    /**
     * Dispatch an action to Redux to set entire pokemon list
     */
    setPokemonList: (pokemons) => {
        dispatch({
            type: 'SET_POKEMON_LIST',
            payload: pokemons,
        });
    },

    /**
     * Dispatch an action to React-Navigation (redux) to go to Home
     */
    goToHome: () => {
        dispatch(
            NavigationActions.navigate({
                routeName: 'Home',
            }),
        );
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
