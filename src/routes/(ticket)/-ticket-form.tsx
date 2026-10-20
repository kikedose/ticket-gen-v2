import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import CustomerData from './-customer-data';

export default function TicketForm() {
  return (
    <>
      <Tabs defaultValue="customer" className="w-full">
        <TabsList className="w-full bg-none" variant="default">
          <TabsTrigger value="customer">Cliente</TabsTrigger>
          <TabsTrigger value="order">Orden</TabsTrigger>
          <TabsTrigger value="payment">Pago</TabsTrigger>
        </TabsList>

        <TabsContent value="customer" className="p-8">
          <CustomerData />
        </TabsContent>

        <TabsContent value="order">Orden</TabsContent>
        <TabsContent value="payment">Método de pago</TabsContent>
      </Tabs>
    </>
  );
}
