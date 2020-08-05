import React from 'react';
import {
 SafeAreaView,
 StyleSheet,
 View,
 Platform,
 Text,
 Image,
 TouchableOpacity,
 Alert,
} from 'react-native';
import {create} from 'react-test-renderer';
import IndexScreen from '../screens/IndexScreen'; 
/**
* Splash Screen is a view which contains Text or Images that shows when the app first starts.
* It is used when the mobile app requires essential information before its start.
**/
export default class SplashScreen extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     isVisible: true,
   };
 }
 
 hideSplashScreen = () => {
   this.setState({
     isVisible: false,
   });
 };
 
 componentDidMount() {
   setTimeout(() => {
     this.props.navigation.replace('IndexScreen');
   }, 4000);
 }
 
 render() {
   let Splash_Screen = (
     <View style={styles.SplashScreen_RootView}>
       <View style={styles.SplashScreen_ChildView}>
         <Image
           source={require('../assets/splash_icon.png')}
           style={{width: '100%', height: '100%', resizeMode: 'contain'}}
         />
       </View>
     </View>
   );
 
   return Splash_Screen;
 }
}
const styles = StyleSheet.create({
 MainContainer: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   paddingTop: Platform.OS === 'ios' ? 20 : 0,
 },
 
 SplashScreen_RootView: {
   justifyContent: 'center',
   flex: 1,
   margin: 10,
   position: 'absolute',
   width: '100%',
   height: '100%',
 },
 
 SplashScreen_ChildView: {
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#00BCD4',
   flex: 1,
 },
});