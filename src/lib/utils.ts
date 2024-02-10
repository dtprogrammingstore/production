import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getStripeOAuthLink(
  accountType: 'agency' | 'subaccount',
  state: string
) {
  return `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_PVrNcn6e0mfSET8Q9UsNhcQpsOGBNPTP&scope=read_write&redirect_uri=${process.env.NEXT_PUBLIC_URL}${accountType}&state=${state}`
}
