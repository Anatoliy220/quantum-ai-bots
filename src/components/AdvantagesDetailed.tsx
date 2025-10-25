import { TrendingUp, Clock, Shield, BarChart3, Users, Sparkles } from "lucide-react";

const advantages = [
  {
    icon: TrendingUp,
    title: "Збільшення продажів до 300%",
    description: "Автоматична кваліфікація лідів та персоналізовані пропозиції підвищують конверсію у 3 рази",
    stat: "+300%",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: Clock,
    title: "Економія до 70% часу підтримки",
    description: "Бот обробляє рутинні запити миттєво, дозволяючи команді зосередитись на складних задачах",
    stat: "-70%",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Зниження втрати клієнтів на 45%",
    description: "Миттєва підтримка 24/7 запобігає відтоку клієнтів через довге очікування",
    stat: "-45%",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: BarChart3,
    title: "ROI понад 500% за рік",
    description: "Автоматизація процесів швидко окупається за рахунок збільшення продажів та економії ресурсів",
    stat: "500%",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Users,
    title: "Обробка до 1000+ лідів щодня",
    description: "Один бот замінює роботу декількох менеджерів, працюючи без вихідних та перерв",
    stat: "1000+",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Sparkles,
    title: "Запуск за 2-3 тижні",
    description: "Від аналізу до повноцінної роботи — швидке впровадження без складних інтеграцій",
    stat: "2-3 тижні",
    gradient: "from-indigo-500 to-purple-500"
  }
];

const AdvantagesDetailed = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Чому бізнес обирає наші чат-боти?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реальні результати, які можна виміряти та порівняти
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${advantage.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative p-8 rounded-2xl bg-card border border-border group-hover:border-primary/50 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className={`inline-flex w-14 h-14 rounded-xl bg-gradient-to-br ${advantage.gradient} items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Stat badge */}
                  <div className={`inline-block px-3 py-1 mb-4 text-sm font-bold rounded-full bg-gradient-to-br ${advantage.gradient} text-white`}>
                    {advantage.stat}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {advantage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA section */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Хочете такі ж результати?
            </h3>
            <p className="text-muted-foreground mb-6">
              Розпочніть автоматизацію вже сьогодні та отримайте перші результати за 2-3 тижні
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Безкоштовна консультація</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span>Аналіз ваших процесів</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Розрахунок ROI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesDetailed;
