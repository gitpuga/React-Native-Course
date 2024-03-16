import { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  ScrollView, 
  Button, 
  Pressable, 
  Modal, 
  StatusBar, 
  ActivityIndicator, 
  Alert 
} from 'react-native';
import LoremIpsum from './components/LoremIpsum';
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isStatusBarHidden, setIsStatusBarHidden] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 60 }}>
      <ScrollView>
        <StatusBar 
          backgroundColor="white"
          barStyle="dark-content"
          hidden={isStatusBarHidden}
        />
        <Pressable onPress={() => {setIsModalVisible(true), console.log("Modal Opened")}}>
          <Text>Open Modal</Text>
        </Pressable>
        <Modal 
          visible={isModalVisible}
          animationType='slide'
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={{ flex: 1, backgroundColor: "black", padding: 60 }}>
            <StatusBar 
              backgroundColor="black"
              barStyle="light-content"
            />
            <Text style={{ color: "white" }}>Modal Content</Text>
            <Button 
              title="Close Modal"
              onPress={() => setIsModalVisible(false)}
            />
            <ActivityIndicator size="large" color="lightgreen" />
          </View>
        </Modal>
        <Button
          title="Alert" 
          onPress={() => 
            Alert.alert("Invalid Data!", "DOB Incorrect", [
              {
                text: 'OK',
              },
              {
                text: 'Cancel',
              },
            ])
          }
        />
        <Button
          title="Status bar toggle"
          onPress={
            () => isStatusBarHidden == false ? 
              setIsStatusBarHidden(true) : setIsStatusBarHidden(false)}
        />
        <LoremIpsum />
        <Image source={logoImg} style={{ width: 300, height: 300}}/>
      </ScrollView>
    </View>
  );
}  