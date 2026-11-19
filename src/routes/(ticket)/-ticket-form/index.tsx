import { NotebookPen, UserPen, UtensilsCrossed } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import CustomerData from './customer-data';
import PaymentOptions from './payment-options';
import ProductSelector from './product-selector';

export default function TicketForm() {
  return (
    <Tabs
      defaultValue="customer"
      className="flex h-full min-h-0 w-full flex-1 flex-col gap-4"
    >
      <TabsList variant="default" className="w-full">
        <TabsTrigger value="customer">
          <UserPen />
          {'Customer & Payment'}
        </TabsTrigger>

        <TabsTrigger value="order">
          <UtensilsCrossed />
          Order
        </TabsTrigger>

        <TabsTrigger value="notes" disabled>
          <NotebookPen />
          Notes
        </TabsTrigger>
      </TabsList>

      {/* Customer Info & Payment */}
      <TabsContent value="customer">
        <div className="flex w-full items-start gap-4">
          <CustomerData />
          <PaymentOptions />
        </div>
      </TabsContent>

      {/* Order */}
      <TabsContent value="order" className="min-h-0">
        <ProductSelector />
      </TabsContent>
    </Tabs>
  );
}
