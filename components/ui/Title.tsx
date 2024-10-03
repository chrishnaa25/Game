import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface TitleProps {
  name: string;
}

function Title(props: TitleProps) {
  return <Text style={styles.title}>{props.name}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    
    fontSize: 24,
    fontFamily: "Poppins-Regular", 
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,  
  },
});
