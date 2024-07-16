import * as React from 'react';
import { Button, View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome'; 
// import PhoneInput from './PhoneInput';

// Create a stack navigator
const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('./BackgroundScreen1.png')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source={require('./CarrotIcon.png')} style={styles.icon} />
          <Text style={styles.text}>Welcome</Text>
          <Text style={styles.text}>to our store</Text>
          <Text style={styles.DesText}>Get your groceries in as fast as one hour</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

function IconButton({ name, text, backgroundColor }) {
  return (
    <TouchableOpacity style={[styles.iconButton, { backgroundColor }]}>
      <Icon name={name} size={20} color="white" style={styles.iconLeft} />
      <Text style={styles.iconButtonText}>{text}</Text>
    </TouchableOpacity>
  );
}

function SignInScreen() {
  return (
    <View style={styles.signInContainer}>
      <Image source={require('./TopImage.png')} style={styles.topImage} />
      <Text style={styles.signInText}>Get your groceries</Text>
      <Text style={{color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 20,}}>with nectar</Text>
      <View style={styles.inputContainer}>
        <Image source={require('./Icon.png')} style={styles.phoneIcon} />
        <Text style={styles.phoneText}>+880</Text>
        {/* <TextInput
          style={styles.input}
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
        /> */}
      </View>
      <Text style={styles.socialText}>Or connect with social media</Text>
        <IconButton name="google" text="Continue with Google" backgroundColor="#4B70F5" style={{marginBottom:20}}/>
        <IconButton name="facebook" text="Continue with Facebook" backgroundColor="#3B5998" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 80, // adjust as needed to create space for the button
  },
  content: {
    paddingTop: 350, // adjust as needed to create space between top and content
    alignItems: 'center',
    marginTop: 50, // adjust as needed to create space between top and content
  },
  icon: {
    marginBottom: 20,
    height: 60,
    width: 50,
  },
  text: {
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
  },
  DesText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#7ABA78',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 15,
    height: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  signInContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  topImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  signInText: {
    marginTop: 20,
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  inputContainer: {
    width:'80%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    alignSelf: 'flex-start',
    marginLeft: 20,
    borderBottomColor: 'black',  // Set the bottom border color to black
    borderBottomWidth: 1,        // Set the bottom border width to 1 (or as needed)
  },
  phoneIcon: {
    height: 30,
    width: 50,
    marginRight: 10,
  },
  phoneText: {
    fontSize: 20,
    color: 'black',
  },
  socialText: {
    color: 'gray',
    fontSize: 15,
    marginVertical: 20,
    textAlign: 'center',
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
    width: 300,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius:10,
    height:50,
  },
  iconLeft: {
    marginRight: 45,
  },
  iconButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
