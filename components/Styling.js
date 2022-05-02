import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#a7d4b4',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  topLogo: {
    width: 170,
    height: 170,
    resizeMode: 'contain',
  },
  button1: {paddingBottom: '15%'},
  scrollContent: {alignItems: 'center', justifyContent: 'center'},

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2.3,
  },
  hamburgerMenu: {marginLeft: '20'},

  emergencyButton: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },

  emergencyActive:{
    backgroundColor:'red',
    borderRadius:80, 
    overflow:'hidden'
    },
  menuBar:{
    backgroundColor:'white',
    borderWidth:1,
    height:'40%',
    flexDirection:'row',
    // position: 'absolute',
    // left:0,
    // top:0,
// height:100
    // width:'80%',
  }
});

export default styles;
