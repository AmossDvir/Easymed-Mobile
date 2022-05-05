import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Button,
} from 'react-native';
import { PermissionsAndroid } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import styles from './Styling';
import MenuBar from './MenuBar';

const App = () => {
  async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Example App',
          message: 'Example App access to your location ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
        // alert("You can use the location");
      } else {
        console.log(granted + 'hiiiiii');
        // alert("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }


  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [renderedList, setRenderedList] = useState(<Text></Text>);

  const getHospitals = async () => {
    const {data} = await axios.get(
      'https://easymed-app.herokuapp.com/by_params/?radius=20&care=All+Types&er=All+Institutes&north=351924458&east=31779513',
    );
    console.log("HHH"+data);
    setRenderedList(
      
      data.map(hospital => <Text style={styles.defaultFont} key={hospital.name}>{hospital.name}</Text>),
    );
    // console.log(data);
  };

  const requestLocation = (teste = '') => {
    setLoading(true);
    setLocation(null);
    requestLocationPermission();
    const config = {
      enableHighAccuracy: true,
      timeout: 2000,
      maximumAge: 3600000,
    };
    Geolocation.getCurrentPosition(
      loc => setLocation(loc),
      error => console.log(error),
      config,
    );
  };

  useEffect(() => console.log(location), [location]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <View>

      <MenuBar></MenuBar>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View>
          <MapView
            showsUserLocation={true}
            style={styles.map}
            animateToNavigation={{
              latitude: location ? location.coords.latitude : 37.78825,
              longitude: location ? location.coords.longitude : -122.4324,
            }}>
            <MapView.Marker
              coordinate={{
                latitude: location ? location.coords.latitude : 37.78825,
                longitude: location ? location.coords.longitude : -122.4324,
              }}
              title={'title'}
              description={'description'}
            />
          </MapView>
        </View>

        <View
          style={{marginTop: 10, padding: 10, borderRadius: 10, width: '100%'}}>
          <Button onPress={requestLocation} title="Get Location" />
        </View>
        <View>{renderedList}</View>
        <Text style={styles.button1}>Click to get a list of hospitals:</Text>
        <Button title="Click Me!" onPress={getHospitals}></Button>
      </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;
