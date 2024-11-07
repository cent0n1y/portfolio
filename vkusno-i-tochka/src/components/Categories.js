import React from 'react'
import { Text, Image, TouchableOpacity, View, StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants'
import { categories } from '../categories'

const Categories = () => {
  return (
    <View style={{ paddingTop: 60 }}>
      <Text style={styles.title}>Голодный?</Text>
      <Text style={styles.subtitle}>Тогда тебе к нам!</Text>

      <View style={styles.categoriesContainer}>
        {categories.map((cat, idx) => (
          <View key={`categories ${idx}`} style={styles.categoryItem}>
            <TouchableOpacity
              underlayColor={COLORS.secondary}
              style={styles.categoryButton}
            >
              <View style={styles.categoryContent}>
                <Image source={{ uri: cat.image }} style={styles.categoryImage} />
                <Text style={styles.categoryText}>{cat.name}</Text>
              </View>
            </TouchableOpacity>
          </View>
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
  subtitle: {
    fontSize: SIZES.h1,
    color: COLORS.white,
  },
  categoriesContainer: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '30%',
    marginBottom: 20,
  },
  categoryButton: {
    height: 100,
    justifyContent: 'center',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 10,
  },
  categoryContent: {
    alignItems: 'center',
  },
  categoryImage: {
    width: 50,
    height: 50,
  },
  categoryText: {
    fontSize: SIZES.h4,
    color: COLORS.white,
    marginTop: 10,
    textAlign: 'center',
  },
})

export default Categories
