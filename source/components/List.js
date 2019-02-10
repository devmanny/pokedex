import React from 'react';
import { shape, arrayOf } from 'prop-types';
import {
    FlatList, StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

const styles = StyleSheet.create({
    flatList: {

    },
});

const List = (props) => {
    const { pokemonList } = props;

    return (
        <FlatList
            style={styles.flatList}
            data={pokemonList}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <ListItem
                    pokemonId={item.id}
                />
            )}
        />
    );
};

List.defaultProps = {
    pokemonList: [],
};

List.propTypes = {
    pokemonList: arrayOf(shape({})),
};

const mapStateToProps = state => ({
    pokemonList: state.pokemons.list,
});

export default connect(mapStateToProps)(List);
