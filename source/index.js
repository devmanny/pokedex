import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import AppNavigatorWithState from './navigation/app-navigation-with-state';

const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppNavigatorWithState />
        </PersistGate>
    </Provider>
);

export default App;
