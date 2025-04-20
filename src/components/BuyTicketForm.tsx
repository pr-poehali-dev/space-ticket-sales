import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function BuyTicketForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    ticketCount: "1"
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  
  if (isSubmitted) {
    return (
      <div className="text-center p-6 space-y-4">
        <div className="text-primary text-5xl mb-2">🚀</div>
        <h3 className="text-xl font-medium">Заявка отправлена!</h3>
        <p className="text-gray-300">
          Благодарим за интерес к космическому путешествию. 
          Мы свяжемся с вами в ближайшее время.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)} 
          variant="outline"
          className="mt-4"
        >
          Отправить еще заявку
        </Button>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="fullName">ФИО</Label>
        <Input
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="bg-secondary/50 border-primary/30 text-white"
          placeholder="Иванов Иван Иванович"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-secondary/50 border-primary/30 text-white"
          placeholder="example@mail.com"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Телефон</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          className="bg-secondary/50 border-primary/30 text-white"
          placeholder="+7 (999) 123-45-67"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="ticketCount">Количество билетов</Label>
        <Input
          id="ticketCount"
          name="ticketCount"
          type="number"
          min="1"
          max="6"
          value={formData.ticketCount}
          onChange={handleChange}
          required
          className="bg-secondary/50 border-primary/30 text-white"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full mt-6 bg-primary hover:bg-primary/80"
      >
        Забронировать билет
      </Button>
    </form>
  );
}
