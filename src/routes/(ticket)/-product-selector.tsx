import { Button } from '~/components/ui/button';
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
      {Object.entries(productsByType).map(([type, items]) => (
        <div key={type} className="mb-6 flex flex-col gap-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight capitalize first:mt-0">
            {type}
          </h2>

          <div className="flex flex-wrap gap-4">
            {items?.map((item: Product) => (
              <Button variant="outline">{item.name}</Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
