import { useState } from 'react';
import { ChevronDown, Search, ShoppingCart, Truck, CreditCard, RotateCcw, Shield, HelpCircle, MessageCircle } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle },
    { id: 'orders', name: 'Orders & Payment', icon: ShoppingCart },
    { id: 'shipping', name: 'Shipping & Delivery', icon: Truck },
    { id: 'returns', name: 'Returns & Refunds', icon: RotateCcw },
    { id: 'account', name: 'Account & Security', icon: Shield }
  ];

  const faqs = [
    {
      category: 'orders',
      question: 'How do I place an order?',
      answer: 'To place an order, simply browse our products, add items to your cart, and proceed to checkout. You\'ll need to provide shipping information and payment details. Once your order is confirmed, you\'ll receive an email with your order details and tracking information.'
    },
    {
      category: 'orders',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. All payments are processed securely through encrypted connections to protect your information.'
    },
    {
      category: 'orders',
      question: 'Can I modify or cancel my order?',
      answer: 'You can modify or cancel your order within 1 hour of placing it by contacting our customer service team. After this window, orders are processed for shipment and cannot be modified. However, you can always return items once you receive them.'
    },
    {
      category: 'orders',
      question: 'Do you offer discounts or promotional codes?',
      answer: 'Yes! We regularly offer promotional codes and discounts. Sign up for our newsletter to receive exclusive offers, and check our website\'s homepage for current promotions. You can apply promo codes at checkout.'
    },
    {
      category: 'shipping',
      question: 'How long does shipping take?',
      answer: 'Standard shipping typically takes 5-7 business days. Express shipping (2-3 business days) and overnight shipping options are also available. International orders may take 10-14 business days depending on the destination country and customs processing.'
    },
    {
      category: 'shipping',
      question: 'How much does shipping cost?',
      answer: 'Shipping costs vary based on your location and the shipping method selected. Standard shipping is free on orders over $50. Express shipping starts at $9.99, and overnight shipping starts at $19.99. Exact costs will be calculated at checkout.'
    },
    {
      category: 'shipping',
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to over 100 countries worldwide. International shipping rates and delivery times vary by destination. Please note that customers are responsible for any customs duties or taxes imposed by their country.'
    },
    {
      category: 'shipping',
      question: 'How can I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via email. You can use this number to track your package on our website or the carrier\'s website. You can also check your order status by logging into your account and viewing order history.'
    },
    {
      category: 'returns',
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items. Products must be unused, in original packaging, and in resalable condition. To initiate a return, log into your account, go to order history, and select the items you wish to return. We\'ll provide a prepaid return label.'
    },
    {
      category: 'returns',
      question: 'How long does it take to process a refund?',
      answer: 'Once we receive your returned item, we\'ll inspect it and process your refund within 5-7 business days. The refund will be issued to your original payment method. Please allow an additional 3-5 business days for the refund to appear in your account.'
    },
    {
      category: 'returns',
      question: 'Can I exchange an item instead of returning it?',
      answer: 'Yes! If you need a different size, color, or want to exchange for a different product, select the exchange option when initiating your return. We\'ll ship your replacement as soon as we receive your original item.'
    },
    {
      category: 'returns',
      question: 'Who pays for return shipping?',
      answer: 'For defective or incorrect items, we provide a prepaid return label at no cost to you. For other returns, a small return shipping fee may be deducted from your refund. However, if you have our premium membership, all returns are free.'
    },
    {
      category: 'account',
      question: 'How do I create an account?',
      answer: 'Click the "Sign Up" button in the top right corner of our website. You\'ll need to provide your email address, create a password, and fill in some basic information. You can also sign up using your Google or Facebook account for faster registration.'
    },
    {
      category: 'account',
      question: 'I forgot my password. How do I reset it?',
      answer: 'Click "Forgot Password" on the login page and enter your email address. We\'ll send you a password reset link. Click the link in the email and follow the instructions to create a new password. The link expires after 24 hours for security.'
    },
    {
      category: 'account',
      question: 'Is my personal information secure?',
      answer: 'Absolutely. We use industry-standard SSL encryption to protect your data. Your payment information is never stored on our servers - it\'s processed securely through our payment partners. We never share your personal information with third parties without your consent.'
    },
    {
      category: 'account',
      question: 'How do I update my account information?',
      answer: 'Log into your account and click on "Account Settings" or "Profile." From there, you can update your email, password, shipping addresses, payment methods, and communication preferences. Changes are saved automatically.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl mb-8">Find answers to common questions about our products and services</p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-lg text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
            />
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12">
            <HelpCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-700 mb-2">No results found</h3>
            <p className="text-slate-600">Try adjusting your search or category filter</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Contact Support Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Still have questions?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Can't find the answer you're looking for? Our customer support team is here to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Contact Support
            </button>
            <button className="px-8 py-3 bg-slate-100 text-slate-900 font-semibold rounded-lg hover:bg-slate-200 transition-colors">
              Live Chat
            </button>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-slate-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Payment Options</h3>
              <p className="text-slate-600 text-sm">Learn about secure payment methods</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-4">
                <Truck className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Shipping Info</h3>
              <p className="text-slate-600 text-sm">View shipping rates and delivery times</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mx-auto mb-4">
                <RotateCcw className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Return Policy</h3>
              <p className="text-slate-600 text-sm">Read our complete return policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}