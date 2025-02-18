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

To implement **infinite scrolling** in a React Native app, you typically use the `FlatList` component with its built-in `onEndReached` property to load more data when the user scrolls to the end of the list. Here's a step-by-step guide:

---
### How do you implement a infinite scrolling in react native
### **Steps to Implement Infinite Scrolling**

1. **Set up state to store data and loading status.**  
   You'll need a state to store the list data and a flag to indicate if more data is being loaded.

2. **Fetch initial data and additional data.**  
   Use an API or a local data source to fetch the initial data and load more data as needed.

3. **Configure `FlatList` for infinite scrolling.**  
   Use the `onEndReached` property to detect when the user scrolls near the end of the list.

---

### **Code Example:**

```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

const InfiniteScrollExample = () => {
  const [data, setData] = useState([]); // State for list data
  const [page, setPage] = useState(1); // State for the current page
  const [loading, setLoading] = useState(false); // State for loading indicator

  // Simulate an API call to fetch data
  const fetchData = async (page) => {
    setLoading(true);
    const newData = Array.from({ length: 10 }, (_, i) => `Item ${i + 1 + (page - 1) * 10}`);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    setData((prevData) => [...prevData, ...newData]); // Append new data to the list
    setLoading(false);
  };

  // Fetch initial data
  useEffect(() => {
    fetchData(page);
  }, [page]);

  // Function to load more data when the user scrolls to the end
  const loadMoreData = () => {
    if (!loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  // Render each item in the list
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data} // Data for the list
        keyExtractor={(item, index) => index.toString()} // Unique key for each item
        renderItem={renderItem} // Render function for each item
        onEndReached={loadMoreData} // Trigger load more when near the end
        onEndReachedThreshold={0.5} // How far from the end to trigger (50% of the viewport)
        ListFooterComponent={
          loading && (
            <View style={styles.footer}>
              <ActivityIndicator size="small" color="blue" />
            </View>
          )
        } // Show loading spinner when fetching more data
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  itemContainer: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  itemText: { fontSize: 16 },
  footer: { padding: 10, alignItems: 'center' },
});

export default InfiniteScrollExample;
```

---

### **Key Components Explained:**

1. **`FlatList`:**  
   - Displays the list of data.
   - `onEndReached`: A callback triggered when the user scrolls near the bottom of the list.
   - `onEndReachedThreshold`: Determines how far from the bottom to trigger `onEndReached` (e.g., `0.5` means 50% of the visible list height).

2. **Pagination Logic:**  
   - Maintain a `page` state to track the current page.
   - Fetch more data when `onEndReached` is called.

3. **Loading Indicator:**  
   - Use `ActivityIndicator` to display a spinner while fetching more data.
   - Append the loading spinner as the `ListFooterComponent`.

4. **Simulated API:**  
   - In this example, `fetchData` generates dummy data. Replace it with your actual API call.

---

### **Best Practices:**

- **Debounce `onEndReached`:**  
  Prevent multiple rapid calls by debouncing or throttling `onEndReached`.

- **Check for End of Data:**  
  Stop fetching data when no more data is available (e.g., based on total pages or response from API).

- **Optimize Performance:**  
  Use `keyExtractor` for efficient rendering and consider enabling `windowSize` and `initialNumToRender` for large lists.

- **Error Handling:**  
  Handle API failures gracefully with error messages or retry options.

---

This approach ensures smooth infinite scrolling in your React Native application.

                                                                      