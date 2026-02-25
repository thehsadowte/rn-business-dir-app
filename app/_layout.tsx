import { Stack } from "expo-router";
import {useFonts} from "expo-font";
import {ActivityIndicator} from "react-native";

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        'mainFont': require('./../assets/fonts/Montserrat-Regular.ttf'),
        'boldFont': require('./../assets/fonts/Montserrat-Bold.ttf'),
        'lightFont': require('./../assets/fonts/Montserrat-Light.ttf'),
        }
    );

    if(!fontsLoaded) {
        return <ActivityIndicator/>
    }
  return <Stack />;
}
