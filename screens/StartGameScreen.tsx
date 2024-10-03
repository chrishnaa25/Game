import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';


interface StartGameScreenProps {
  onPickNumber: (number: number) => void;
}

function StartGameScreen(props: StartGameScreenProps) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText: string) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber, 10);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number!',
        'Entered number must be in the range of 1 to 99',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}],
      );
      return;
    }
    props.onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title name="Guess my Number" />
      <Card>
        <InstructionText name="Enter a Number" />
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttons}>
            <PrimaryButton onPress={resetInputHandler}>
              <Text style={styles.buttonText} >Reset</Text>
            </PrimaryButton>
          </View>
          <View style={styles.buttons}>
            <PrimaryButton onPress={confirmInputHandler}>
              <Text style={styles.buttonText} >Confirm</Text>
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  numberInput: {
    fontFamily: "Poppins-Regular",
    height: 60,
    width: 50,
    fontSize: 28,
    borderBottomColor: Colors.accent500,
    color: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 10,
    textAlign: 'center',
    paddingTop: 5
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttons: {
    flex: 1,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: "Poppins-Regular"
  },
});

export default StartGameScreen;
