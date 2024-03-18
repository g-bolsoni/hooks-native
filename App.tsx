import { StatusBar } from 'expo-status-bar';
import { useReducer, useRef } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const ActionsTypes = {
  RESET: "RESET",
  WRITE: "WRITE",

}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ActionsTypes.RESET:
      state.textInputRef.current.setNativeProps({ text: '' });
      return state;

    case ActionsTypes.WRITE:
      state.textInputRef.current.setNativeProps({ text: 'Giovane' });
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

  const resetButton = () => {
    dispatch({ type: ActionsTypes.RESET });
  }

  const writeButton = () => {
    dispatch({ type: ActionsTypes.WRITE });
  }

  return (
    <View style={styles.container}>
      <TextInput
        ref={state.textInputRef}
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
      <Button
        title='Write'
        onPress={writeButton}
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
