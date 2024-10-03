import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/colors';

interface PrimaryButtonProps {
  // name: string;
  onPress: (a: any) => void;
  children: React.ReactNode;
}

function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={props.onPress}
        android_ripple={{color: Colors.primary600}}>
          {/* <Text style={styles.buttonText}>{props.name}</Text>        */}
          <View>{props.children}</View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  
});

export default PrimaryButton;
