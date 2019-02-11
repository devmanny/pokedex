import { createNavigationReducer } from 'react-navigation-redux-helpers';
import AppNavigation from '../../navigation/app-navigation';

const navigationReducer = createNavigationReducer(AppNavigation);
export default navigationReducer;
