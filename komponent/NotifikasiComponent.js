import React from 'react'
import { View, Text } from 'react-native'

const NotifikasiComponent = () => {
    return(
        <View style={{marginHorizontal : 20, marginTop : 20}}>
            <Text style={{fontSize : 25}}>Notifikasi</Text>
            <View style={{marginTop : 10}}>
                <View style={{backgroundColor : '#fff', borderRadius : 10}}>
                    <View style={{marginHorizontal : 10, marginTop : 10}}>
                        <Text style={{fontWeight : 'bold', color : 'green'}}>Senin 31 Mei 2021</Text>
                        <Text style={{fontSize : 15, marginBottom : 10}}>Nomor Antrian 1 Telah diambil oleh jenis perkara Pidana</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default NotifikasiComponent