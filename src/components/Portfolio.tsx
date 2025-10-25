import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ShoppingCart, Scissors, Dumbbell } from "lucide-react";
import chatbotDemo from "@/assets/chatbot-demo.jpg";

const cases = [
  {
    icon: ShoppingCart,
    title: "E-commerce бот для інтернет-магазину",
    category: "Автоматизація продажів",
    results: [
      "Збільшення конверсії на 45%",
      "Обробка 500+ запитів щодня",
      "Зменшення навантаження на підтримку на 60%"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Scissors,
    title: "Бот для мережі салонів краси",
    category: "Запис та підтримка клієнтів",
    results: [
      "Автоматизація запису на 90%",
      "1000+ успішних бронювань/місяць",
      "ROI 320% за перший квартал"
    ],
    gradient: "from-pink-500 to-purple-500"
  },
  {
    icon: Dumbbell,
    title: "CRM-бот для фітнес-центру",
    category: "Генерація лідів та утримання",
    results: [
      "Збір 200+ лідів щомісяця",
      "Підвищення утримання клієнтів на 35%",
      "Автоматизація нагадувань про тренування"
    ],
    gradient: "from-orange-500 to-red-500"
  }
];

const Portfolio = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Кейси та результати
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реальні проекти з вимірюваними бізнес-результатами
          </p>
        </div>

        {/* Demo image */}
        <div className="max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden border border-border shadow-card">
          <img 
            src={chatbotDemo} 
            alt="Chatbot Demo Interface" 
            className="w-full h-auto"
          />
        </div>

        {/* Cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {cases.map((caseItem, index) => {
            const Icon = caseItem.icon;
            return (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group overflow-hidden"
              >
                <CardContent className="p-6">
                  {/* Icon badge */}
                  <div className={`inline-flex w-14 h-14 rounded-xl bg-gradient-to-br ${caseItem.gradient} items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Category */}
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                    {caseItem.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {caseItem.title}
                  </h3>

                  {/* Results */}
                  <ul className="space-y-2 mb-4">
                    {caseItem.results.map((result, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 text-white border-0"
            onClick={scrollToContact}
          >
            Отримати подібний результат
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
