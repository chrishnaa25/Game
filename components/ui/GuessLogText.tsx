import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

interface GuessLogTextProps {
    roundNumber: number;
    guess: number;
}

function GuessLogText (props: GuessLogTextProps) {
    return <View style={styles.rootContainer}>
        <Text style={styles.text}>#{props.roundNumber}</Text>
        <Text style={styles.text}>Opponent's Guess: {props.guess}</Text>
    </View>
}

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding:12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        elevation: 4,
        
    },
    text: {
        color: "black",
        fontFamily: "Poppins-Regular",
        
    }
})

export default GuessLogText;