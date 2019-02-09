import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import { func, shape } from 'prop-types';

import AppNavigator from './app-navigation';

const AppNavigatorWithState = reduxifyNavigator(AppNavigator, 'pokedex');

const mapStateToProps = state => ({
    state: state.navigation, // as defined in: source/redux/reducers/index.js
});

class ReduxNavigation extends PureComponent {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        const { state, dispatch } = this.props;
        if (this.shouldCloseApp(state)) return false;

        dispatch(NavigationActions.back());
        return true;
    };

    shouldCloseApp = (nav) => {
        if (nav.index > 0) return false;

        if (nav.routes) {
            return nav.routes.every(this.shouldCloseApp);
        }
        return true;
    }

    render() {
        return <AppNavigatorWithState {...this.props} />;
    }
}

ReduxNavigation.defaultProps = {
    dispatch: () => {},
    state: null,
};

ReduxNavigation.propTypes = {
    dispatch: func,
    state: shape({}),
};

export default connect(mapStateToProps)(ReduxNavigation);
