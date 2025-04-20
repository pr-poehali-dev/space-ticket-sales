import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { BuyTicketForm } from "@/components/BuyTicketForm";
import { RocketInfo } from "@/components/RocketInfo";

const Index = () => {
  const [isRocketInfoOpen, setIsRocketInfoOpen] = useState(false);
  
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* Заголовок и основная информация */}
      <div className="space-y-4 text-center max-w-4xl w-full mt-10 mb-16">
        <h1 className="text-5xl sm:text-6xl font-bold text-white">
          <span className="text-primary">Космический тур</span> будущего
        </h1>
        <p className="text-xl text-gray-300 mt-6">
          Отправьтесь в незабываемое путешествие к звездам
        </p>
        
        <div className="mt-8 inline-block bg-black/50 backdrop-blur-sm p-4 rounded-xl border border-primary/30">
          <p className="text-xl text-white">
            Дата вылета: <span className="font-bold text-primary">26 июня 2026 г.</span>
          </p>
        </div>
      </div>
      
      {/* Информация о билетах */}
      <Card className="max-w-2xl w-full bg-black/60 backdrop-blur-md border-primary/40 text-white p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">Билеты в космический тур</h2>
        <div className="mb-6">
          <p className="text-3xl font-bold text-primary mb-2">1 300 000 ₽</p>
          <p className="text-gray-300">за одно место</p>
        </div>
        
        <div className="space-y-2 mb-6">
          <p className="font-medium">В стоимость входит:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Все необходимое оборудование</li>
            <li>Питание на весь период полета</li>
            <li>Тренировка перед полетом</li>
            <li>Скафандр</li>
          </ul>
        </div>
        
        <Button 
          onClick={() => setIsRocketInfoOpen(true)}
          className="w-full bg-secondary hover:bg-secondary/80 text-white"
        >
          Информация о ракете
        </Button>
      </Card>
      
      {/* Форма покупки билетов */}
      <Card className="max-w-2xl w-full bg-black/60 backdrop-blur-md border-primary/40 text-white p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">Купить билет</h2>
        <BuyTicketForm />
      </Card>
      
      {/* Модальное окно с информацией о ракете */}
      <Dialog open={isRocketInfoOpen} onOpenChange={setIsRocketInfoOpen}>
        <DialogContent className="bg-black/90 border-primary/40 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl text-primary">Требования к ракете</DialogTitle>
          </DialogHeader>
          <RocketInfo />
        </DialogContent>
      </Dialog>
      
      {/* Подпись создателя */}
      <footer className="mt-auto pt-8 pb-4 text-center text-gray-400">
        <p>Создатель: Антонова Ксения</p>
      </footer>
    </div>
  );
};

export default Index;
