import { useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import { Button } from '~/components/ui/button';
import { FieldLegend, FieldSeparator } from '~/components/ui/field';
import { Input } from '~/components/ui/input';
import useDebounce from '~/hooks/use-debounce';
import { useTicketStore } from '~/stores/ticket-store';
import { productList, type Product } from '../-product-list';

const PRODUCT_TYPES = [
  'wrap',
  'combo',
  'picada',
  'porciones',
  'bebida',
  'adicional',
] as const;

export default function ProductSelector() {
  const addItem = useTicketStore((s) => s.addItem);

  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query.trim(), 200);

  // Later: build this from the db's product list instead of the static import
  const fuse = useMemo(
    () =>
      new Fuse(productList, {
        keys: [
          { name: 'name', weight: 2 },
          { name: 'type', weight: 1 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
        ignoreDiacritics: true,
      }),
    [],
  );

  const productsByType = useMemo(() => {
    const items = debouncedQuery
      ? fuse.search(debouncedQuery).map((result) => result.item)
      : productList;
    return Object.groupBy(items, (product) => product.type);
  }, [debouncedQuery, fuse]);

  const productHeaders = PRODUCT_TYPES.filter(
    (type) => productsByType[type as keyof typeof productsByType]?.length,
  );

  return (
    <div className="flex h-full min-h-0 flex-col gap-2">
      <div className="pb-2">
        <Input
          type="search"
          placeholder="Filter..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Escape' && setQuery('')}
          autoFocus
        />
      </div>

      <div className="bg-popover flex min-h-0 flex-1 flex-col rounded-lg p-4">
        {productHeaders.length === 0 && (
          <p className="text-muted-foreground">
            No results for: "{debouncedQuery}"
          </p>
        )}

        <div className="min-h-0 flex-1 overflow-y-auto">
          {productHeaders.map((type) => (
            <div key={type} className="flex flex-col pb-8">
              <FieldLegend className="text-muted-foreground capitalize">
                {type}
              </FieldLegend>

              <FieldSeparator />

              <div className="flex flex-wrap gap-2 pt-4">
                {/* fix type errors once API delivers productList */}
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
          ))}
        </div>
      </div>
    </div>
  );
}
