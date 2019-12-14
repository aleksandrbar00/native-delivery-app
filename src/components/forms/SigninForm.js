import React from 'react'
import {View, StyleSheet} from "react-native"
import {Card, Input, Button, Text, SocialIcon} from "react-native-elements"
import LinearGradient from "react-native-linear-gradient"
import {withNavigation} from "react-navigation"



class SigninForm extends React.Component{

    state = {
        email: "",
        password: "",
    }

    submitForm = () => {
        this.setState({finalResult: this.state.email + " " + this.state.password})
    }

    render(){
        return (
            <Card
                containerStyle={{padding: 20}}
            >
                <Text h3 h3Style={{textAlign: "center"}}>Sign in</Text>
                <Text h4>{this.state.finalResult}</Text>

                <View>
                    <Input
                        value={this.state.email}
                        placeholder="email"
                        onChangeText={text => this.setState({email: text})}
                    />
                </View>

                <View>
                    <Input
                        value={this.state.password}
                        placeholder="password"
                        containerStyle={styles.passwordInput}
                        onChangeText={text => this.setState({password: text})}
                    />
                </View>
                <View>
                    <Button
                        onPress={this.submitForm}
                        title="Sign in"
                        ViewComponent={LinearGradient}
                        linearGradientProps={{
                            colors: ['red', 'pink'],
                            start: {x: 0, y: 0.5 },
                            end: {x: 1, y: 0.5}
                        }}
                        containerStyle={styles.btn}
                        onPress={() => {this.props.navigation.navigate("Feed")}}
                    />
                </View>
                <View style={styles.socialLinks}>
                    <SocialIcon
                        type="twitter"
                    />
                    <SocialIcon
                        type="vk"
                    />
                    <SocialIcon
                        type="facebook"
                    />
                </View>
                <Text style={{textAlign: "center", paddingHorizontal: 8, color: "#ccc"}}>
                    Or create new account
                </Text>

            </Card>
        )
    }
}

const styles = StyleSheet.create({

    passwordInput: {
        marginTop: 10
    },

    btn:{
        marginTop: 20
    },

    socialLinks: {
        marginTop: 10,
        alignSelf: "stretch",
        flexDirection: "row",
        justifyContent: "center"
    }

})

export default withNavigation(SigninForm)

