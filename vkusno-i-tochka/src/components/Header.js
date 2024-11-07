import React from 'react'
import { Image, Linking, TouchableOpacity, View, StyleSheet } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Linking.openURL('https://google.com')}>
        <Image
          source={{
            uri: 'https://vkusnoitochka.ru/pages/company/media/logo.png',
          }}
          style={styles.logo}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={{
            uri: 'https://findicons.com/files/icons/1700/2d/512/cart.png',
          }}
          style={styles.cart}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 150,
  },
  cart: {
    width: 45,
    height: 45,
  },
})

export default Header
