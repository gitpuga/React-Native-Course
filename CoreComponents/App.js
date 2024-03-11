import { useState } from 'react';
import { View, Text, VirtualizedList, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar } from 'react-native';
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isStatusBarHidden, setIsStatusBarHidden] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 60 }}>
      <StatusBar 
        backgroundColor="white"
        barStyle="dark-content"
        hidden={isStatusBarHidden}
      />
      <Button 
        title="Status bar toggle" 
        color="black"
        onPress={
          () => (isStatusBarHidden == false) ? 
          setIsStatusBarHidden(true) : setIsStatusBarHidden(false)
        }
      />
    </View>
  );
}  