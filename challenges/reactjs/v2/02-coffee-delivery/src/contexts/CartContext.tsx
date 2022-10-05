import { createContext, ReactNode, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';

export interface CartItemData {
  name: string;
  amount: number;
  price: number;
}

export interface CartContextType {
  cart: CartItemData[];
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProvidersProps {
  children: ReactNode;
}

const data = [
  {
    id: uuidV4(),
    name: 'Expresso Tradicional',
    amount: 2,
    price: 990,
  },
  {
    id: uuidV4(),
    name: 'Expresso Americano',
    amount: 1,
    price: 990,
  },
  {
    id: uuidV4(),
    name: 'Expresso Cremoso',
    amount: 1,
    price: 990,
  },
];

export function CartContextProvider({ children }: CartContextProvidersProps) {
  const [cart, setCart] = useState<CartItemData[]>(data);

  return <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>;
}
