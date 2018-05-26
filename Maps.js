import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.121776,
          longitude: 115.085629
        },
        title: 'Masjid An-Nur',
        subtitle: 'Berlokasi di Jl. Sudirman No.12, Banyuasri, Kec. Buleleng, Kabupaten Buleleng'
      },
      {
        key:2,
        latlng: {
          latitude:-8.126245,
          longitude:  115.083679
        },
        title: 'Masjid Baiturrahman',
        subtitle: 'Berlokasi di JL. Mangga, Baktiseraga, Kec. Buleleng, Kabupaten Buleleng'
      },
      {
        key:3,
        latlng: {
          latitude: -8.555792,
          longitude: 115.142754
        },
        title: 'Masjid Besar Al-Huda',
        subtitle: 'Berlokasi di Jalan Ahmad Yani, Kediri, Abian Tuwung, Kec. Tabanan, Kabupaten Tabanan'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.818916,
          longitude: 115.140687
        },
        title: 'Masjid Agung Palapa',
        subtitle: 'Berlokasi di Dreamland Bali, Jalan Pecatu Indah Resort, Pecatu Bali, Ungasan, Kuta Sel., Kabupaten Badung'
      },
      {
        key:5,
        latlng: {
          latitude:-8.240117,
          longitude: 115.325881
        },
        title: 'Masjid Besar Al Muhajirin',
        subtitle: 'Berlokasi di Kintamani, Kabupaten Bangli'
      },
      {
        key:6,
        latlng: {
          latitude:-8.395082,
          longitude: 114.801650
        },
        title: 'Masjid Al-Huda',
        subtitle: 'Berlokasi di Unnamed Rd, Yeh Sumbul, Mendoyo, Kabupaten Jembrana'
      },
      {
        key:7,
        latlng: {
          latitude:-8.463155,
          longitude: 115.354417
        },
        title: 'Masjid Agung Bangli',
        subtitle: 'Berlokasi di Jl. Lettu Lila No.5, Kawan, Kec. Bangli, Kabupaten Bangli'
      },{
        key:8,
        latlng: {
          latitude: -8.430214,
          longitude: 115.574691
        },
        title: 'Masjid Kampung Saren Jawa',
        subtitle: 'Berlokasi di Kampung Saren, Budakeling, Bebandem, Kabupaten Karangasem'
      },{
        key:9,
        latlng: {
          latitude: -8.171960,
          longitude: 114.435739
        },
        title: 'Masjid Besar Al-Mubarok',
        subtitle: 'Berlokasi di Jl. Raya Gilimanuk, Gilimanuk, Melaya, Kabupaten Jembrana'
      },{
        key:10,
        latlng: {
          latitude: -8.141677,
          longitude: 114.588574
        },
        title: 'Masjid Al Amin',
        subtitle: 'Berlokasi di Pejarakan, Gerokgak Buleleng, Sumberkima, Denpasar, Kabupaten Buleleng'
      },
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Peta Masjid di Bali
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}>Bagus@Copyright </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
