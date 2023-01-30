
import { Header } from "@components/Header";
import { Button, View } from "react-native";


export function Main({ navigation }: any) {
    return(
       <View>
            <Header textMain="Enzo Lanzellotti" textSecondary="Estudante fullstack" />
            <Button title="Minha stack" onPress={() => navigation.navigate("stack")}/>
       </View>
    )
}