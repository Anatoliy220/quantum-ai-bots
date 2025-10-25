import { MessageCircle, Send, Facebook, Instagram, Globe } from "lucide-react";

const platforms = [
  {
    icon: Send,
    name: "Telegram",
    color: "from-[#0088cc] to-[#00a0e9]"
  },
  {
    icon: MessageCircle,
    name: "Viber",
    color: "from-[#665CAC] to-[#7C73BD]"
  },
  {
    icon: Facebook,
    name: "Messenger",
    color: "from-[#006AFF] to-[#0084FF]"
  },
  {
    icon: Instagram,
    name: "Instagram",
    color: "from-[#E1306C] to-[#F77737]"
  },
  {
    icon: Globe,
    name: "Web Chat",
    color: "from-primary to-accent"
  }
];

const Platforms = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Для яких платформ ми робимо ботів?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Розробляємо ботів там, де є ваші клієнти
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-semibold text-center text-foreground">
                  {platform.name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            + Інтеграція з будь-якою іншою платформою за вашим запитом
          </p>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
