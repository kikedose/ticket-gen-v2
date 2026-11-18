import { useNavigate } from '@tanstack/react-router';
import { Printer, UserPen, UtensilsCrossed } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import CustomerData from './customer-data';
import PaymentOptions from './payment-options';
import ProductSelector from './product-selector';

export default function TicketForm() {
  const navigate = useNavigate();

  return (
    <div className="bg-popover relative flex h-full flex-col overflow-hidden rounded-lg">
      <Tabs defaultValue="customer" className="flex h-full flex-col">
        <TabsList className="w-full shrink-0" variant="line">
          <TabsTrigger value="customer" className="h-auto gap-2 pt-2 pb-1">
            <UserPen />
            {'Customer Info & Payment'}
          </TabsTrigger>

          <TabsTrigger value="order" className="h-auto gap-2 pt-2 pb-1">
            <UtensilsCrossed />
            Order
          </TabsTrigger>
        </TabsList>

        {/* Customer Info & Payment Tab Content */}
        <TabsContent
          value="customer"
          className="min-h-0 flex-1 overflow-y-auto p-8"
        >
          <div className="flex w-full flex-nowrap gap-16">
            <div className="flex-1">
              <CustomerData />
            </div>

            <div className="flex-1">
              <PaymentOptions />
            </div>
          </div>
        </TabsContent>

        {/* Order Tab Content */}
        <TabsContent
          value="order"
          className="min-h-0 flex-1 overflow-y-auto p-8"
        >
          <ProductSelector />
        </TabsContent>
      </Tabs>

      <Button
        onClick={() => navigate({ to: '/print' })}
        className="absolute right-6 bottom-6"
        size="lg"
      >
        Print
        <Printer data-icon="inline-end" />
      </Button>
    </div>
  );
}
