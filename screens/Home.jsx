import React from 'react'
import {View,Text, TouchableOpacity, ScrollView} from 'react-native'
import styles from './home_styles'
import {Ionicons,Fontisto} from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import Welcome from '../components/home/welcome'
import Carousel from '../components/home/Carousel'

const Home = ()=>{
    return(
        <SafeAreaView style={{marginTop:30}}>
            <View style={styles.appBarWrapper}>
                <View style={styles.appBar}>
                    <Ionicons name="location-outline" size={24}/>
                    <Text style={styles.location}>Shanghai China</Text>
                    <View style={{alignItems:'flex-end'}}>
                        <View style={styles.cartCount}>
                            <Text style={styles.cartNumber}>0</Text>
                        </View>
                        <TouchableOpacity>
                        <Fontisto name="shopping-bag" size={24}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView>
                <Welcome/>
                <Carousel/>
            </ScrollView>
        </SafeAreaView>
        
    ) 
};

export default Home