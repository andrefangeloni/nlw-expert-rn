import { ReactNode } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

type ButtonProps = TouchableOpacityProps & {
  children: ReactNode
}

type ButtonTextProps = {
  children: ReactNode
}

type ButtonIconProps = {
  children: ReactNode
}

const Button = ({ children, ...rest }: ButtonProps) => (
  <TouchableOpacity
    activeOpacity={0.7}
    className="h-12 bg-lime-400 rounded-md flex-row items-center justify-center"
    {...rest}
  >
    {children}
  </TouchableOpacity>
)

const ButtonText = ({ children }: ButtonTextProps) => (
  <Text className="text-black font-heading text-base mx-2">{children}</Text>
)

const ButtonIcon = ({ children }: ButtonIconProps) => children

Button.Text = ButtonText
Button.Icon = ButtonIcon

export { Button }
