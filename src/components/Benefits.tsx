import { MessageSquare, Clock, TrendingUp, Zap, Database, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: TrendingUp,
    title: "Автоматизація продажів",
    description: "Наші боти кваліфікують лідів, проводять клієнта по воронці продажів та допомагають оформити замовлення"
  },
  {
    icon: Clock,
    title: "Підтримка 24/7",
    description: "Миттєві відповіді на часті запитання клієнтів у будь-який час, що зменшує навантаження на ваших менеджерів"
  },
  {
    icon: MessageSquare,
    title: "Генерація лідів",
    description: "Активний збір контактів (телефонів, email) прямо у вікні чату з інтелектуальною кваліфікацією"
  },
  {
    icon: Zap,
    title: "Мультиплатформність",
    description: "Розробка ботів для Telegram, Viber, Facebook Messenger, Instagram та вашого веб-сайту"
  },
  {
    icon: Settings,
    title: "Індивідуальна розробка",
    description: "Не використовуємо шаблони. Аналізуємо ваш бізнес і проектуємо логіку бота під ваші процеси"
  },
  {
    icon: Database,
    title: "Інтеграція з CRM",
    description: "Підключення до Bitrix24, Pipedrive, KeyCRM та інших систем для автоматичної передачі даних"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Які задачі вирішує наш бот?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Комплексні рішення для автоматизації бізнес-процесів та покращення комунікації з клієнтами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
