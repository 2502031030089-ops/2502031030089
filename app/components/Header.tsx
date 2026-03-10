import { ShoppingCart, Search, Menu, User, Heart } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemCount, onCartClick }: HeaderProps) {
  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button className="lg:hidden mr-4">
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-2xl font-bold">STYLE.</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-black transition-colors">
              New Arrivals
            </a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">
              Men
            </a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">
              Women
            </a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">
              Accessories
            </a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">
              Sale
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-black transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-black transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-black transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button 
              onClick={onCartClick}
              className="text-gray-700 hover:text-black transition-colors relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
