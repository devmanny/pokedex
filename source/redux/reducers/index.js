import { combineReducers } from 'redux';

import settings from './settings';
import pokemons from './pokemons';
import navigation from './navigation';

const rootReducer = combineReducers(
    {
        settings, pokemons, navigation,
    },
);

export default rootReducer;
