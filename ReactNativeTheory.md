# ScrollView Vs Flatlist
    ScrollView                                                  Flatlist
It does not provide any memory management.	            It provides automatic memory management.
It loads all the content at once.	                    It loads content as the window scrolled.
It results in slow rendering and increased 
memory usage.It does not affect the rendering speed. 
It maintains the component state.	                    It does not maintain the component state.
It renders generic content in a scrollable container.	It renders a list of similar items.

Can be imported from react native as:                    Can be imported from React Native as: 
import {ScrollView} from ‘react-native’;	             import {FlatList} from ‘react-native’;


# How to create Push Notification in app

A. using firebase 
# Install & setup the app module
yarn add @react-native-firebase/app
# Install the authentication module
yarn add @react-native-firebase/auth

create google firebase account
create app on google firebase for android or ios oe web

create app will ask
package name: package name from AndroidManifest.xml - Package="cjfk..." value
give a name 
it will provide google service file to download - 
click next->next->continue to console

as downloaded google-service.json file inside /android/app
file will be saved as android/app/google-service.json

change: root/build.gradle
classpath 'com.google.gms.google-services:4.3.8'

change app/build.gradle
apply plugin: 'com.google.gms.google-services'
implementation plateform('com.google.firebase:firebase-bom:28.2.1')

got to App.js file
import messaging from '@react-native-firebase/messaging'


give user permission

const getToken = async () =>  {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

 const token = await messaging.getToken();
 console.log("token", token)
}
 
call this method in useEffect
useEffect(()=>{
    getToken()
})

use the token to call the rest api

go to postman or in your app as well

add the url
then in headers section add  key Authorization value the token which we have in our firebase account under setting->cloud messaging with =>Bearer+Token
 in body section add the payload as 
 {
    "to": "token generated from getToken method"
    "notification": {
        "body": "this is the notification message",
        "title":"zomato"

    }
    "data":{
        "data_new": "Test Data" //this we can retrive like other info
    }
 }

 click send - done you have recieved the notification 
 if we want to run this notification when app is running foreground

 the above set will show the notification in background or when app is closed

for foreground we can add 
import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';

function App() {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage)); // we will get the data in stringify we can use this data to show on ui 
    });

    return unsubscribe;
  }, []);
}

refer the link : https://rnfirebase.io/messaging/usage


# How to integrate google maps in react native

install react-native-cli
install react-naive project - react-native init reactNativeMappApp
run react-native run-ios or react-native run-android

install react native maps
npm i react-native-maps
react-native link react-native-maps

https://www.freecodecamp.org/news/how-to-integrate-maps-in-react-native-using-react-native-maps-5745490fe055/ - see this

https://www.ideamotive.co/react-native/interview#senior - interview question

                                                                      