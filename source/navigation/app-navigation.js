import {
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
} from 'react-navigation';

import Home from '../screens/Home';
import Loading from '../screens/Loading';
import PokemonDetails from '../screens/PokemonDetails';
import Settings from '../screens/Settings';

import Logo from '../components/logo';

import { redColor, whiteColor } from '../util';

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
        navigationOptions: () => ({
            // headerBackTitle: 'Back',
            headerTitle: Logo,
            gesturesEnabled: true,
            headerStyle: {
                backgroundColor: redColor,
            },
            headerTintColor: whiteColor,
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
