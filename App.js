// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  // const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  // function goalInputHandler(enteredText) {
  //   // console.log(enteredText);
  //   setEnteredGoalText(enteredText);
  // }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  return (
    // <View style={styles.container}>
    //   <View>
    //     <Text style={styles.dummyText}>Another text</Text>
    //   </View>
    //   <Text style={styles.dummyText}>Hello!!!!</Text>
    //   <Button title="Tap me" />
    //   {/* <StatusBar style="auto" /> */}
    // </View>
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      {/* <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your cource goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View> */}
      <View style={styles.goalsContainer}>
        {/* <Text>List of goals....</Text> */}
        {/* <ScrollView>
          {courseGoals.map((goal) => (
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              // <View style={styles.goalItem}>
              //   <Text style={styles.goalText}>{itemData.item.text}</Text>
              // </View>
              <GoalItem text={itemData.item.text} />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  // inputContainer: {
  //   flex: 1,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   marginBottom: 24,
  //   borderBottomWidth: 1,
  //   borderBottomColor: "#cccccc",
  // },
  // textInput: {
  //   borderWidth: 1,
  //   borderColor: "#cccccc",
  //   width: "70%",
  //   marginRight: 8,
  //   padding: 8,
  // },
  goalsContainer: {
    flex: 5,
  },
  // goalItem: {
  //   margin: 8,
  //   padding: 8,
  //   borderRadius: 6,
  //   backgroundColor: "#5e0acc",
  // },
  // goalText: {
  //   color: "white",
  // },
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // dummyText: {
  //   margin: 16,
  //   borderWidth: 2,
  //   borderColor: "blue",
  //   padding: 16,
  // },
});
