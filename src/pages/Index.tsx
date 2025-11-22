import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const features = [
    {
      icon: Sparkles,
      title: "Уникальный дизайн",
      description: "Минималистичный стиль для современных покупателей",
    },
    {
      icon: Shield,
      title: "Безопасные покупки",
      description: "Надежная защита всех ваших платежей",
    },
    {
      icon: Zap,
      title: "Быстрая доставка",
      description: "Доставляем заказы в кратчайшие сроки",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,182,193,0.3),transparent_50%)]"></div>
        <div className="container relative py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight">
              StarKnife
              <span className="block text-muted-foreground mt-2">
                Магазин будущего
              </span>
            </h1>
            <p className="text-lg text-muted-foreground font-light max-w-xl mx-auto">
              Откройте для себя коллекцию уникальных товаров в минималистичном стиле
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full gap-2">
                <Link to="/catalog">
                  Перейти в каталог
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-8 text-center space-y-4 border-2 hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-light">{feature.title}</h3>
                  <p className="text-muted-foreground font-light">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent/30">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-light">
            Готовы начать покупки?
          </h2>
          <p className="text-muted-foreground font-light max-w-xl mx-auto">
            Зарегистрируйтесь сейчас и получите доступ к эксклюзивным предложениям
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link to="/account">Создать аккаунт</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
