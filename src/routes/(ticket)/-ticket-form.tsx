import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import CustomerData from './-customer-data';
import PaymentOptions from './-payment-options';

export default function TicketForm() {
  return (
    <>
      <Tabs defaultValue="customer" className="w-full p-8">
        <TabsList className="w-full bg-none" variant="default">
          <TabsTrigger value="customer">Cliente</TabsTrigger>
          <TabsTrigger value="order">Orden</TabsTrigger>
          <TabsTrigger value="payment">Pago</TabsTrigger>
        </TabsList>

        <TabsContent value="customer">
          <CustomerData />
        </TabsContent>

        <TabsContent value="order">Orden</TabsContent>

        <TabsContent value="payment">
          <PaymentOptions />
        </TabsContent>
      </Tabs>
    </>
  );
}
