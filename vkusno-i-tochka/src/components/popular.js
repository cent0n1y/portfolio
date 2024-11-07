import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants'
import { popular } from '../popular'
import ProductItem from './ProductItem'

const Popular = ({ navigation }) => {
  return (
    <View style={{ paddingTop: 20 }}>
      <Text style={styles.title}>Популярное</Text>
      <View style={styles.productsContainer}>
        {popular.map((product, idx) => (
          <ProductItem
            key={idx}
            product={product}
            onPress={() =>
              navigation.navigate('ProductDetail', { product }) // Переход на экран с описанием
            }
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: SIZES.h1,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  productsContainer: {
    marginTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    color: COLORS.secondary
  },
})

export default Popular
