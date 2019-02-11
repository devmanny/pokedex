import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import reducer from './reducers';

const persistConfig = {
    key: 'pokedex-dev-11',
    storage,
    blacklist: ['navigation'],
};

const navigationMiddleware = createReactNavigationReduxMiddleware(
    'pokedex',
    state => state.navigation, // as named in source/redux/reducers/index.js
);

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
    persistedReducer,
    applyMiddleware(navigationMiddleware),
);
const persistor = persistStore(store);

export { store, persistor };
