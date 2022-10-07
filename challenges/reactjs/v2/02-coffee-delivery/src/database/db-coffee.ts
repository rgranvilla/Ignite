import { v4 as uuidV4 } from 'uuid';

export interface IProductsDTO {
  id: string;
  type: string[];
  image: string;
  title: string;
  description: string;
  price: number;
  amount: number;
  available: boolean;
}

export const data = [
  {
    id: uuidV4(),
    name: 'Expresso Tradicional',
    image: './expresso.svg',
    amount: 2,
    price: 990,
  },
  {
    id: uuidV4(),
    name: 'Expresso Americano',
    image: './americano.svg',
    amount: 1,
    price: 990,
  },
  {
    id: uuidV4(),
    name: 'Expresso Cremoso',
    image: './expressoCremoso.svg',
    amount: 4,
    price: 990,
  },
];

export const coffees = [
  {
    id: '001',
    type: ['tradicional'],
    image: './expresso.svg',
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 990,
    amount: 10,
    available: true,
  },
  {
    id: '002',
    type: ['tradicional'],
    image: './americano.svg',
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 990,
    amount: 10,
    available: true,
  },
  {
    id: '003',
    type: ['tradicional'],
    image: './expressoCremoso.svg',
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 990,
    amount: 10,
    available: true,
  },
  {
    id: '004',
    type: ['tradicional', 'gelado'],
    image: './cafeGelado.svg',
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 990,
    amount: 10,
    available: true,
  },
  {
    id: '005',
    type: ['tradicional', 'com leite'],
    image: './cafeComLeite.svg',
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 990,
    amount: 10,
    available: true,
  },
  {
    id: '006',
    type: ['tradicional', 'com leite'],
    image: './latte.svg',
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 990,
    amount: 10,
    available: true,
  },
  {
    id: '007',
    type: ['tradicional', 'com leite'],
    image: './capuccino.svg',
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 990,
    amount: 10,
    available: true,
  },
  {
    id: '008',
    type: ['tradicional', 'com leite'],
    image: './macchiato.svg',
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 990,
    amount: 10,
    available: true,
  },
  {
    id: '009',
    type: ['tradicional', 'com leite'],
    image: './mocaccino.svg',
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 990,
    amount: 10,
    available: true,
  },
  {
    id: '010',
    type: ['especial', 'com leite'],
    image: './chocolateQuente.svg',
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 990,
    amount: 10,
    available: true,
  },
  {
    id: '011',
    type: ['especial', 'alcoólico', 'gelado'],
    image: './cubano.svg',
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 990,
    amount: 10,
    available: true,
  },
  {
    id: '012',
    type: ['especial'],
    image: './havaiano.svg',
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 990,
    amount: 10,
    available: true,
  },
  {
    id: '013',
    type: ['especial'],
    image: './arabe.svg',
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 990,
    amount: 10,
    available: true,
  },
  {
    id: '014',
    type: ['especial', 'alcoólico'],
    image: './irlandes.svg',
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 990,
    amount: 10,
    available: true,
  },
];
