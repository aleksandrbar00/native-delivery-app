import React from "react"
import {View, StyleSheet, ScrollView} from "react-native"
import PlaceInfoCard from "../components/cards/PlaceInfoCard"

class PlaceInfo extends React.Component{

    place = {
        title: "Best test place"
    }

    render(){
        return(
            <View style={{...StyleSheet.absoluteFillObject}}>
                <ScrollView>
                    <PlaceInfoCard place={this.place}/>
                </ScrollView>
            </View>
        )
    }
}


export default PlaceInfo
