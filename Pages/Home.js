import { Text, StyleSheet, View } from "react-native";
import Spartan from "../assets/Spartan+.png"

export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <Text >Welcome to Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    image:{
        width: 150,
        height: 150,
        borderRadius: 20,
    }
})