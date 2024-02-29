import { Link, LinkProps } from 'expo-router'

type Props = LinkProps<string> & {
  title: string
}

export const LinkButton = ({ title, ...rest }: Props) => (
  <Link className="text-slate-300 text-center text-base font-body" {...rest}>
    {title}
  </Link>
)
