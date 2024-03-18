import { StatusBar } from 'expo-status-bar';
import { useReducer, useRef } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const ActionsTypes = {
  RESET: "RESET",
  WRITE: "WRITE",

}

const reducer = (state, action) => {
  switch (action.type) {
    case ActionsTypes.RESET:
      if (state.current) {
        state.textInputRef.current.setNativeProps({ text: '' });
      }
      return state;

    case ActionsTypes.WRITE:
      state.textInputRef.current.setNativeProps({ text: 'Felipe' });
      return state;

    default:
      break;
  }
}

export default function App() {
  const initialState = {
    textInputRef: useRef<TextInput>(null),
  }
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <View style={styles.container}>
      <TextInput
        ref={textInputRef}
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          marginTop: 20,
          padding: 10
        }}
      >

      </TextInput>

      <Button
        title='Reset'
        onPress={resetButton}
      />
      <StatusBar style="auto" />
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
