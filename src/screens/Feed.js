import React from "react"
import {View, StyleSheet, ScrollView} from "react-native"
import FoodTypeNavigation from "../components/navigation/FoodTypeNavigation"
import FeedCardsList from "../components/cardsList/FeedCardsList"

class Feed extends React.Component{
    render(){
        return(

            <View style={styles.container}>
                <FoodTypeNavigation/>
                <ScrollView style={{flex: 1}}>
                    <FeedCardsList/>
                    <FeedCardsList/>
                    <FeedCardsList/>
                    <FeedCardsList/>
                    <FeedCardsList/>
                    <FeedCardsList/>
                </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12
    }
})

export default Feed
