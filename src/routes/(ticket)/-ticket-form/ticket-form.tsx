import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import CustomerData from './-customer-data';
import PaymentOptions from './-payment-options';
import ProductSelector from './-product-selector';

export default function TicketForm() {
  return (
    <div className="bg-popover border-border flex h-full flex-col overflow-hidden rounded-lg border border-solid">
      <Tabs defaultValue="customer" className="flex h-full flex-col">
        <TabsList className="w-full shrink-0 bg-none" variant="default">
          <TabsTrigger value="customer">Customer</TabsTrigger>
          <TabsTrigger value="order">Order</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
        </TabsList>

        {/* Customer Tab Content */}
        <TabsContent
          value="customer"
          className="min-h-0 flex-1 overflow-y-auto p-8"
        >
          <CustomerData />
        </TabsContent>

        {/* Order Tab Content */}
        <TabsContent
          value="order"
          className="min-h-0 flex-1 overflow-y-auto p-8"
        >
          <ProductSelector />
        </TabsContent>

        {/* Payment Tab Content */}
        <TabsContent
          value="payment"
          className="min-h-0 flex-1 overflow-y-auto p-8"
        >
          <PaymentOptions />
        </TabsContent>
      </Tabs>
    </div>
  );
}
