import React from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'

const NotifikasiComponent = ({data}) => {
    return(
        <View style={{marginHorizontal : 20, marginTop : 20}}>
            <Text style={{fontSize : 25}}>Notifikasi</Text>
            {
                data.map((list, index) => 
                <View key={index} style={{marginTop : 10}}>
                    <View style={{backgroundColor : '#fff', borderRadius : 10}}>
                        <View style={{marginHorizontal : 20, marginTop : 10}}>
                            <Text style={{fontWeight : 'bold', color : 'green'}}>{moment(list.tanggal).format('DD/MM/YYYY')}</Text>
                            <Text style={{fontSize : 15, marginBottom : 10}}>Nomor Antrian {list.nomor} Telah diambil oleh jenis perkara {list.mejaNama}</Text>
                        </View>
                    </View>
                </View>
                )
            }
        </View>
    )
}

export default NotifikasiComponent