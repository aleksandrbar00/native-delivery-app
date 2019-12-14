import React from "react";
import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"
import App from "../App"
import Feed from "./screens/Feed"
import PlaceInfo from "./screens/PlaceInfo"
import {Image} from "react-native"


const AppNavigator = createMaterialBottomTabNavigator({
    Signin: {screen: App, navigationOptions: {tabBarIcon: <Image source={require("./assets/icons/guarantee.png")} style={{width: 24, height: 24}}/>}},
    Feed: {screen: Feed, navigationOptions: {tabBarIcon: <Image source={require("./assets/icons/list.png")} style={{width: 24, height: 24}} />}},
    PlaceInfo: {screen: PlaceInfo, navigationOptions: {
        tabBarVisible: false,
            header: null
        }}
}, {initialRouteName: "Signin", shifting: true})


export default createAppContainer(AppNavigator)
