import React, { Component } from 'react';
import {
    arrayOf, string, shape, func,
} from 'prop-types';
import { connect } from 'react-redux';
import SearchContainer from '../components/SearchContainer';
import SmartInput from './SmartInput';

class Search extends Component {
    handleChangeText = (text) => {
        const { dispatch } = this.props;

        dispatch({
            type: 'SEARCH_POKEMON',
            payload: text,
        });
    }

    render() {
        const { pokemonList, search } = this.props;

        if (pokemonList.length === 0) {
            return null;
        }

        return (
            <SearchContainer>
                <SmartInput
                    value={search}
                    onChangeText={this.handleChangeText}
                />
            </SearchContainer>
        );
    }
}

Search.defaultProps = {
    pokemonList: [],
    dispatch: func,
    search: '',
};

Search.propTypes = {
    pokemonList: arrayOf(shape({})),
    dispatch: func,
    search: string,
};

const mapStateToProps = state => ({
    search: state.pokemons.search,
    pokemonList: state.pokemons.list,
});

export default connect(mapStateToProps)(Search);
