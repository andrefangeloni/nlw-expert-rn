import { View } from 'react-native'

import { Header } from '@/components'

const Home = () => (
  <View className="flex-1 pt-8">
    <Header title="Faça seu pedido" cartQuantity={1} />
  </View>
)

export default Home
