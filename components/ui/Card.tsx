import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../constants/colors';

interface CardProps {
  children: React.ReactNode;
}

function Card(props: CardProps) {
  return <View style={styles.card}>{props.children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary800,
    padding: 16,
    marginHorizontal: 24,
    marginTop: 36,
    borderRadius: 8,
    elevation: 4,
  },
});
