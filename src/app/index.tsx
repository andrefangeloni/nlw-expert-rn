import { FlatList, View } from 'react-native'

import { Category, Header } from '@/components'

import { CATEGORIES } from '@/utils/data/products'
import { useState } from 'react'

const Home = () => {
  const [category, setCategory] = useState(CATEGORIES[0])

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartQuantity={1} />

      <FlatList
        horizontal
        data={CATEGORIES}
        className="max-h-10 mt-5"
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Category
            title={item}
            isSelected={item === category}
            onPress={() => setCategory(item)}
          />
        )}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </View>
  )
}

export default Home
