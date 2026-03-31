import { Check } from "lucide-react";
import { useState } from "react";

const ProductCard = ({ addToCart }) => {
  const [addedIds, setAddedIds] = useState(new Set());

  const handleBuyNow = (product) => {
    addToCart(product);

    setAddedIds((prev) => new Set(prev).add(product.id));

    setTimeout(() => {
      setAddedIds((prev) => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }, 1500);
  };

  const products = [
    {
      id: 1,
      name: "AI Writing Pro",
      description:
        "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
      price: 29,
      period: "Mo",
      tag: "Best Seller",
      tagColor: "bg-amber-400 text-amber-900",
      icon: "✍️",
      features: ["Unlimited AI generations", "50+ writing templates", "Grammar checker"],
    },
    {
      id: 2,
      name: "Design Templates Pack",
      description:
        "2500+ premium templates for social media, presentations, and marketing materials.",
      price: 49,
      period: "One-Time",
      tag: "Popular",
      tagColor: "bg-violet-600 text-white",
      icon: "✨",
      features: ["2500+ templates", "Monthly updates", "Commercial license"],
    },
    {
      id: 3,
      name: "Premium Stock Assets",
      description:
        "Access millions of royalty-free photos, videos, and graphics for your projects.",
      price: 19,
      period: "Mo",
      tag: "New",
      tagColor: "bg-emerald-500 text-white",
      icon: "📸",
      features: ["10M+ assets", "Commercial use", "No attribution"],
    },
    {
      id: 4,
      name: "Automation Toolkit",
      description:
        "Automate repetitive tasks and streamline your workflow with powerful tools.",
      price: 79,
      period: "Mo",
      tag: "Popular",
      tagColor: "bg-violet-600 text-white",
      icon: "⚙️",
      features: ["50+ automations", "API access", "Custom workflows"],
    },
    {
      id: 5,
      name: "Resume Builder Pro",
      description: "Create professional resumes and cover letters that land interviews.",
      price: 15,
      period: "One-Time",
      tag: "New",
      tagColor: "bg-emerald-500 text-white",
      icon: "📄",
      features: ["100+ templates", "ATS optimization", "Export to PDF"],
    },
    {
      id: 6,
      name: "Social Media Content Kit",
      description:
        "Complete toolkit for creating engaging social media content across all platforms.",
      price: 39,
      period: "Mo",
      tag: "Best Seller",
      tagColor: "bg-amber-400 text-amber-900",
      icon: "📱",
      features: ["5000+ assets", "Scheduler included", "Analytics dashboard"],
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const isAdded = addedIds.has(product.id);

        return (
          <div
            key={product.id}
            className="bg-white rounded-3xl p-8 border-2 border-gray-300 hover:shadow-2xl transition-all hover:border-violet-200"
          >
            {product.tag && (
              <div
                className={`inline-block px-4 py-1 text-xs font-bold rounded-full mb-6 ${product.tagColor}`}
              >
                {product.tag}
              </div>
            )}

            <div className="text-5xl mb-6">{product.icon}</div>

            <h3 className="text-2xl font-semibold mb-3">{product.name}</h3>
            <p className="text-gray-600 mb-8 line-clamp-3">{product.description}</p>

            <div className="mb-8">
              <span className="text-4xl font-bold">${product.price}</span>
              <span className="text-gray-500">/{product.period}</span>
            </div>

            <ul className="space-y-2.5 mb-10">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="text-green-500"><Check  /></span> {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleBuyNow(product)}
              disabled={isAdded}
              className={`w-full py-3.5 font-semibold  rounded-2xl transition-all active:scale-95 ${
                isAdded
                  ? "bg-green-600 text-white cursor-default"
                  : "bg-linear-to-r from-violet-600 to-fuchsia-600 hover:bg-violet-700 text-white"
              }`}
            >
              {isAdded ? "✓ Added to Cart" : "Buy Now"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
