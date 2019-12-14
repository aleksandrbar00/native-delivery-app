import React from "react"
import Carousel, {Pagination, ParallaxImage} from "react-native-snap-carousel"
import {Text, Card} from "react-native-elements";
import {Dimensions, View, Image, TouchableOpacity, StyleSheet} from "react-native";

class FeedCardsList extends React.Component {

    state = {
        cards: [
            {
                title: "Title food 1",
                subtitle: "Lorem sadas asd asd ",
                poster: require("../../assets/images/food1.jpg")
            },
            {
                title: "Title food 2",
                subtitle: "Lorem sadas asd asd ",
                poster: require("../../assets/images/food1.jpg")
            },
            {
                title: "Title food 2",
                subtitle: "Lorem sadas asd asd ",
                poster: require("../../assets/images/food1.jpg")
            },
            {
                title: "Title food 2",
                subtitle: "Lorem sadas asd asd ",
                poster: require("../../assets/images/food1.jpg")
            },{
                title: "Title food 2",
                subtitle: "Lorem sadas asd asd ",
                poster: require("../../assets/images/food1.jpg")
            }
        ],
        activeSlide: 0
    }


    _renderItem = ({item, index}, parallaxProps) => {
        return (
            <View style={{height: 200, borderRadius: 12, backgroundColor: "rgba(255, 255, 255, 0.92)", shadowColor: "#000"}}>
                <ParallaxImage
                    source={item.poster}
                    parallaxFactor={0.35}
                    showSpinner={true}
                    containerStyle={{flex: 1, borderTopLeftRadius: 12, borderTopRightRadius: 12}}
                    style={{...StyleSheet.absoluteFillObject, resizeMethod: "cover"}}
                    {...parallaxProps}
                />
                <Text h4 h4Style={{paddingVertical: 10, paddingHorizontal: 10}}>
                    {item.title}
                </Text>
            </View>
        )
    }

    get pagination(){
        const {cards, activeSlide} = this.state

        console.log(activeSlide)

        return (
            <Pagination
                dotsLength={cards.length}
                activeDotIndex={activeSlide}
                containerStyle={{}}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)'
                }}
                inactiveDotStyle={{}}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                carouselRef={this._carousel}
            />
        )
    }

    render(){

        const sliderWidth=Dimensions.get("window").width - 24

        return (
            <View style={{flex: 1}}>
                <Text h4>Featured recepts</Text>
                <Carousel ref={(c) => {this._carousel = c}} data={this.state.cards} loop={true} loopClonesPerSide={2} layout={"default"} onSnapToItem={(index) => this.setState({activeSlide: index})} renderItem={this._renderItem} hasParallaxImages={true} sliderWidth={sliderWidth} itemWidth={sliderWidth - 60} itemHeight={200}>
                </Carousel>
                {this.pagination}
            </View>
        )
    }
}



export default FeedCardsList
