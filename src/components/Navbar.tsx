// import { Link, useLocation } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
// import { ShoppingBag, User, LogOut, Menu, X ,ShoppingCart, Minus, Plus } from 'lucide-react';
// import { useState } from 'react';
// import { useCart } from "../contexts/CartContext";

// export default function Navbar() {
//   const { user, signOut } = useAuth();
//   const location = useLocation();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//  const [isCartOpen, setIsCartOpen] = useState(false);
//  const { cart, removeFromCart, updateQuantity, getTotalItems, getTotalPrice } = useCart();
//   const handleLogout = async () => {
//     try {
//       await signOut();
//       setMobileMenuOpen(false);
//     } catch (error) {
//       console.error('Error signing out:', error);
//     }
//   };

//   const isActive = (path: string) => location.pathname === path;

//   if (!user) return null;

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">

//           <Link to="/products" className="flex items-center gap-2 group flex-shrink-0">
//             <span className="font-bold text-lg sm:text-xl text-gray-800 group-hover:scale-105 transition-transform">
//               FashionHub
//             </span>
//           </Link>

//           <div className="hidden lg:flex items-center gap-1 xl:gap-2">
//             <Link
//               to="/Category"
//               className={`px-3 xl:px-4 py-2 rounded-lg font-medium text-sm transition-all ${
//                 isActive('/Category')
//                   ? 'bg-blue-50 text-blue-600'
//                   : 'text-gray-600 hover:bg-gray-50'
//               }`}
//             >
//               Category
//             </Link>
//             <Link
//               to="/brand"
//               className={`px-3 xl:px-4 py-2 rounded-lg font-medium text-sm transition-all ${
//                 isActive('/brand')
//                   ? 'bg-blue-50 text-blue-600'
//                   : 'text-gray-600 hover:bg-gray-50'
//               }`}
//             >
//               Brand
//             </Link>
//             <Link
//               to="/contact"
//               className={`px-3 xl:px-4 py-2 rounded-lg font-medium text-sm transition-all ${
//                 isActive('/contact')
//                   ? 'bg-blue-50 text-blue-600'
//                   : 'text-gray-600 hover:bg-gray-50'
//               }`}
//             >
//               Contact
//             </Link>
//             <Link
//               to="/FAQs"
//               className={`px-3 xl:px-4 py-2 rounded-lg font-medium text-sm transition-all ${
//                 isActive('/FAQs')
//                   ? 'bg-blue-50 text-blue-600'
//                   : 'text-gray-600 hover:bg-gray-50'
//               }`}
//             >
//               FAQ's
//             </Link>
//           </div>

//           <div className="hidden md:flex items-center gap-3 lg:gap-4">

//             <div className="relative cursor-pointer">
//               <div className="flex justify-between items-center">
//             <button
//               onClick={() => setIsCartOpen(true)}
//               className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
//             >
//               <ShoppingCart className="w-6 h-6 text-gray-700" />
//               {getTotalItems() > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
//                   {getTotalItems()}
//                 </span>
//               )}
//             </button>
//           </div>

//             </div>

//             <Link
//               to="/profile"
//               className={`flex items-center gap-2 lg:gap-3 px-2 lg:px-4 py-1 rounded-lg font-medium transition-all ${
//                 isActive('/profile')
//                   ? 'bg-blue-50 text-blue-600'
//                   : 'text-gray-600 hover:bg-gray-50'
//               }`}
//             >
//               <div className="relative flex-shrink-0">
//                 <img
//                   src="Rectangle 1.png"
//                   alt="Scarlet Johnson"
//                   className="w-9 h-9 lg:w-10 lg:h-10 rounded-full object-cover border-2 border-white shadow-lg"
//                 />
//                 <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
//               </div>
//               <div className="hidden lg:flex flex-col">
//                 <p className="text-gray-400 text-xs font-medium">Good Morning!</p>
//                 <h1 className="text-sm font-bold text-gray-900">Scarlet</h1>
//               </div>
//             </Link>
//           </div>

//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
//             aria-label="Toggle menu"
//           >
//             {mobileMenuOpen ? (
//               <X className="w-6 h-6 text-gray-600" />
//             ) : (
//               <Menu className="w-6 h-6 text-gray-600" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden py-4 border-t border-gray-200 animate-slideDown">
//             <div className="flex flex-col gap-2">
//               {/* Mobile Shopping Cart */}
//               <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50">
//                 <div className="relative">
//                   <ShoppingBag className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
//                   <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
//                     3
//                   </div>
//                 </div>
//                 <span className="text-gray-700 font-medium">Shopping Cart</span>
//               </div>

//               {/* Mobile Navigation Links */}
//               <Link
//                 to="/category"
//                 onClick={() => setMobileMenuOpen(false)}
//                 className={`px-4 py-3 rounded-lg font-medium transition-all ${
//                   isActive('/category')
//                     ? 'bg-blue-50 text-blue-600'
//                     : 'text-gray-600 hover:bg-gray-50'
//                 }`}
//               >
//                 Category
//               </Link>
//               <Link
//                 to="/brand"
//                 onClick={() => setMobileMenuOpen(false)}
//                 className={`px-4 py-3 rounded-lg font-medium transition-all ${
//                   isActive('/brand')
//                     ? 'bg-blue-50 text-blue-600'
//                     : 'text-gray-600 hover:bg-gray-50'
//                 }`}
//               >
//                 Brand
//               </Link>
//               <Link
//                 to="/contact"
//                 onClick={() => setMobileMenuOpen(false)}
//                 className={`px-4 py-3 rounded-lg font-medium transition-all ${
//                   isActive('/contact')
//                     ? 'bg-blue-50 text-blue-600'
//                     : 'text-gray-600 hover:bg-gray-50'
//                 }`}
//               >
//                 Contact
//               </Link>
//               <Link
//                 to="/FAQs"
//                 onClick={() => setMobileMenuOpen(false)}
//                 className={`px-4 py-3 rounded-lg font-medium transition-all ${
//                   isActive('/FAQs')
//                     ? 'bg-blue-50 text-blue-600'
//                     : 'text-gray-600 hover:bg-gray-50'
//                 }`}
//               >
//                 FAQ's
//               </Link>

//               {/* Mobile Profile */}
//               <Link
//                 to="/profile"
//                 onClick={() => setMobileMenuOpen(false)}
//                 className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
//                   isActive('/profile')
//                     ? 'bg-blue-50 text-blue-600'
//                     : 'text-gray-600 hover:bg-gray-50'
//                 }`}
//               >
//                 <User className="w-5 h-5" />
//                 <div className="flex flex-col">
//                   <span className="text-xs text-gray-400">Good Morning!</span>
//                   <span className="font-semibold">Scarlet Johnson</span>
//                 </div>
//               </Link>

//               {/* Mobile Logout */}
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-red-600 hover:bg-red-50 transition-all text-left"
//               >
//                 <LogOut className="w-5 h-5" />
//                 Logout
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-slideDown {
//           animation: slideDown 0.3s ease-out;
//         }
//       `}</style>

//       {isCartOpen && (
//         <>
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 z-50"
//             onClick={() => setIsCartOpen(false)}
//           ></div>
//           <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col">
//             {/* Cart Header */}
//             <div className="p-4 border-b flex justify-between items-center bg-purple-900 text-white">
//               <h2 className="text-xl font-bold">Shopping Cart ({getTotalItems()})</h2>
//               <button
//                 onClick={() => setIsCartOpen(false)}
//                 className="p-2 hover:bg-purple-800 rounded-full transition-colors"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             {/* Cart Items */}
//             <div className="flex-1 overflow-y-auto p-4">
//               {cart.length === 0 ? (
//                 <div className="text-center py-12">
//                   <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//                   <p className="text-gray-500">Your cart is empty</p>
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   {cart.map((item) => (
//                     <div key={item.id} className="flex gap-4 bg-gray-50 p-3 rounded-lg">
//                       <img
//                         src={item.image}
//                         alt={item.title}
//                         className="w-20 h-20 object-contain bg-white rounded"
//                       />
//                       <div className="flex-1 min-w-0">
//                         <h3 className="font-semibold text-sm line-clamp-2 mb-1">
//                           {item.title}
//                         </h3>
//                         <p className="text-purple-800 font-bold mb-2">
//                           ₹{item.price.toFixed(2)}
//                         </p>
//                         <div className="flex items-center gap-2">
//                           <button
//                             onClick={() => updateQuantity(item.id, -1)}
//                             className="w-7 h-7 bg-gray-200 hover:bg-gray-300 rounded flex items-center justify-center transition-colors"
//                           >
//                             <Minus className="w-4 h-4" />
//                           </button>
//                           <span className="font-semibold w-8 text-center">
//                             {item.quantity}
//                           </span>
//                           <button
//                             onClick={() => updateQuantity(item.id, 1)}
//                             className="w-7 h-7 bg-gray-200 hover:bg-gray-300 rounded flex items-center justify-center transition-colors"
//                           >
//                             <Plus className="w-4 h-4" />
//                           </button>
//                           <button
//                             onClick={() => removeFromCart(item.id)}
//                             className="ml-auto text-red-500 hover:text-red-700 text-sm font-medium"
//                           >
//                             Remove
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Cart Footer */}
//             {cart.length > 0 && (
//               <div className="border-t p-4 bg-gray-50">
//                 <div className="flex justify-between items-center mb-4">
//                   <span className="text-lg font-semibold">Total:</span>
//                   <span className="text-2xl font-bold text-purple-900">
//                     ₹{getTotalPrice().toFixed(2)}
//                   </span>
//                 </div>
//                 <button className="w-full bg-purple-800 hover:bg-purple-900 text-white py-3 rounded-lg font-semibold transition-colors">
//                   Checkout
//                 </button>
//               </div>
//             )}
//           </div>
//         </>
//       )}
//     </nav>

//   );
// }
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { supabase } from "../lib/supabase";
import { User, LogOut, Menu, X, ShoppingCart, Minus, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContext";

export default function Navbar() {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, removeFromCart, updateQuantity, getTotalItems, getTotalPrice } =
    useCart();

  const [profileName, setProfileName] = useState<string>(""); // For displaying user name

  // Fetch user name from Supabase
  useEffect(() => {
    if (user) fetchProfileName();
  }, [user]);

  const fetchProfileName = async () => {
    try {
      const { data, error } = await supabase
        .from("user_profiles")
        .select("name")
        .eq("id", user.id)
        .maybeSingle();

      if (error) throw error;
      if (data?.name) setProfileName(data.name);
    } catch (error) {
      console.error("Error fetching user name:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      setMobileMenuOpen(false);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  if (!user) return null;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/products"
            className="flex items-center gap-2 group flex-shrink-0"
          >
            <span className="font-bold text-lg sm:text-xl text-gray-800 group-hover:scale-105 transition-transform">
              FashionHub
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/Category"
              className={`px-3 xl:px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                isActive("/Category")
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Category
            </Link>
            <Link
              to="/brand"
              className={`px-3 xl:px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                isActive("/brand")
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Brand
            </Link>
            <Link
              to="/contact"
              className={`px-3 xl:px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                isActive("/contact")
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Contact
            </Link>
            <Link
              to="/FAQs"
              className={`px-3 xl:px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                isActive("/FAQs")
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              FAQ's
            </Link>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* Profile Link */}
            <Link
              to="/profile"
              className={`flex items-center gap-2 lg:gap-3 px-2 lg:px-4 py-1 rounded-lg font-medium transition-all ${
                isActive("/profile")
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <div className="relative flex-shrink-0">
                <img
                  src="Rectangle 1.png"
                  alt={profileName || "User"}
                  className="w-9 h-9 lg:w-10 lg:h-10 rounded-full object-cover border-2 border-white shadow-lg"
                />
                <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="hidden lg:flex flex-col">
                <p className="text-gray-400 text-xs font-medium">Welcome!</p>
                <h1 className="text-sm font-bold text-gray-900">
                  {profileName || "User"}
                </h1>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
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
              <Link
                to="/category"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive("/category")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                Category
              </Link>
              <Link
                to="/brand"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive("/brand")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                Brand
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive("/contact")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                Contact
              </Link>
              <Link
                to="/FAQs"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive("/FAQs")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                FAQ's
              </Link>

              {/* Mobile Profile */}
              <Link
                to="/profile"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive("/profile")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <User className="w-5 h-5" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Welcome!</span>
                  <span className="font-semibold">{profileName || "User"}</span>
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

      {/* Shopping Cart Sidebar */}
      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setIsCartOpen(false)}
          ></div>
          <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col">
            {/* Cart Header */}
            <div className="p-4 border-b flex justify-between items-center bg-purple-900 text-white">
              <h2 className="text-xl font-bold">
                Shopping Cart ({getTotalItems()})
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-purple-800 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 bg-gray-50 p-3 rounded-lg"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-contain bg-white rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm line-clamp-2 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-purple-800 font-bold mb-2">
                          ₹{item.price.toFixed(2)}
                        </p>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-7 h-7 bg-gray-200 hover:bg-gray-300 rounded flex items-center justify-center transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-semibold w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-7 h-7 bg-gray-200 hover:bg-gray-300 rounded flex items-center justify-center transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto text-red-500 hover:text-red-700 text-sm font-medium"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="border-t p-4 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-purple-900">
                    ₹{getTotalPrice().toFixed(2)}
                  </span>
                </div>
                <button className="w-full bg-purple-800 hover:bg-purple-900 text-white py-3 rounded-lg font-semibold transition-colors">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </nav>
  );
}
