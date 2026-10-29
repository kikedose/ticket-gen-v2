import { productList } from '~/lib/product-list';

export default function ProductSelector() {
  return (
    <div className="flex flex-wrap justify-between gap-2">
      {productList.map((item) => (
        <div className="border-border grid h-[4rem] w-[8rem] items-center rounded-xl border border-solid text-center">
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}
