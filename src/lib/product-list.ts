export interface Product {
  slug: string;
  name: string;
  price: number;
  type:
    | 'salsa'
    | 'entrada'
    | 'wrap'
    | 'plato'
    | 'adicional'
    | 'bebida'
    | 'picada'
    | 'combo';
}

export const productList: Product[] = [
  // SALSAS
  {
    slug: 'baba_ghanoush',
    name: 'Baba ghanoush',
    price: 5900,
    type: 'salsa',
  },
  {
    slug: 'hummus',
    name: 'Hummus',
    price: 5900,
    type: 'salsa',
  },
  {
    slug: 'labneh',
    name: 'Labneh',
    price: 5900,
    type: 'salsa',
  },
  {
    slug: 'tabbouleh',
    name: 'Tabbouleh',
    price: 5900,
    type: 'salsa',
  },
  {
    slug: 'toumiya',
    name: 'Toumiya',
    price: 5900,
    type: 'salsa',
  },
  {
    slug: 'tahini',
    name: 'Tahini',
    price: 5800,
    type: 'salsa',
  },
  // ENTRADAS
  {
    slug: 'fritas_porción',
    name: 'Porción papas fritas',
    price: 5200,
    type: 'entrada',
  },
  {
    slug: 'empanada',
    name: 'Empanada árabe',
    price: 2800,
    type: 'entrada',
  },
  // PLATOS
  {
    slug: 'docena_empanadas',
    name: 'Empanada árabe x12',
    price: 29500,
    type: 'plato',
  },
  {
    slug: 'media_docena_niños_envueltos',
    name: 'Niños envueltos x6',
    price: 7750,
    type: 'plato',
  },
  {
    slug: 'docena_niños_envueltos',
    name: 'Niños envueltos x12',
    price: 15500,
    type: 'plato',
  },
  {
    slug: 'media_docena_niños_vegetarianos',
    name: 'Niños vegetarianos x6',
    price: 6700,
    type: 'plato',
  },
  {
    slug: 'docena_niños_vegetarianos',
    name: 'Niños vegetarianos x12',
    price: 13300,
    type: 'plato',
  },
  {
    slug: 'falafel_plato',
    name: 'Falafel al plato x8',
    price: 12200,
    type: 'plato',
  },
  // ADICIONAL
  {
    slug: 'pan',
    name: 'Pan árabe',
    price: 700,
    type: 'adicional',
  },
  {
    slug: 'tortilla',
    name: 'Tortilla',
    price: 900,
    type: 'adicional',
  },
  // BEBIDAS
  {
    slug: 'agua',
    name: 'Agua mineral 500 ml',
    price: 1800,
    type: 'bebida',
  },
  {
    slug: 'gaseosa',
    name: 'Gaseosa línea Pepsi 310 ml',
    price: 2000,
    type: 'bebida',
  },
  // WRAPS
  {
    slug: 'shawarma_carne_chico',
    name: 'Shawarma carne chico',
    price: 11800,
    type: 'wrap',
  },
  {
    slug: 'shawarma_carne_xl',
    name: 'Shawarma carne xl',
    price: 15200,
    type: 'wrap',
  },
  {
    slug: 'shawarma_carne_deluxe',
    name: 'Shawarma carne deluxe',
    price: 20700,
    type: 'wrap',
  },
  {
    slug: 'shawarma_pollo_chico',
    name: 'Shawarma pollo chico',
    price: 11700,
    type: 'wrap',
  },
  {
    slug: 'shawarma_pollo_xl',
    name: 'Shawarma pollo xl',
    price: 15100,
    type: 'wrap',
  },
  {
    slug: 'shawarma_pollo_deluxe',
    name: 'Shawarma pollo deluxe',
    price: 20600,
    type: 'wrap',
  },
  {
    slug: 'shawarma_mixto_chico',
    name: 'Shawarma mixto chico',
    price: 10900,
    type: 'wrap',
  },
  {
    slug: 'shawarma_mixto_xl',
    name: 'Shawarma mixto xl',
    price: 15300,
    type: 'wrap',
  },
  {
    slug: 'shawarma_mixto_deluxe',
    name: 'Shawarma mixto deluxe',
    price: 20800,
    type: 'wrap',
  },
  {
    slug: 'shawarma_tebas',
    name: 'Shawarma tebas',
    price: 19500,
    type: 'wrap',
  },
  {
    slug: 'falafel_xl',
    name: 'Falafel xl',
    price: 12200,
    type: 'wrap',
  },
  {
    slug: 'falafel_tebas',
    name: 'Falafel tebas',
    price: 16100,
    type: 'wrap',
  },
  // COMBOS
  {
    slug: 'combo_falafel_n1',
    name: 'Combo falafel N°1',
    price: 18200,
    type: 'combo',
  },
  {
    slug: 'combo_falafel_n2',
    name: 'Combo falafel N°2',
    price: 17100,
    type: 'combo',
  },
  {
    slug: 'combo_shawarma_n1',
    name: 'Combo shawarma N°1',
    price: 24700,
    type: 'combo',
  },
  {
    slug: 'combo_shawarma_n2',
    name: 'Combo shawarma N°2',
    price: 21300,
    type: 'combo',
  },
  {
    slug: 'combo_shawarma_n3',
    name: 'Combo shawarma N°3',
    price: 19500,
    type: 'combo',
  },
  {
    slug: 'combo_shawarma_n4',
    name: 'Combo shawarma N°4',
    price: 19500,
    type: 'combo',
  },
  {
    slug: 'combo_niños_envueltos',
    name: 'Combo niños envueltos',
    price: 24100,
    type: 'combo',
  },
  {
    slug: 'caja_tebas',
    name: 'Caja Tebas',
    price: 42300,
    type: 'combo',
  },
  // PICADAS
  {
    slug: 'picada_para_1',
    name: 'Picada para uno',
    price: 22200,
    type: 'picada',
  },
  {
    slug: 'picada_para_2',
    name: 'Picada para dos',
    price: 39500,
    type: 'picada',
  },
  {
    slug: 'picada_para_3',
    name: 'Picada para tres',
    price: 58500,
    type: 'picada',
  },
  {
    slug: 'picada_para_4',
    name: 'Picada para cuatro',
    price: 76600,
    type: 'picada',
  },
  {
    slug: 'picada_tebas',
    name: 'Picada Tebas (p/2)',
    price: 42700,
    type: 'picada',
  },
  {
    slug: 'picada_vegetariana',
    name: 'Picada vegetariana (p/2)',
    price: 35400,
    type: 'picada',
  },
];
