import { View, Text, VirtualizedList, Image, ImageBackground, ScrollView, Button, Pressable } from 'react-native';
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 60 }}>
      <Button 
        title='Press' 
        onPress={() => console.log("Button Pressed")}
        color="midnightblue"
      />
      <Pressable onPress={() => console.log("Image Pressed")}>
        <Image source={logoImg} style={{ width: 300, height: 300 }}/>
      </Pressable>
      <Pressable onPress={() => console.log("Text Pressed")}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum, nisl eu ultricies, nunc nisl aliquam nunc, eget
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum, nisl eu ultricies, nunc nisl aliquam nunc, eget
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum, nisl eu ultricies, nunc nisl aliquam nunc, eget
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum, nisl eu ultricies, nunc nisl aliquam nunc, eget
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum, nisl eu ultricies, nunc nisl aliquam nunc, eget
        </Text>
      </Pressable>
    </View>
  );
}  