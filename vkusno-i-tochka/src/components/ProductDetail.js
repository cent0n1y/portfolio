import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Alert, FlatList, Dimensions, ScrollView } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { GestureHandlerRootView, PanGestureHandler, TapGestureHandler, LongPressGestureHandler, State } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const ProductDetail = ({ route, navigation }) => {
  const { product, products } = route.params;
  const [scale, setScale] = useState(1);

  // Обработка свайпа вниз
  const handleSwipeDown = ({ nativeEvent }) => {
    if (nativeEvent.translationY > 50) {
      navigation.goBack();
    }
  };

  // Обработка двойного нажатия для увеличения изображения
  const handleDoubleTap = ({ nativeEvent }) => {
    if (nativeEvent.state === State.ACTIVE) {
      setScale(scale === 1 ? 1.5 : 1); // Увеличение/уменьшение изображения
    }
  };

  // Обработка долгого нажатия для вывода информации
  const handleLongPress = ({ nativeEvent }) => {
    if (nativeEvent.state === State.ACTIVE) {
      Alert.alert("Product Info", "This is a popular item on our menu, prepared with top-quality ingredients!");
    }
  };

  // Рендеринг каждого элемента FlatList
  const renderItem = ({ item }) => (
    <TapGestureHandler onHandlerStateChange={handleDoubleTap} numberOfTaps={2}>
      <LongPressGestureHandler onHandlerStateChange={handleLongPress} minDurationMs={800}>
        <View style={[styles.imageContainer, { transform: [{ scale }] }]}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
      </LongPressGestureHandler>
    </TapGestureHandler>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Свайп вниз для закрытия */}
      <PanGestureHandler onGestureEvent={handleSwipeDown}>
        <View style={styles.container}>
          {/* Отображение изображения товара с жестами */}
          <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false} // Убираем индикатор прокрутки
          />
          
          {/* Информация о товаре */}
          <ScrollView contentContainerStyle={styles.detailsContainer}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
            <Text style={styles.productDescription}>
              {product.description || 'This is a delicious item from our popular menu, loved by many for its unique taste and quality.'}
            </Text>
          </ScrollView>
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  imageContainer: {
    width: width,
    height: 300, // Убедитесь, что высота контейнера с картинкой задана
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%', // Картинка заполняет контейнер
    resizeMode: 'contain', // Можно изменить на 'cover' или 'contain' в зависимости от нужд
  },
  detailsContainer: {
    padding: SIZES.padding,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: SIZES.radius,
    borderTopRightRadius: SIZES.radius,
    marginTop: -SIZES.radius,
  },
  productName: {
    fontSize: SIZES.h1,
    fontWeight: 'bold',
    color: COLORS.secondary,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: SIZES.h2,
    color: COLORS.primary,
    textAlign: 'center',
    marginVertical: 10,
  },
  productDescription: {
    fontSize: SIZES.body3,
    color: COLORS.gray,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default ProductDetail;
