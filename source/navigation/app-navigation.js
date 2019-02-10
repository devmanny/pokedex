import {
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
} from 'react-navigation';

import Home from '../screens/Home';
import Loading from '../screens/Loading';
import PokemonDetails from '../screens/PokemonDetails';
import Settings from '../screens/Settings';

import { redColor } from '../util';

const AppTabsNav = createBottomTabNavigator(
    {
        Home,
        Settings,
    },
    {
        initialRouteName: 'Home',
    },
);

const AppStackNav = createStackNavigator(
    {
        Tabs: AppTabsNav,
        PokemonDetails,
    },
    {
        navigationOptions: ({ navigation }) => (navigation.state.routeName === 'Tabs' ? {
            // header: null,
            // headerBackTitle: null,
        } : {
            // headerBackTitle: 'Back',
            gesturesEnabled: true,
            headerBackground: redColor,
            headerTintColor: redColor,
        }),
    },
);


const switchNav = createSwitchNavigator(
    {
        App: { screen: AppStackNav },
        Loading,
    },
    {
        initialRouteName: 'Loading',
    },
);

export default switchNav;
