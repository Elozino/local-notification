import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useRef } from "react";
import { Text, View, Button, Platform, StyleSheet } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: "Here is the notification body",
        data: { data: "goes here" },
      },
      trigger: { seconds: 120 },
    });
  }

  return (
    <View
      style={styles.container}
    >
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>Your device is {Device.osName}</Text>
      </View>
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          console.log('first')
          await schedulePushNotification();
        }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
