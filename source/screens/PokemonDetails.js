import React, { Component } from 'react';
import {
    SafeAreaView, StyleSheet, Alert, ScrollView, View,
} from 'react-native';
import { connect } from 'react-redux';
import LottieView from 'lottie-react-native';
import { shape, func, string } from 'prop-types';
import { StackActions } from 'react-navigation';

import request from '../util/request';
import Intro from '../assets/animations/intro';
import PokemonData from '../components/PokemonData';
import { whiteColor, indexingNested } from '../util';
import PokemonStatistics from '../components/PokemonStatistics';

const LoadingComponent = () => <LottieView source={Intro} autoPlay loop />;

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    card: {
        backgroundColor: whiteColor,
        margin: 10,
        padding: 10,
    },
});

class PokemonDetails extends Component {
    constructor(props) {
        super(props);
        this.getPokemonDetails();
    }

    getPokemonDetails = () => {
        const { data, dispatch, pokemonSelected } = this.props;
        if (data) {
            return;
        }

        request.get(`/pokemon/${pokemonSelected}/`)
            .then(response => request.get(`/pokemon-species/${pokemonSelected}/`)
                .then((responseExtra) => {
                    const extra = responseExtra.data;
                    extra.flavor_text_entries = indexingNested(extra.flavor_text_entries, 'language', 'name');

                    setTimeout(() => {
                        dispatch({
                            type: 'ADD_POKEMON_DATA',
                            payload: {
                                id: pokemonSelected,
                                extra,
                                data: response.data,
                            },
                        });
                    }, 2000);
                }))
            .catch(() => {
                dispatch(StackActions.push({
                    routeName: 'PokemonDetails',
                }));
                Alert.alert('', 'I think you\'re offline');
            });
    }

    render() {
        const { data, name, language } = this.props;

        console.log(data);

        if (!data) {
            return <LoadingComponent />;
        }
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.card}>
                        <PokemonData language={language} data={data} name={name} />
                        <PokemonStatistics language={language} data={data} name={name} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

PokemonDetails.defaultProps = {
    data: null,
    name: 'Bulbasaur',
    pokemonSelected: '1',
    language: 'en',
    dispatch: () => {},
};

PokemonDetails.propTypes = {
    data: shape({}),
    pokemonSelected: string,
    name: string,
    language: string,
    dispatch: func,
};

const mapStateToProps = state => ({
    language: state.settings.language,
    pokemonSelected: state.pokemons.selected,
    data: state.pokemons.details[state.pokemons.selected].data,
    name: state.pokemons.details[state.pokemons.selected].name,
});

export default connect(mapStateToProps)(PokemonDetails);
