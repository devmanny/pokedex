import React, { Component } from 'react';
import {
    SafeAreaView, Alert, Text, ScrollView, View, StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import LottieView from 'lottie-react-native';
import { shape, func, string } from 'prop-types';
import { StackActions } from 'react-navigation';

import request from '../util/request';
import Intro from '../assets/animations/intro';

const LoadingComponent = () => <LottieView source={Intro} autoPlay loop />;

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
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
            .then((response) => {
                setTimeout(() => {
                    dispatch({
                        type: 'ADD_POKEMON_DATA',
                        payload: {
                            id: pokemonSelected,
                            data: response.data,
                        },
                    });
                }, 2000);
            })
            .catch(() => {
                dispatch(StackActions.push({
                    routeName: 'PokemonDetails',
                }));
                Alert.alert('', 'I think you\'re offline');
            });
    }

    render() {
        const { data } = this.props;
        console.log(data);
        if (!data) {
            return <LoadingComponent />;
        }
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.container}>
                        <Text>{data.name}</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

PokemonDetails.defaultProps = {
    data: null,
    pokemonSelected: '1',
    dispatch: () => {},
};

PokemonDetails.propTypes = {
    data: shape({}),
    pokemonSelected: string,
    dispatch: func,
};

const mapStateToProps = state => ({
    pokemonSelected: state.pokemons.selected,
    data: state.pokemons.details[state.pokemons.selected].data,
});

export default connect(mapStateToProps)(PokemonDetails);
