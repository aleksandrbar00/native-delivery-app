import React from "react"
import {Card, Avatar, Text, Rating, AirbnbRating} from "react-native-elements"


export default (props) => {
    return (
       <Card>
           <View style={{alignSelf: "stretch", flexDirection: "row"}}>
               <View style={{flex: 0.4}}>
                   <Avatar
                    source={require("../../assets/images/food1.jpg")}
                   />
               </View>
               <View style={{flex: 0.6}}>
                   <Text h4>{props.title}</Text>
                   <View>
                       <AirbnbRating count={5} defaultRating={4.7}/>
                   </View>
               </View>
           </View>
       </Card>
    )
}
