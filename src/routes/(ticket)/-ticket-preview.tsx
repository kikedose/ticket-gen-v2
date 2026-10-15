export default function TicketPreview() {
  return (
    // w-[72mm]
    <div className="flex max-w-120 flex-col gap-4 border border-solid border-red-500 font-mono">
      {/* Ticket No */}
      <div className="text-right">#T-4567</div>

      {/* Handover details */}
      <ul>
        <li className="uppercase">Delivery</li>
        <li>
          Entrega <span className="font-bold">22:30</span>
        </li>
      </ul>

      {/* Customer details */}
      <ul>
        <li>Juan Román Riquelme</li>
        <li className="font-bold">General Bustos 742, 5B</li>
        <li>351 202-3227</li>
      </ul>

      {/* Order details */}
      <ol>
        <li className="grid grid-cols-6 py-2">
          <div className="col-span-1">10x</div>
          <div className="col-span-3">Shawarma Pollo Deluxe</div>
          <div className="col-span-2 text-right">$ 152,000</div>
        </li>

        <li className="grid grid-cols-6 py-2">
          <div className="col-span-1">2x</div>
          <div className="col-span-3">Picada para dos</div>
          <div className="col-span-2 text-right">$ 79,000</div>
          <div className="col-span-3 col-start-2 text-sm">
            <ul>
              <li>- Hummus</li>
              <li>- Baba ghanoush</li>
              <li>- Tabbouleh</li>
              <li>- Labneh</li>
            </ul>
          </div>
        </li>
      </ol>

      {/* Total */}
      <ul className="text-right">
        <li>Subtotal: $ 231,000</li>
        <li>Descuento: - $ 15,000</li>
        <li>Delivery: $ 3,500</li>
        <br />
        <li>
          Total: <span className="font-bold">$ 219,500</span>
        </li>
        <br />
        <li>Efectivo</li>
      </ul>

      <div>05/04/2022 19:30</div>
    </div>
  );
}
