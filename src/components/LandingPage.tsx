import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  BarChart2,
  Users,
  MapPin,
  PhoneCall,
  Activity,
  Layers,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const LandingPage: React.FC = () => {
  const pricingfeatures = [
    "Smart Local Touch Optimization",
    "Real-time Analytics Dashboard",
    "Dynamic Variable Support",
    "Automatic Call Analysis",
    "Sentiment Analysis",
    "Failed Call Auto-Retry",
  ];
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img
                src="/recall-logo.png"
                alt="Recall Logo"
                className="h-8 w-auto"
              />
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Recall
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-600 font-medium hover:text-blue-600 transition-colors duration-300"
              >
                Features
              </a>
              <a
                href="#benefits"
                className="text-gray-600 font-medium hover:text-blue-600 transition-colors duration-300"
              >
                Benefits
              </a>
              <a
                href="#pricing"
                className="text-gray-600 font-medium hover:text-blue-600 transition-colors duration-300"
              >
                Pricing
              </a>
            </div>
            <Link
              to="/auth"
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition duration-300 hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0 bg-gradient-radial from-blue-50 to-transparent opacity-70"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Outbound Calling
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Supercharge your Retell campaigns with intelligent routing, local
              touch optimization, and real-time analytics
            </p>
            <Link
              to="/auth"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white font-semibold text-lg shadow-xl shadow-blue-500/30 hover:shadow-blue-500/40 transition duration-300 hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section
        id="features"
        className="py-24 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-600">
              Everything you need to optimize your outbound calling campaigns
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="w-6 h-6 text-blue-600" />,
                title: "Local Touch Technology",
                description:
                  "Automatically match outbound numbers with contact area codes to increase answer rates",
                gradient: "from-blue-500 to-blue-600",
              },
              {
                icon: <BarChart2 className="w-6 h-6 text-purple-600" />,
                title: "Advanced Analytics",
                description:
                  "Track hit rates, call durations, and sentiment analysis in real-time",
                gradient: "from-purple-500 to-purple-600",
              },
              {
                icon: <Activity className="w-6 h-6 text-green-600" />,
                title: "Optimal Dialing",
                description:
                  "Smart routing and timing algorithms to maximize conversion rates",
                gradient: "from-green-500 to-green-600",
              },
              {
                icon: <Layers className="w-6 h-6 text-orange-600" />,
                title: "Parallel Processing",
                description:
                  "Concurrent dialing within your Retell API limits for maximum efficiency",
                gradient: "from-orange-500 to-orange-600",
              },
              {
                icon: <PhoneCall className="w-6 h-6 text-red-600" />,
                title: "Smart Retry Logic",
                description:
                  "Automatically redial failed calls with intelligent timing",
                gradient: "from-red-500 to-red-600",
              },
              {
                icon: <Users className="w-6 h-6 text-indigo-600" />,
                title: "Dynamic Variables",
                description:
                  "Personalize each call with custom data fields for more effective conversations",
                gradient: "from-indigo-500 to-indigo-600",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100"
              >
                <div
                  className={`bg-gradient-to-br ${feature.gradient} p-3 rounded-xl inline-block mb-4 shadow-lg`}
                >
                  <div className="bg-white rounded-lg p-2">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose Recall?</h2>
              <p className="text-gray-600">
                Designed to maximize your outbound calling success
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {[
                  "Intelligent local number matching for higher answer rates",
                  "Real-time analytics and performance tracking",
                  "Automated retry system for failed calls",
                  "Concurrent dialing with smart load balancing",
                  "Detailed call logs and transcripts",
                  "Custom dynamic variables support",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 bg-gray-50 p-4 rounded-xl"
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-1 shadow-lg">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-8">Key Metrics</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Answer Rate Increase", value: "Up to 40%" },
                    { label: "Cost Reduction", value: "Up to 25%" },
                    { label: "Conversion Boost", value: "Up to 35%" },
                    { label: "Time Saved", value: "Up to 60%" },
                  ].map((metric, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-lg"
                    >
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600">
              Choose the perfect plan for your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Basic Caller",
                price: 25,
                calls: 5000,
                gradient: "from-blue-600 to-blue-700",
              },
              {
                name: "Professional Caller",
                price: 100,
                calls: 25000,
                gradient: "from-blue-600 via-blue-700 to-blue-800",
              },
              {
                name: "Enterprise Caller",
                price: 500,
                calls: 150000,
                gradient: "from-blue-700 to-blue-900",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${plan.gradient} p-8`}>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-white">
                      ${plan.price}
                    </span>
                    <span className="text-white/80 ml-2">one-time</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-gray-600 mb-6">
                    {plan.calls.toLocaleString()} Retell-powered dials
                  </div>
                  <ul className="space-y-4 mb-8">
                    {pricingfeatures.map((pricingfeatures, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                        {pricingfeatures}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/auth"
                    className={`block w-full py-3 px-6 rounded-xl text-center font-semibold bg-gradient-to-r ${plan.gradient} text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition duration-300 hover:-translate-y-0.5`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/recall-logo.png"
                  alt="Recall Logo"
                  className="h-8 w-auto"
                />
                <span className="text-2xl font-bold text-gray-900">Recall</span>
              </div>
              <p className="text-gray-600">
                Revolutionizing outbound calling with intelligent automation and
                analytics
              </p>
            </div>
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Documentation"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers"],
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms", "Security"],
              },
            ].map((column, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-900 mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            © 2024 Recall. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
