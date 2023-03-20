import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableHighlight, Text, View, SafeAreaView, Button} from 'react-native';


export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>FDM Wellbeing</Text>
      <Text>FDM Wellbeing</Text>
      <Text>FDM Wellbeing</Text>
      <TouchableHighlight onPress={() => console.log("image tapped")}>
        <Button title='Login'></Button>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => console.log("image tapped")}>
        <Button title='Sign up'></Button>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
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
