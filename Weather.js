import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
     Haze: {
          iconName: "weather-fog",
          gradient: ["#5D4157", "#A8CABA"],
          title: "Haze",
          subtitle: "Just don't go outside"
     },
     Thunderstorm: {
          iconName: "weather-lightning-rainy",
          gradient: ["#373b44", "#4286f4"],
          title: "Thunderstorm in the house",
          subtitle: "Actually, outside of the house"
     },
     Drizzle: {
          iconName: "weather-rainy",
          gradient: ["#9CECFB", "#65C7F7", "#0052D4"],
          title: "Drizzle",
          subtitle: "Is like rain, but gay 🏳️‍🌈"
     },
     Rain: {
          iconName: "weather-pouring",
          gradient: ["#2c3e50", "#3498db"],
          title: "Raining",
          subtitle: "Don't forget to get your Umbrella"
     },
     Snow: {
          iconName: "weather-snowy",
          gradient: ["#e6dada", "#eef2f3"],
          title: "Snow",
          subtitle: "Do you want to build a snowman? Fuck no"
     },
     Atmosphere: {
          iconName: "weather-hail",
          gradient: ["#36d1dc", "#5b86e5"]
     },
     Clear: {
          iconName: "weather-sunny",
          gradient: ["#f2994a", "#f2c94c"],
          title: "Sunny",
          subtitle: "Let's hang out with the puppy yay!!"
     },
     Clouds: {
          iconName: "weather-cloudy",
          gradient: ["#274046", "#e6dada"],
          title: "Clouds",
          subtitle: "I know, fucking boring"
     },
     Dust: {
          iconName: "weather-fog",
          gradient: ["#ba8b02", "#181818"],
          title: "Dusty",
          subtitle: "Thanks a lot China 🖕"
     },
     Mist: {
          iconName: "weather-fog",
          gradient: ["#8e9eab", "#eef2f3"],
          title: "Mist!",
          subtitle: "It's like you have no glasses on"
     },
     Smoke: {
          iconName: "weather-fog",
          gradient: ["#3e5151", "#decba4"],
          title: "Smoky",
          subtitle: "Thanks a lot China 🖕"
     },
     Fog: {
          iconName: "weather-fog",
          gradient: ["#e6dada", "#274046"],
          title: "Foggy",
          subtitle: ""
     },
     Sand: {
          iconName: "weather-fog",
          gradient: ["#abbaab", "#eef2f3"],
          title: "Sandy",
          subtitle: "Eww..Don't breath"
     },
     Squall: {
          iconName: "weather-fog",
          gradient: ["#abbaab", "#757F9A"]
     },
     Tornado: {
          iconName: "weather-hurricane",
          gradient: ["#232526", "#414345"],
          title: "OMG Tornado is Coming",
          subtitle: "Run.....!"
     }
};

export default function Weather({ temp, condition }) {
     return (
          <LinearGradient
               colors={weatherOptions[condition].gradient}
               style={styles.container}
          >
               <StatusBar barStyle="light-content" />
               <View style={styles.halfContainer}>
                    <MaterialCommunityIcons
                         size={96}
                         name={weatherOptions[condition].iconName}
                         color="#fff"
                    />
                    <Text style={styles.temp}>{temp}°C</Text>
               </View>
               <View
                    style={{ ...styles.halfContainer, ...styles.textContainer }}
               >
                    {/* in case the text is too long, use es6 style ... */}
                    <Text style={styles.title}>
                         {weatherOptions[condition].title}
                    </Text>
                    <Text style={styles.subtitle}>
                         {weatherOptions[condition].subtitle}
                    </Text>
               </View>
          </LinearGradient>
     );
}

Weather.propTypes = {
     temp: PropTypes.number.isRequired,
     condition: PropTypes.oneOf([
          "Thunderstorm",
          "Drizzle",
          "Rain",
          "Snow",
          "Atmosphere",
          "Clear",
          "Clouds",
          "Haze",
          "Dust",
          "Mist",
          "Smoke",
          "Fog",
          "Sand",
          "Squall",
          "Tornado"
     ]).isRequired
};

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
     },
     halfContainer: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
     },
     temp: {
          fontSize: 42,
          color: "#fff"
     },
     title: {
          color: "white",
          fontSize: 54,
          fontWeight: "300",
          marginBottom: 10
     },
     subtitle: {
          fontWeight: "600",
          color: "white",
          fontSize: 24
     },
     textContainer: {
          paddingHorizontal: 20,
          alignItems: "flex-start"
     }
});
