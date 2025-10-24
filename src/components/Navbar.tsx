import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ShoppingBag, User, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Rectangle from '../../public/Rectangle 1.png'
export default function Navbar() {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut();
      setMobileMenuOpen(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  if (!user) return null;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/products" className="flex items-center gap-2 group flex-shrink-0">
            <span className="font-bold text-lg sm:text-xl text-gray-800 group-hover:scale-105 transition-transform">
              FashionHub
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/Category"
              className={`px-3 xl:px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                isActive('/Category')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Category
            </Link>
            <Link
              to="/Brand"
              className={`px-3 xl:px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                isActive('/Brand')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Brand
            </Link>
            <Link
              to="/Contact"
              className={`px-3 xl:px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                isActive('/Contact')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/FAQs"
              className={`px-3 xl:px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                isActive('/FAQs')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              FAQ's
            </Link>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {/* Shopping Cart */}
            <div className="relative cursor-pointer">
              <div className="w-9 h-9 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                <ShoppingBag className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" strokeWidth={1.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                3
              </div>
            </div>

            {/* User Profile */}
            <Link
              to="/profile"
              className={`flex items-center gap-2 lg:gap-3 px-2 lg:px-4 py-1 rounded-lg font-medium transition-all ${
                isActive('/profile')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className="relative flex-shrink-0">
                <img
                  src="Rectangle 1.png"
                  alt="Scarlet Johnson"
                  className="w-9 h-9 lg:w-10 lg:h-10 rounded-full object-cover border-2 border-white shadow-lg"
                />
                <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="hidden lg:flex flex-col">
                <p className="text-gray-400 text-xs font-medium">Good Morning!</p>
                <h1 className="text-sm font-bold text-gray-900">Scarlet Johnson</h1>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-slideDown">
            <div className="flex flex-col gap-2">
              {/* Mobile Shopping Cart */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50">
                <div className="relative">
                  <ShoppingBag className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                </div>
                <span className="text-gray-700 font-medium">Shopping Cart</span>
              </div>

              {/* Mobile Navigation Links */}
              <Link
                to="/Category"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive('/Category')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Category
              </Link>
              <Link
                to="/Brand"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive('/Brand')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Brand
              </Link>
              <Link
                to="/Contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive('/Contact')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Contact
              </Link>
              <Link
                to="/FAQs"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive('/FAQs')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                FAQ's
              </Link>

              {/* Mobile Profile */}
              <Link
                to="/profile"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive('/profile')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <User className="w-5 h-5" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Good Morning!</span>
                  <span className="font-semibold">Scarlet Johnson</span>
                </div>
              </Link>

              {/* Mobile Logout */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-red-600 hover:bg-red-50 transition-all text-left"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}