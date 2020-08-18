import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import {THEME} from '../theme'
import {Platform} from 'react-native'

const PostNavigator = createStackNavigator({
    Main: { 
        screen: MainScreen,
        navigationOptions: () => ({
            headerTitle: 'Мой блог',
          }),

    },
    Post: {
        screen: PostScreen,
        navigationOptions: () => ({
            headerTitle: 'Пост номер 41',
          }),
    },
    initialRouteName: 'Main',
  }, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#FFF',
        },
        headerTintColor: Platform.OS === 'android' ? '#fff': THEME.MAIN_COLOR
    }
  })

export const AppNavigation = createAppContainer(PostNavigator)