// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Another text</Text>
      </View>
      <Text style={styles.dummyText}>Hello!!!!</Text>
      <Button title="Tap me" />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: { margin: 16, borderWidth: 2, borderColor: "blue", padding: 16 },
});
