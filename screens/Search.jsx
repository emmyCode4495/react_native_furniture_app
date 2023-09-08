import React from 'react'
import {View,TextInput, SafeAreaView,TouchableOpacity} from 'react-native'
import { COLORS,SIZES } from '../constants'
import styles from  './search_styles'
import {Feather,Ionicons} from '@expo/vector-icons'

const Search = ()=>{
    return( 
        <SafeAreaView style={{marginTop:30}}>
            
        <View style={styles.searchContainer}>
            <TouchableOpacity>
                <Ionicons
                name="camera-outline"
                size={24} 
                style={styles.searchIcon}
                />
            </TouchableOpacity>
            <View style={styles.searchWrapper}>
                <TextInput
                value=""
                placeholder="what are you looking for?"
                style={styles.searchInput}
                />
            </View>
            <View>
            <TouchableOpacity style={styles.searchButton}>
                <Feather
                name="search"size={SIZES.xLarge} color={COLORS.black}/>
            </TouchableOpacity>
        </View>
        </View>
       
        </SafeAreaView>
    )
}

export default Search