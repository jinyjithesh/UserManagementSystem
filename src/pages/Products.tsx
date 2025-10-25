import { useState, useEffect } from "react";
import { Search, Package, Filter, Heart } from "lucide-react";

import { useCart } from "../contexts/CartContext";
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState<string[]>([]);
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());
  const { addToCart } = useCart();
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [searchTerm, selectedCategory, products]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);

      const uniqueCategories = Array.from(
        new Set(data.map((p: Product) => p.category))
      );
      setCategories(uniqueCategories as string[]);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterProducts = () => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    setFilteredProducts(filtered);
  };

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(productId)) {
        newWishlist.delete(productId);
      } else {
        newWishlist.add(productId);
      }
      return newWishlist;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-purple-100 via-purple-50 to-pink-50 mx-4 sm:mx-6 lg:mx-8 mt-4 sm:mt-6 rounded-2xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-900 mb-4 lg:mb-6 leading-tight">
                Grab Upto 50% Off On
                <br />
                Selected Headphone
              </h1>
              <button className="bg-purple-800 hover:bg-purple-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg">
                Buy Now
              </button>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-purple-200 rounded-full opacity-50 blur-3xl"></div>
                <img
                  src="Group 102.png"
                  alt="group"
                  className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none bg-white shadow-sm text-sm sm:text-base"
              />
            </div>

            <div className="relative sm:min-w-[200px]">
              <Filter className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none bg-white shadow-sm appearance-none cursor-pointer text-sm sm:text-base capitalize"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option
                    key={category}
                    value={category}
                    className="capitalize"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {(searchTerm || selectedCategory !== "all") && (
            <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2">
              <p className="text-xs sm:text-sm text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="text-xs sm:text-sm text-purple-600 hover:text-purple-700 font-medium underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm p-4 sm:p-6 animate-pulse"
              >
                <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-3 sm:h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 sm:h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative aspect-square p-4 sm:p-6 bg-gray-50">
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all z-10"
                  >
                    <Heart
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                        wishlist.has(product.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-400"
                      }`}
                    />
                  </button>

                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-3 sm:p-4 border-t border-gray-100">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded capitalize">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] text-sm sm:text-base">
                    {product.title}
                  </h3>

                  <p className="text-xs text-gray-500 mb-2">
                    5 types available
                  </p>
                  {product.rating && (
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex text-yellow-400 text-sm">
                        {"★".repeat(Math.round(product.rating.rate))}
                        {"☆".repeat(5 - Math.round(product.rating.rate))}
                      </div>
                      <span className="text-xs text-gray-500">
                        ({product.rating.count})
                      </span>
                    </div>
                  )}

                  <div className="mb-3">
                    <span className="text-xl sm:text-2xl font-bold text-gray-900">
                      ₹{product.price.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 bg-purple-800 hover:bg-purple-900 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-all"
                    >
                      Add to Cart
                    </button>
                    <button className="px-3 sm:px-4 py-2 sm:py-2.5 border-2 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white rounded-lg font-semibold text-xs sm:text-sm transition-all whitespace-nowrap">
                      Add Shortlist
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-20">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              No products found
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
