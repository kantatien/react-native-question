import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { useRoute } from "@react-navigation/native"

const Score = ({navigation}) => {
    const rounte = useRoute();
    const { score } = rounte.params;
    return (
        <View style={tw`flex-1 items-center`}>
            <Image source={require("../../assets/images/Congratulations-Graduation-Cap-in-Orange-580x386.jpg")}
                style={tw.style(tw`h-3/6`, { aspectRatio: 1 })} />

            <Text>Your Scored {score} points</Text>
            <Pressable style={tw`bg-orange-500 mt-10 px-6 py-1 rounded`}
            onPress={()=> navigation.navigate("Splash")}>
                <Text  style={tw`text-white text-lg`}>Play Again</Text>
            </Pressable>
        </View>
    )
}

export default Score
const style = StyleSheet.create({});