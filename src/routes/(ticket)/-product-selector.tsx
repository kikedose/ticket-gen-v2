import { Button } from '~/components/ui/button';
import { productList, type Product } from '~/lib/product-list';
import { useTicketStore } from '~/stores/ticket-store';

const productsByType = Object.groupBy(productList, (product) => product.type);

export default function ProductSelector() {
  const addItem = useTicketStore((s) => s.addItem);

  return (
    <div className="flex flex-col">
      {['wrap', 'combo', 'picada', 'porciones', 'bebida', 'adicional'].map(
        (type) => (
          <div key={type} className="mb-6 flex flex-col gap-4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight capitalize first:mt-0">
              {type}
            </h2>

            <div className="flex flex-wrap gap-4">
              {/* fix type erros once API delivers productList */}
              {productsByType[type as keyof typeof productsByType]?.map(
                (item: Product) => (
                  <Button
                    key={item.slug}
                    variant="outline"
                    onClick={() => addItem(item)}
                  >
                    {item.name}
                  </Button>
                ),
              )}
            </div>
          </div>
        ),
      )}
    </div>
  );
}
