import React from 'react'
import { View, Text, Image } from 'react-native'
import Logo from '../assets/logo.png'

const HeaderComponent = () => {
    return(
        <View style={{marginBottom : 3, backgroundColor : '#fff'}}>
                <View style={{flexDirection : 'row', marginTop : 20, marginLeft : 30, marginBottom : 10}}>
                    <Image source={Logo} style={{width : 40, height : 50}}/>
                    <View style={{marginTop : 5, marginLeft : 15}}>
                        <Text style={{color : 'grey'}}>E-ARIS</Text>
                        <View>
                            <Text style={{color : 'grey', fontWeight : 'bold'}}>Elektronik Antrian informasi dan Persidangan</Text>
                        </View>
                    </View>
                </View>
        </View>
    )
}

export default HeaderComponent;