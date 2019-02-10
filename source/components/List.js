import React from 'react';
import lodash from 'lodash';
import { shape, arrayOf, func } from 'prop-types';
import { FlatList, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';

import Card from './Card';
import NoContent from './NoContent';
import request from '../util/request';
import { indexing, capitalizeFirst } from '../util';

const styles = StyleSheet.create({
    flatList: {
        paddingTop: 5,
    },
});

const List = (props) => {
    const { pokemonList, fetchPokemonList } = props;

    if (pokemonList.length === 0) {
        return (
            <NoContent onHandlePress={fetchPokemonList} />
        );
    }

    return (
        <FlatList
            style={styles.flatList}
            data={pokemonList}
            numColumns={3}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <Card pokemonId={item.id} />
            )}
        />
    );
};

List.defaultProps = {
    pokemonList: [],
    fetchPokemonList: () => {},
};

List.propTypes = {
    pokemonList: arrayOf(shape({})),
    fetchPokemonList: func,
};

const mapStateToProps = state => ({
    pokemonList: state.pokemons.list,
});

const mapDispatchToProps = dispatch => ({
    fetchPokemonList: () => {
        request.get('/pokemon/?offset=0&limit=5000')
            .then((response) => {
                const securePokemonListFromRequest = lodash.get(response, 'data.results', []);
                if (securePokemonListFromRequest.length === 0) {
                    Alert.alert('', 'I think you\'re still offline');
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
                            name: capitalizeFirst(pokemon.name),
                            id: id[1],
                        };
                    }
                    return pokemon;
                });

                const indexedPokemonList = indexing(responseListWithId, 'id');

                dispatch({
                    type: 'SET_POKEMON_LIST',
                    payload: {
                        raw: responseListWithId,
                        indexed: indexedPokemonList,
                    },
                });
            })
            .catch(() => {
                Alert.alert('', 'I think you\'re still offline');
            });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
