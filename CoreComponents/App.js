import { useState } from 'react';
import { View, Text, VirtualizedList, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert } from 'react-native';
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
        <Pressable onPress={() => setIsModalVisible(true)}>
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
        <Text>
          maecenas sed enim ut sem viverra aliquet eget sit amet tellus 
          cras adipiscing enim eu turpis egestas pretium aenean pharetra 
          magna ac placerat vestibulum lectus mauris ultrices eros in cursus 
          turpis massa tincidunt dui ut ornare lectus sit amet est placerat in 
          egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut 
          porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum 
          faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis 
          eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat 
          nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam 
          ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra 
          tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque 
          elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue 
          eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus
           et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed
        </Text>
        <Image source={logoImg} style={{ width: 300, height: 300}}/>
      </ScrollView>
    </View>
  );
}  