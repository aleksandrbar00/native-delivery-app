import React from "react"
import {Picker, View, StyleSheet, Dimensions} from "react-native";
import {Avatar, Text, Card} from "react-native-elements";

const basePath = "../../assets/icons"

class FoodTypeNavigation extends React.Component{

    state = {
        foodType: "",
        categories: [
            {
                title: "soup",
                source: require(`${basePath}/soup.png`)
            },
            {
                title: "fish",
                source: require(`${basePath}/fish.png`)
            },
            {
                title: "pasta",
                source: require(`${basePath}/pasta.png`)
            },
            {
                title: "pork",
                source: require(`${basePath}/ribs.png`)
            },
            {
                title: "drinks",
                source: require(`${basePath}/cocktail.png`)
            },
            {
                title: "bakery",
                source: require(`${basePath}/cookie.png`)
            }
        ]
    }

    onPickerChange = (val, ind) => {
        this.setState({foodType: val})
    }

    render(){

        const gutterWidth = 3
        const itemPerRow = 5
        const typeItemWidth = (Math.round(Dimensions.get("window").width) - (itemPerRow * gutterWidth + 10 + 24))/ itemPerRow

        const typesItems = this.state.categories.map((item, ind, array) => <Card key={item.title} containerStyle={{
                width: typeItemWidth,
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 5,
                marginLeft: (ind % itemPerRow === 0) || (ind + 1 % itemPerRow === 0) ? 0: gutterWidth,
                marginRight: (ind % itemPerRow === 0) || (ind + 1 % itemPerRow === 0) ?  0 : gutterWidth
        }}>
            <Avatar
                rounded={true}
                size="medium"
                activeOpacity={0.7}
                source={item.source}
            />
            <Text style={{textAlign: "center", fontSize: 12, textTransform: "capitalize", color: "#9c9c9c"}}>
                {item.title}
            </Text>
        </Card>)

        return (
            <View style={styles.container}>
                <Text h4>Filter recepts</Text>
                <View style={styles.typesContainer}>
                    {typesItems}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        color: "#000000",
        alignSelf: "stretch",
    },
    typesContainer: {
        flexWrap: "wrap",
        color: "#000000",
        flexDirection: "row",
        paddingVertical: 5

    }
})

export default FoodTypeNavigation
