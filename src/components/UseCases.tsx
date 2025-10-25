import { 
  ShoppingCart, 
  Headphones, 
  Store, 
  Scissors, 
  Heart, 
  Users, 
  GraduationCap, 
  DollarSign, 
  Plane, 
  Package, 
  Car, 
  Building, 
  Calendar, 
  Monitor, 
  Scale 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const useCases = [
  {
    icon: ShoppingCart,
    title: "Продажі та маркетинг",
    description: "Генерація лідів, персональні пропозиції, автоматизація воронки продажів",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Headphones,
    title: "Клієнтський сервіс",
    description: "24/7 підтримка, FAQ, інформування про замовлення, збір відгуків",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Store,
    title: "E-commerce",
    description: "Каталог товарів, пошук, замовлення, оплата онлайн, апсейл",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Scissors,
    title: "Сфера послуг",
    description: "Запис на прийом, нагадування, калькулятори вартості, консультації",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Heart,
    title: "Медицина та здоров'я",
    description: "Запис до лікаря, нагадування, збір анамнезу, телемедицина",
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: Users,
    title: "HR та комунікації",
    description: "Онбординг, запити на відпустку, корпоративні опитування",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: GraduationCap,
    title: "Освіта",
    description: "Видача уроків, тести, автоматичний фідбек, підтримка учнів",
    gradient: "from-teal-500 to-green-500"
  },
  {
    icon: DollarSign,
    title: "Фінанси та банки",
    description: "Баланс, виписки, оформлення кредитів, фінансові поради",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: Plane,
    title: "Туризм і HoReCa",
    description: "Бронювання, меню, доставка, мультимовна підтримка",
    gradient: "from-sky-500 to-blue-500"
  },
  {
    icon: Package,
    title: "Логістика",
    description: "Відстеження посилок, калькулятор доставки, замовлення кур'єра",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: Car,
    title: "Автобізнес",
    description: "Запис на сервіс, каталог авто, перевірка деталей, нагадування",
    gradient: "from-gray-500 to-slate-500"
  },
  {
    icon: Building,
    title: "Нерухомість",
    description: "Підбір квартир, онлайн-тури, бронювання переглядів",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: Calendar,
    title: "Івенти",
    description: "Продаж квитків, програма подій, опитування, інтерактиви",
    gradient: "from-fuchsia-500 to-pink-500"
  },
  {
    icon: Monitor,
    title: "IT та SaaS",
    description: "Онбординг, техпідтримка, інтеграції, дашборд у чаті",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Scale,
    title: "Юридичні послуги",
    description: "Консультації, збір інформації, розрахунок вартості",
    gradient: "from-lime-500 to-green-500"
  }
];

const UseCases = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Де можна використовувати чат-боти?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Від e-commerce до медицини — автоматизуємо будь-який бізнес
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <CardContent className="p-6">
                  <div className={`inline-flex w-12 h-12 rounded-lg bg-gradient-to-br ${useCase.gradient} items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-lg">
            + Будь-яка інша галузь, де потрібна автоматизація комунікації з клієнтами
          </p>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
