import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Shield, 
  Users, 
  FileText, 
  Bell, 
  BarChart3, 
  Lock, 
  Zap, 
  CheckCircle, 
  Star,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Client Portals",
    description: "Enterprise-grade security with role-based access control for confidential government affairs data."
  },
  {
    icon: FileText,
    title: "Legislative Tracking",
    description: "Real-time bill monitoring with automated status updates and priority management."
  },
  {
    icon: Users,
    title: "Client Management",
    description: "Comprehensive client relationship management with detailed advocacy tracking."
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Intelligent alerts for critical bill updates, deadlines, and client communications."
  },
  {
    icon: BarChart3,
    title: "Advanced Reports",
    description: "Professional reporting and analytics for client deliverables and strategic insights."
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "Instant synchronization of legislative data and client information across all users."
  }
];

const benefits = [
  "Streamline multi-client legislative tracking",
  "Secure client data with enterprise-grade encryption",
  "Automated bill monitoring and status updates", 
  "Professional client reporting and analytics",
  "Real-time collaboration across teams",
  "Integrated Notion workspace management"
];

const testimonials = [
  {
    name: "Sarah Martinez",
    role: "Senior Partner, Austin Government Affairs",
    content: "M5 Solutions transformed how we manage our 50+ client relationships. The security and organization are exactly what we needed for sensitive government work.",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Principal, Houston Advocacy Group",
    content: "The real-time legislative tracking has saved us countless hours. Our clients love the transparency and professional reporting capabilities.",
    rating: 5
  },
  {
    name: "Lisa Rodriguez",
    role: "Director, Dallas Policy Partners",
    content: "Finally, a platform built specifically for Texas lobbyists. The client portal security gives us confidence handling confidential advocacy strategies.",
    rating: 5
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mb-4">
              Trusted by Texas Advocacy Professionals
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Professional Legislative Tracking for 
              <span className="text-primary"> Texas Lobbyists</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Secure client portals, real-time bill tracking, and comprehensive advocacy management. 
              Built specifically for government affairs professionals and advocacy firms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/login">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/features">View Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Everything You Need for Professional Advocacy
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed for the unique needs of Texas lobbyists and advocacy firms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Streamline Your Government Affairs Practice
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                M5 Solutions provides the security, organization, and efficiency that professional 
                lobbyists need to excel in today's complex legislative environment.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-status-active mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Card className="shadow-large">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle>Client Dashboard</CardTitle>
                    <Lock className="h-5 w-5 text-status-active" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="h-3 bg-primary/20 rounded" />
                      <div className="h-3 bg-muted rounded w-2/3" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-primary/20 rounded" />
                      <div className="h-3 bg-muted rounded w-2/3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Trusted by Texas Advocacy Leaders
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how M5 Solutions is transforming government affairs practices across Texas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <Card className="border-primary/20 shadow-glow bg-gradient-subtle">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Modernize Your Practice?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join Texas advocacy professionals who trust M5 Solutions for secure, 
                efficient legislative tracking and client management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/login">
                    Start Your Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/contact">Schedule Demo</Link>
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
