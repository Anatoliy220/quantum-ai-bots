import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Дякуємо за звернення!",
      description: "Ми зв'яжемося з вами найближчим часом.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Готові автоматизувати свій бізнес?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Залиште заявку, і ми зв'яжемося з вами для обговорення вашого проекту
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Зв'яжіться з нами</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-1">Email</div>
                    <a href="mailto:info@quantum-ai.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@quantum-ai.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-1">Телефон</div>
                    <a href="tel:+380501234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +380 (50) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-1">Адреса</div>
                    <p className="text-muted-foreground">
                      Київ, Україна
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">Безкоштовна консультація</h4>
              <p className="text-sm text-muted-foreground">
                Отримайте професійну оцінку можливостей автоматизації для вашого бізнесу
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Ім'я *</Label>
              <Input
                id="name"
                name="name"
                placeholder="Ваше ім'я"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-card border-border focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-card border-border focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+380 (XX) XXX-XX-XX"
                value={formData.phone}
                onChange={handleChange}
                className="bg-card border-border focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Повідомлення *</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Розкажіть про ваш проект..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-card border-border focus:border-primary resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 text-white border-0"
            >
              {isSubmitting ? "Відправка..." : "Відправити заявку"}
              <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
