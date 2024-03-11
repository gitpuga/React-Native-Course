import { useState } from 'react';
import { View, Text, VirtualizedList, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator } from 'react-native';
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isStatusBarHidden, setIsStatusBarHidden] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 60 }}>
      <ActivityIndicator 
        color="black"
        size="large"
      />
      <ActivityIndicator 
        color="green"
        size="small"
        animating={false}
      />
    </View>
  );
}  