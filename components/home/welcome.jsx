import React from "react";
import styles from "./welcome_styles";
import { View,Text } from "react-native";

import { COLORS, SIZES } from "../../constants";
import {Feather,Ionicons} from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Welcome = () =>{
    const navigation = useNavigation()
    return (
        <View>
        <View style={styles.container}>
            <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
                {" "}
                Find The Most
                </Text>
            <Text style={styles.welcomeTxt(COLORS.primary,0)}>
                {" "}
                Luxurious Furniture
                </Text>
        </View>

        <View style={styles.searchContainer}>
            <TouchableOpacity>
                <Feather
                name="search"
                size={24} 
                style={styles.searchIcon}
                />
            </TouchableOpacity>
            <View style={styles.searchWrapper}>
                <TextInput
                value=""
                onPressIn={()=>navigation.navigate("Search")}
                placeholder="what are you looking for?"
                style={styles.searchInput}
                />
            </View>
            <View>
            <TouchableOpacity style={styles.searchButton}>
                <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.black}/>
            </TouchableOpacity>
        </View>
        </View>
       
        </View>
    )
}

export default Welcome