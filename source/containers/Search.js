import React, { Component } from 'react';
import { View } from 'react-native';
import { arrayOf, shape } from 'prop-types';
import { connect } from 'react-redux';

class Search extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const { pokemonList } = this.props;

        if (pokemonList.length === 0) {
            return null;
        }

        return (
            <View />
        );
    }
}

Search.defaultProps = {
    pokemonList: [],
};

Search.propTypes = {
    pokemonList: arrayOf(shape({})),
};

const mapStateToProps = state => ({
    pokemonList: state.pokemons.list,
});

export default connect(mapStateToProps)(Search);
