import { createStackNavigator } from 'react-navigation-stack';
// import App from './App';
import Login from './src/screens/Login/Login'; 


const AppNav = createStackNavigator({
  // App: { screen: App },
  Login: { screen: Login }, 
});

export default AppNav;