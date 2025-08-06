import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle, ArrowRight, Star } from "lucide-react";

const plans = [
  {
    name: "Professional",
    description: "Perfect for individual lobbyists and small practices",
    price: "$199",
    period: "per month",
    features: [
      "Up to 5 clients",
      "Unlimited bill tracking",
      "Real-time notifications",
      "Basic reporting",
      "Email support",
      "Secure client portals",
      "Mobile access"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Enterprise",
    description: "Ideal for advocacy firms and multi-client practices",
    price: "$499",
    period: "per month",
    features: [
      "Unlimited clients",
      "Advanced bill tracking",
      "Priority notifications",
      "Custom reporting",
      "Priority support",
      "Advanced security",
      "Team collaboration",
      "API access",
      "Custom integrations"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise Plus",
    description: "For large organizations with complex needs",
    price: "Custom",
    period: "contact us",
    features: [
      "Everything in Enterprise",
      "Dedicated account manager",
      "Custom development",
      "On-premise deployment",
      "24/7 phone support",
      "Training and onboarding",
      "SLA guarantees",
      "Compliance certifications"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const faqs = [
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to start."
  },
  {
    question: "Can I change plans anytime?",
    answer: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately."
  },
  {
    question: "What security measures are in place?",
    answer: "We use bank-level 256-bit encryption, multi-factor authentication, and maintain SOC 2 Type II compliance standards."
  },
  {
    question: "Do you offer custom integrations?",
    answer: "Yes, our Enterprise and Enterprise Plus plans include API access and custom integration capabilities."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer email support for Professional, priority support for Enterprise, and 24/7 phone support for Enterprise Plus."
  },
  {
    question: "Is my data backed up?",
    answer: "Yes, we perform automated daily backups with 99.9% uptime guarantee and disaster recovery protocols."
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mb-4">
              Simple, Transparent Pricing
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Plans That Scale With 
              <span className="text-primary"> Your Practice</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your advocacy practice. All plans include our core 
              legislative tracking and client management features.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative border-0 shadow-soft hover:shadow-medium transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-primary shadow-glow' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-status-active mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className={`w-full ${plan.popular ? '' : 'variant-outline'}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    <Link to="/login">
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What's Included
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All plans include our core features with additional capabilities as you scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-4">Security & Compliance</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>End-to-end encryption</li>
                  <li>Multi-factor authentication</li>
                  <li>Role-based access</li>
                  <li>Audit trails</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-4">Legislative Tracking</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Real-time bill monitoring</li>
                  <li>Status notifications</li>
                  <li>Priority management</li>
                  <li>Committee tracking</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-4">Client Management</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Secure client portals</li>
                  <li>Contact management</li>
                  <li>Access controls</li>
                  <li>Communication logs</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-4">Reporting & Analytics</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Custom reports</li>
                  <li>Activity dashboards</li>
                  <li>Export capabilities</li>
                  <li>Trend analysis</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about our pricing and platform.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <Card className="border-primary/20 shadow-glow bg-gradient-subtle">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join Texas advocacy professionals who trust M5 Solutions for their 
                legislative tracking and client management needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/login">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}