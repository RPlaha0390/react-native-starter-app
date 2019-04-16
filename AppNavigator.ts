import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './Home';
import Friends from './Friends';

const NavStack = createStackNavigator({
  Home: { screen: Home },
  Friends: { screen: Friends },
});

const AppNavigator = createAppContainer(NavStack);

export default AppNavigator;