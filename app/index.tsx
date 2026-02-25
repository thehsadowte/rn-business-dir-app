import {Image, StyleSheet, Text, View} from "react-native";
import Colors from "@/services/Colors";
import {useNavigation} from "expo-router";
import {useEffect} from "react";

export default function Index() {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, )
  return (
    <View
        style={styles.container}
    >
        <Image style={styles.welcomeImage} source={require('./../assets/images/welcome-transparent.png')}/>

        <Text style={styles.heading}>Welcome to</Text>

        <Text style={[styles.heading, {marginBottom: 30}]}>Business Directory</Text>

        <View style={styles.textDiv}>
            <Text style={styles.textDisc}>Discover thousands of local businesses all in one place</Text>
            <View style={styles.signView}>
                <Image style={styles.googleIcon} source={require('./../assets/images/google.png')}></Image>
                <Text style={styles.signText}>Sing in with Google</Text>
            </View>
            <View style={styles.skipView}>
                <Text style={styles.skipText}>Skip</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.PRIMARY,
        height: '100%',
    },
    welcomeImage: {
        width: 370,
        height: 310,
        marginTop: 100,
        marginBottom: 25,
        marginHorizontal: "auto"

    },
    heading: {
        fontFamily: 'boldFont',
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
    },
    textDiv: {
        padding: 20,
        backgroundColor: 'white',
        margin: 20,
        borderRadius: 20,

    },
    textDisc:{
        fontFamily: 'mainFont',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,

    },
    googleIcon:{
        width:20,
        height:20,
    },
    signView: {
        borderWidth: 1,
        borderRadius: 99,
        padding: 2,
        marginBottom: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap:8,
    },
    skipView: {
        borderWidth: 1,
        borderRadius: 99,
        padding: 2,
        marginBottom: 5,
        backgroundColor: Colors.PRIMARY,
    },
    signText: {
        fontFamily: 'mainFont',
        fontSize: 18,
        textAlign: 'center',

    },
    skipText: {
        fontFamily: 'mainFont',
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    }
})
