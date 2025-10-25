import { Search, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Аналіз та ТЗ",
    description: "Вивчаємо ваш бізнес, визначаємо задачі та складаємо детальне технічне завдання"
  },
  {
    icon: Code,
    number: "02",
    title: "Розробка та тестування",
    description: "Створюємо індивідуальне рішення, інтегруємо з вашими системами та проводимо тестування"
  },
  {
    icon: Rocket,
    number: "03",
    title: "Запуск та підтримка",
    description: "Запускаємо бота, навчаємо вашу команду та надаємо технічну підтримку"
  }
];

const Process = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Наш процес роботи
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Прозорий та структурований підхід до кожного проекту
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-1/2 z-0"></div>
                )}

                <div className="relative z-10 text-center">
                  {/* Number badge */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold text-lg mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
