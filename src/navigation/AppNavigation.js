import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import {THEME} from '../theme'

const PostNavigator = createStackNavigator({
    Main: { 
        screen: MainScreen 
    },
    Post: {
        screen: PostScreen
    },
    initialRouteName: 'Main',
})

export const AppNavigation = createAppContainer(PostNavigator)