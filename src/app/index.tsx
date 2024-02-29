import { useRef, useState } from 'react'
import { FlatList, SectionList, Text, View } from 'react-native'

import { Category, Header, Product } from '@/components'

import { CATEGORIES, MENU } from '@/utils/data/products'
import { Link } from 'expo-router'

const Home = () => {
  const [category, setCategory] = useState(CATEGORIES[0])

  const sectionListRef = useRef<SectionList>(null)

  const handleCategorySelect = (selected: string) => {
    setCategory(selected)

    const sectionIndex = CATEGORIES.findIndex(
      (category) => category === selected,
    )

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0,
      })
    }
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartQuantity={1} />

      <FlatList
        horizontal
        data={CATEGORIES}
        className="max-h-10 mt-5"
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        renderItem={({ item }) => (
          <Category
            title={item}
            isSelected={item === category}
            onPress={() => handleCategorySelect(item)}
          />
        )}
      />

      <SectionList
        sections={MENU}
        ref={sectionListRef}
        className="flex-1 p-5"
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} asChild>
            <Product data={item} />
          </Link>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-xl text-white font-heading mt-8 mb-3">
            {title}
          </Text>
        )}
      />
    </View>
  )
}

export default Home
