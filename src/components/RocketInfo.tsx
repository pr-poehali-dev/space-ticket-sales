import { Separator } from "@/components/ui/separator";

export function RocketInfo() {
  return (
    <div className="space-y-4 py-2">
      <div>
        <h3 className="font-medium text-primary">Грузоподъемность:</h3>
        <p className="text-gray-300">
          Способна перевозить экипаж из 4-6 туристов, а также груз, 
          включая скафандры, оборудование и припасы.
        </p>
      </div>
      
      <Separator className="bg-primary/20" />
      
      <div>
        <h3 className="font-medium text-primary">Дальность полета:</h3>
        <p className="text-gray-300">
          Путешествие на Луну и обратно, что составляет около 400 000 км.
        </p>
      </div>
      
      <Separator className="bg-primary/20" />
      
      <div>
        <h3 className="font-medium text-primary">Безопасность:</h3>
        <p className="text-gray-300">
          Оснащена надежными системами безопасности, включая
          системы аварийного спасения и жизнеобеспечения.
        </p>
      </div>
    </div>
  );
}
