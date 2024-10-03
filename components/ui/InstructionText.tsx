import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Colors from '../../constants/colors';

interface InstructionTextProps {
  name: string;
}

function InstructionText(props: InstructionTextProps) {
  return <Text style={styles.instructionText}>{props.name}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: "Poppins-Regular"
  },
});
