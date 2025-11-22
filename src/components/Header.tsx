import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { ShoppingBag, Home, Grid, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Header() {
  const location = useLocation();
  const cartItems = 0;

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-light tracking-wider text-muted-foreground">
            StarKnife
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          <Link
            to="/"
            className={`flex items-center gap-2 px-4 py-2 text-sm font-light transition-colors rounded-full ${
              isActive("/")
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
            }`}
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Главная</span>
          </Link>

          <Link
            to="/catalog"
            className={`flex items-center gap-2 px-4 py-2 text-sm font-light transition-colors rounded-full ${
              isActive("/catalog")
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
            }`}
          >
            <Grid className="h-4 w-4" />
            <span className="hidden sm:inline">Каталог</span>
          </Link>

          <Link
            to="/account"
            className={`flex items-center gap-2 px-4 py-2 text-sm font-light transition-colors rounded-full ${
              isActive("/account")
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
            }`}
          >
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Кабинет</span>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/cart" className="relative">
            <ShoppingBag className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            {cartItems > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                {cartItems}
              </Badge>
            )}
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
