import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {colors} from '~/styles';

import Home from '~/pages/Main';
import Search from '~/pages/Search';
import Player from '~/pages/Player';
import Library from '~/pages/Library';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Home,
      Search,
      Library,
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          const {routeName} = navigation.state;
          let iconName;
          let size;
          switch (routeName) {
            case 'Home':
              iconName = 'home';
              size = focused ? 25 : 23;
              break;
            case 'Search':
              iconName = 'magnifier';
              size = focused ? 25 : 23;
              break;
            case 'Library':
              iconName = 'playlist';
              size = focused ? 25 : 23;
              break;
            default:
              break;
          }
          return <Icon name={iconName} size={size} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: colors.white,
        inactiveTintColor: colors.inactive,
        tabStyle: {
          backgroundColor: colors.secondary,
        },
        labelStyle: {
          fontSize: 13,
          marginTop: -5,
        },
      },
    },
  ),
);

export default Routes;
