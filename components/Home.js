import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Image, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';

const Home = () => {
    const today = new Date();
  const options = { month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);
  const moon_pic = require("@/assets/images/moon.jpg");
    const navigation = useNavigation();
    const handleNavigateStarChart = () => {
        navigation.navigate('starchart'); 
    };
    const handleNavigateLessons = () => {
        navigation.navigate('lessons'); 
    };
    const handleNavigateTrip = () => {
      navigation.navigate('trip'); 
  };



    return (
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Good Afternoon, </Text>
            <Text style={styles.title}>User! 💫</Text>
          </View>
    
          {/* Scrollable Content */}
          <ScrollView contentContainerStyle={styles.scrollContent}>
    
            {/* Forecast Section */}
            <View style={styles.card}>
            <Text style={styles.cardTitle}>Tonight's Forecast: {formattedDate} 🌌</Text>
              <Text style={styles.cardText}>
                Tonight is a perfect night to step outside and stargaze. According to our forecast, you can expect
                <Text style={{ color: '#ADD8E6' }}> Clear Skies</Text> and
                <Text style={{ color: 'orangered' }}> Warm Weather</Text>.
              </Text>
              <Text style={styles.cardText}>Peak hours for stargazing this evening start at 8 PM and persist until 2 AM.</Text>
              {/* <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>View Gallery</Text>
              </TouchableOpacity> */}
            </View>
            <View style={styles.row}>
              <View style={styles.halfCard}>
                <Text style={styles.cardTitle}>Visible Tonight 🔭</Text>
                <Text style={styles.cardText}>See what celestial bodies are visible from Gainesville.</Text>
                <TouchableOpacity style={styles.halfButton}>
                            <Text style={styles.buttonText} onPress={handleNavigateStarChart}>View Star Chart</Text>
                          </TouchableOpacity>
              </View>

              <View style={styles.halfCard}>
                <Text style={styles.cardTitle}>3 Day Streak! 🔥</Text>
                <Text style={styles.cardText}>Complete today's lesson and quiz to continue your streak.</Text>
                <TouchableOpacity style={styles.halfButton}onPress={handleNavigateLessons}>
                            <Text style={styles.buttonText}>Go to Lessons</Text>
                          </TouchableOpacity>
              </View>
            </View>
            {/* Card with Image */}
      <View style={styles.card}>
        {/* Image inside the card */}
        <Image
          source={moon_pic} // Replace with your image URL or local image
          style={styles.image}
          resizeMode="cover" // Adjust image to fill the card
        />
      </View>
      <View style={styles.card}>
            <Text style={styles.cardTitle}>Plan a Stargazing Trip! 🌠</Text>
            <Text style={styles.cardText}>Invite friends in Gainesville to stargaze with you!</Text>
            <TouchableOpacity style={styles.button} onPress={handleNavigateStarChart}>
                            <Text style={styles.buttonText} onPress={handleNavigateStarChart}>Plan a Trip</Text>
                          </TouchableOpacity>
            </View>

    
            {/* Add Friend Section */}
            {/* <View style={styles.card}>
              <Text style={styles.cardTitle}>Add Friend</Text>
              <TextInput placeholder="Name" style={styles.input} placeholderTextColor="gray" />
              <TextInput placeholder="Email" style={styles.input} placeholderTextColor="gray" />
              <TextInput placeholder="Message" style={[styles.input, { height: 80 }]} placeholderTextColor="gray" multiline />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Send</Text>
              </TouchableOpacity>
            </View> */}
          </ScrollView>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingTop: 50, // Prevent iOS clipping
        fontFamily: 'VarelaRound', // Ensure consistent font across the app
      },
      header: {
        alignItems: 'left',
        paddingHorizontal: 20, // Padding for the header
        marginBottom: 20,
      },
      title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'VarelaRound', // Ensure consistent font
      },
      scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 20,
      },
      navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
      },
      navButton: {
        padding: 10,
      },
      navText: {
        color: 'lightblue',
      },
      card: {
        backgroundColor: '#1e1e1e',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
      },
      cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
        fontFamily: 'VarelaRound', // Ensure consistent font
      },
      cardText: {
        color: 'white',
        marginBottom: 10,
        fontFamily: 'VarelaRound', // Ensure consistent font
      },
      button: {
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'VarelaRound', // Ensure consistent font
      },
      gallery: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      image: {
        // width: 100,
        // height: 150,
        width: '80%', // Make the image fill the card width
        height: 195, // Set a fixed height for the image
        margin: 5,
        borderRadius: 10,
        backgroundColor: '#333', // Placeholder color
        alignItems: 'center', // Center the image in the card
        justifyContent: 'center', // Ensure the image is centered
        alignSelf: 'center', // Center the image in the card
      },
      input: {
        backgroundColor: '#333',
        color: 'white',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        fontFamily: 'VarelaRound', // Ensure consistent font
      },
      halfCard: {
        flex: 0.5,  // Each card takes half the width
        backgroundColor: '#1e1e1e',
        padding: 20,
        borderRadius: 10,
        height: 150, // Match the height of "Today's Forecast" card
        marginHorizontal: 5,  // Space between the two cards
      },
      halfButton:{
        backgroundColor: 'purple',
        padding: 5,
        borderRadius: 5,
        marginTop: 5
      },
      row: {
        flexDirection: 'row',  // Arrange items side by side
        justifyContent: 'space-between',  // Keep space between them
        marginBottom: 20,  // Space below the row
      },
    });

export default Home;
