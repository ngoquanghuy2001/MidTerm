import React, { useState } from 'react';
import { Button, View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();
const flags = [
  { id: 1, country: 'Bangladesh', code: '+880', flag: require('./bangladesh.png') },
  { id: 2, country: 'Vietnam', code: '+84', flag: require('./vietnam.png') },
  { id: 3, country: 'Thailand', code: '+66', flag: require('./thailand.png') },
  { id: 4, country: 'Indonesia', code: '+62', flag: require('./indonesia.png') },
  { id: 5, country: 'India', code: '+91', flag: require('./india.png') },
  { id: 6, country: 'Philippines', code: '+63', flag: require('./philippines.png') },
  { id: 7, country: 'Malaysia', code: '+60', flag: require('./malaysia.png') },
  { id: 8, country: 'Singapore', code: '+65', flag: require('./singapore.png') },
  { id: 9, country: 'Myanmar', code: '+95', flag: require('./myanmar.png') },
  { id: 10, country: 'Cambodia', code: '+855', flag: require('./cambodia.png') },
  { id: 11, country: 'Laos', code: '+856', flag: require('./laos.png') },
];

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

const PhoneNumberInput = ({ phoneNumber, setPhoneNumber, error, setError, selectedCountry, setSelectedCountry }) => {
  const handlePhoneNumberChange = (value) => {
    const cleaned = value.replace(/[^0-9]/g, '');
    if (cleaned.length > 10) {
      setError(" !");
    } else {
      setError('');
      setPhoneNumber(cleaned);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.phoneInputContainer}>
        <TouchableOpacity onPress={() => setSelectedCountry(selectedCountry)}>
          <Image source={selectedCountry.flag} style={styles.flagIcon} />
        </TouchableOpacity>
        <Text style={styles.phoneText}>{selectedCountry.code} </Text>
        <TextInput
          style={[styles.phoneNumberInput, { fontSize: 20 }]}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
        />
      </View>
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
    </View>
  );
};

function SignInScreen() {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [error, setError] = React.useState('');
  const [showFlags, setShowFlags] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(flags[0]);

  const handleFlagPress = () => {
    setShowFlags(!showFlags);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowFlags(false);
    setPhoneNumber('');
  };

  const renderFlagItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCountrySelect(item)}>
      <Image source={item.flag} style={styles.flagItem} />
    </TouchableOpacity>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.signInContainer}>
        <Image source={require('./TopImage.png')} style={styles.topImage} />
        <Text style={styles.signInText}>Get your groceries</Text>
        <Text style={styles.signInText}>with nectar</Text>
        <PhoneNumberInput
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          error={error}
          setError={setError}
          selectedCountry={selectedCountry}
          setSelectedCountry={handleFlagPress}
        />
        {showFlags && (
          <View style={styles.flagListContainer}>
            <FlatList
              data={flags}
              renderItem={renderFlagItem}
              keyExtractor={item => item.id.toString()}
              horizontal
            />
          </View>
        )}
        <Text style={styles.socialText}>Or connect with social media</Text>
        <IconButton name="google" text="Continue with Google" backgroundColor="#4B70F5" style={{ marginBottom: 20 }} />
        <IconButton name="facebook" text="Continue with Facebook" backgroundColor="#3B5998" />
      </View>
    </TouchableWithoutFeedback>
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
    paddingBottom: 80,
  },
  content: {
    paddingTop: 350,
    alignItems: 'center',
    marginTop: 50,
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
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    alignSelf: 'flex-start',
    marginLeft: 20,
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
    borderRadius: 10,
    height: 50,
  },
  iconLeft: {
    marginRight: 45,
  },
  iconButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  flagIcon: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  flagListContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  flagItem: {
    width: 30,
    height: 20,
    marginHorizontal: 10,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 5,
  },
});
