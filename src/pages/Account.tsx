import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { User, Package, Heart, Settings } from "lucide-react";

export default function Account() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="container py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-light mb-4">Личный кабинет</h1>
          <p className="text-muted-foreground font-light">
            Управляйте своим профилем и заказами
          </p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-4 rounded-full">
            <TabsTrigger value="profile" className="rounded-full">
              <User className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Профиль</span>
            </TabsTrigger>
            <TabsTrigger value="orders" className="rounded-full">
              <Package className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Заказы</span>
            </TabsTrigger>
            <TabsTrigger value="favorites" className="rounded-full">
              <Heart className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Избранное</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="rounded-full">
              <Settings className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Настройки</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card className="p-6">
              <h2 className="text-2xl font-light mb-6">Информация о профиле</h2>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    placeholder="Введите ваше имя"
                    className="rounded-full"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@mail.com"
                    className="rounded-full"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 999-99-99"
                    className="rounded-full"
                  />
                </div>
                <Separator className="my-4" />
                <Button className="rounded-full">Сохранить изменения</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card className="p-6">
              <h2 className="text-2xl font-light mb-6">Мои заказы</h2>
              <div className="space-y-4">
                <div className="text-center py-12 text-muted-foreground">
                  <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="font-light">У вас пока нет заказов</p>
                  <Button asChild className="mt-4 rounded-full">
                    <a href="/catalog">Перейти в каталог</a>
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="favorites">
            <Card className="p-6">
              <h2 className="text-2xl font-light mb-6">Избранные товары</h2>
              <div className="space-y-4">
                <div className="text-center py-12 text-muted-foreground">
                  <Heart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="font-light">Список избранного пуст</p>
                  <Button asChild className="mt-4 rounded-full">
                    <a href="/catalog">Найти товары</a>
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="p-6">
              <h2 className="text-2xl font-light mb-6">Настройки</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-light mb-4">Уведомления</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-notifications">Email уведомления</Label>
                      <input type="checkbox" id="email-notifications" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="promo-notifications">Акции и скидки</Label>
                      <input type="checkbox" id="promo-notifications" />
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="text-lg font-light mb-4">Безопасность</h3>
                  <Button variant="outline" className="rounded-full">
                    Изменить пароль
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
