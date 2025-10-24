import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ShoppingBag, User, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

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
          <Link to="/products" className="flex items-center gap-2 group">
            {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div> */}
            <span className="font-bold text-xl text-gray-800 hidden sm:block group-hover:scale-110 transition-transform">FashionHub</span>
          </Link>
             <Link
              to="/Category"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/Category')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Category
            </Link>
              <Link
              to="/Brand"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/Brand')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Brand
            </Link>
            
              <Link
              to="/Contact"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/Contact')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Contact
            </Link>
              <Link
              to="/FAQ’s"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/FAQ’s')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              FAQ’s
            </Link>

          <div className="hidden md:flex items-center gap-2">
           <div className="relative">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
              <ShoppingBag className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
            </div>
            {/* Badge */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
              3
            </div>
          </div>
          

        
            <Link
              to="/profile"
              className={`flex items-center gap-2 px-4 py-1 rounded-lg font-medium transition-all ${
                isActive('/profile')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {/* <User className="w-4 h-4" /> */}
               <div className="relative">
               <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
              alt="Scarlet Johnson"
              className="w-10 h-10 rounded-full object-cover border-4 border-white shadow-lg"
            />
             <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
          </div> 
              <div className="flex flex-col">
            <p className="text-gray-400 text-sm font-medium mb-1">Good Morning!</p>
            <h1 className="text-xl font-bold text-gray-900">Scarlet Johnson</h1>
          </div>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-red-600 hover:bg-red-50 transition-all"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-2">
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
                to="/profile"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive('/profile')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <User className="w-4 h-4" />
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-3 rounded-lg font-medium text-red-600 hover:bg-red-50 transition-all text-left"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
