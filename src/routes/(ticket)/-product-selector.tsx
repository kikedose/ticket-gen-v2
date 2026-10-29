import { productList, type Product } from '~/lib/product-list';

export const productsByType = productList.reduce(
  (acc, product: Product) => {
    if (!acc[product.type]) {
      acc[product.type] = [];
    }
    acc[product.type]!.push(product);
    return acc;
  },
  {} as Partial<Record<Product['type'], Product[]>>,
);

export default function ProductSelector() {
  return (
    <div className="flex flex-col">
      {Object.keys(productsByType).map((type) => (
        <>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight capitalize first:mt-0">
            {type}
          </h2>

          <div className="flex flex-wrap gap-4">
            {productsByType[type].map((item: Product) => (
              <span className="border-border grid h-16 w-32 items-center rounded-xl border border-solid text-center">
                {item.name}
              </span>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
