import { StatusBar } from "expo-status-bar";
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <StatusBar style="auto" />
          <Text style={styles.title}>Click over form to close keyboard!</Text>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
            }}
          >
            {[...Array(20).keys()].map((i) => (
              <TextInput style={styles.input} key={i} placeholder={String(i)} />
            ))}

            <Button title="DISMISS" onPress={Keyboard.dismiss} />
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "ios" ? 80 : 40,
  },
  title: {
    fontSize: 16,
    paddingVertical: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: "rgba(0,0,0,0.6)",
  },
  content: {
    flex: 1,
  },
  input: {
    backgroundColor: "rgba(0,0,0,0.1)",
    height: 40,
    marginHorizontal: 16,
    marginBottom: 24,
  },
});
