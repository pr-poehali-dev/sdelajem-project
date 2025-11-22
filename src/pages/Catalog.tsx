import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const products: Product[] = [
    {
      id: 1,
      name: "Минималистичные часы",
      price: 12990,
      category: "accessories",
      image: "https://cdn.poehali.dev/files/c158bd1f-7382-4213-97b7-566f15477801.png",
    },
    {
      id: 2,
      name: "Дизайнерская сумка",
      price: 8990,
      category: "accessories",
      image: "https://cdn.poehali.dev/files/c158bd1f-7382-4213-97b7-566f15477801.png",
    },
    {
      id: 3,
      name: "Умная колонка",
      price: 15990,
      category: "electronics",
      image: "https://cdn.poehali.dev/files/c158bd1f-7382-4213-97b7-566f15477801.png",
    },
    {
      id: 4,
      name: "Беспроводные наушники",
      price: 19990,
      category: "electronics",
      image: "https://cdn.poehali.dev/files/c158bd1f-7382-4213-97b7-566f15477801.png",
    },
    {
      id: 5,
      name: "Свеча ручной работы",
      price: 2490,
      category: "home",
      image: "https://cdn.poehali.dev/files/c158bd1f-7382-4213-97b7-566f15477801.png",
    },
    {
      id: 6,
      name: "Керамическая ваза",
      price: 5490,
      category: "home",
      image: "https://cdn.poehali.dev/files/c158bd1f-7382-4213-97b7-566f15477801.png",
    },
  ];

  const categories = [
    { id: "all", name: "Все товары" },
    { id: "electronics", name: "Электроника" },
    { id: "accessories", name: "Аксессуары" },
    { id: "home", name: "Для дома" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-light mb-4">Каталог товаров</h1>
          <p className="text-muted-foreground font-light">
            Откройте для себя нашу коллекцию
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-accent/30 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <Badge variant="secondary" className="mb-2">
                    {
                      categories.find((c) => c.id === product.category)
                        ?.name
                    }
                  </Badge>
                  <h3 className="text-xl font-light mb-2">{product.name}</h3>
                  <p className="text-2xl font-light">
                    {product.price.toLocaleString("ru-RU")} ₽
                  </p>
                </div>
                <Button className="w-full rounded-full gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  В корзину
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
