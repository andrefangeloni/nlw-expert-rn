import { Alert, ScrollView, Text, View } from 'react-native'
import colors from 'tailwindcss/colors'
import { Feather } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Button, Header, Input, LinkButton, Product } from '@/components'

import { ProductCartProps, useCartStore } from '@/store/cart-store'

import { formatCurrency } from '@/utils'

const Cart = () => {
  const cartStore = useCartStore()

  const total = formatCurrency(
    cartStore.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    ),
  )

  const handleProductRemove = (product: ProductCartProps) => {
    Alert.alert('Atenção', `Deseja remover o ${product.title} do carrinho?`, [
      {
        text: 'Não',
      },
      {
        text: 'Sim',
        onPress: () => cartStore.remove(product.id),
      },
    ])
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho" />

      <KeyboardAwareScrollView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className="p-5 flex-1">
            {cartStore.products.length > 0 ? (
              <View className="border-b border-slate-700">
                {cartStore.products.map((product) => (
                  <Product
                    key={product.id}
                    data={product}
                    onPress={() => handleProductRemove(product)}
                  />
                ))}
              </View>
            ) : (
              <Text className="font-body text-slate-400 text-center my-8">
                Seu carrinho está vazio
              </Text>
            )}

            <View className="flex-row gap-2 items-center mt-5 mb-4 ml-2">
              <Text className="text-white text-xl font-subtitle">Total:</Text>
              <Text className="text-lime-400 text-2xl font-heading">
                {total}
              </Text>
            </View>

            <Input
              multiline
              textAlignVertical="top"
              placeholderTextColor={colors.slate[400]}
              placeholder="Informe o endereço de entrega com rua, bairro, CEP, número e complemento..."
              className="h-32 bg-slate-800 rounded-md px-4 py-3 font-body text-sm text-white"
            />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>

      <View className="p-5 gap-5">
        <Button>
          <Button.Text>Enviar pedido</Button.Text>
          <Button.Icon>
            <Feather name="arrow-right-circle" size={20} />
          </Button.Icon>
        </Button>

        <LinkButton title="Voltar ao cardáprio" href="/" />
      </View>
    </View>
  )
}

export default Cart
