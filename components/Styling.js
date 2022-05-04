import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#3C3C3C',
    color:'white'
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
  scrollContent: {alignItems: 'center',paddingTop:30, marginHorizontal:'5%'},

  map: {
    width: Dimensions.get('window').width*0.9,
    height: Dimensions.get('window').height / 2.3,
    marginHorizontal:'auto'
  },
  hamburgerMenu: {marginLeft: '20'},

  emergencyButton: {
    width: 65,
    height: 65,
    resizeMode: 'contain',
  },

  emergencyActive:{
    backgroundColor:'#FE405C',
    borderRadius:80, 
    overflow:'hidden',
    },
  menuBar:{
    backgroundColor:'#a7d4b4',
    borderWidth:1,
    height:75,
    // flexDirection:'row',
    // position: 'absolute',
    // left:0,
    // top:0,
// height:100
    // width:'80%',
  },
  defaultFont:{color:'white' }
});

export default styles;
