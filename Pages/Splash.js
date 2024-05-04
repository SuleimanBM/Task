import { Image, StyleSheet, View } from "react-native";
import Spartan from "../assets/Spartan+.png"

export default function SplashScreen(){
    return(
        <View style={styles.container}>
            <Image source={Spartan}  style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1e1e1e"
    },
    image:{
        width: 150,
        height: 150,
        borderRadius: 20,
    }
})