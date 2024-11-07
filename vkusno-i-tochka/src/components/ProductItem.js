import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS, SIZES } from '../../constants'

const ProductItem = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '45%',
    marginBottom: 20,
    backgroundColor: COLORS.grey,
    borderRadius: SIZES.radius,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: SIZES.radius,
  },
  name: {
    fontSize: SIZES.h4,
    color: COLORS.white,
    marginTop: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: SIZES.h3,
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: 5,
  },
})

export default ProductItem
