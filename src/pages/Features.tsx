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
  Database,
  Globe,
  Clock,
  ArrowRight
} from "lucide-react";

const mainFeatures = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and role-based access control",
    features: [
      "End-to-end data encryption",
      "Multi-factor authentication", 
      "Role-based permissions",
      "Audit trails and compliance",
      "SOC 2 Type II compliance ready"
    ]
  },
  {
    icon: FileText,
    title: "Legislative Tracking",
    description: "Comprehensive bill monitoring and analysis",
    features: [
      "Real-time Texas legislature monitoring",
      "Automated status updates",
      "Priority management system",
      "Position tracking (support/oppose)",
      "Committee and sponsor tracking"
    ]
  },
  {
    icon: Users,
    title: "Client Management", 
    description: "Professional client relationship tools",
    features: [
      "Secure client portals",
      "Client-specific bill tracking",
      "Contact management",
      "Industry categorization",
      "Access control per client"
    ]
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Intelligent alerts and communication",
    features: [
      "Real-time bill updates",
      "Deadline reminders",
      "Custom alert preferences",
      "Email and in-app notifications",
      "Client communication logs"
    ]
  },
  {
    icon: BarChart3,
    title: "Advanced Reporting",
    description: "Professional analytics and insights",
    features: [
      "Custom client reports",
      "Legislative tracking summaries",
      "Activity dashboards",
      "Export capabilities",
      "Trend analysis"
    ]
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Centralized information hub",
    features: [
      "Integrated bill database",
      "Client information management",
      "Document storage",
      "Search and filtering",
      "Data backup and recovery"
    ]
  }
];

const additionalFeatures = [
  {
    icon: Zap,
    title: "Real-time Sync",
    description: "Instant updates across all devices and users"
  },
  {
    icon: Globe,
    title: "Web-based Platform",
    description: "Access from anywhere with secure cloud hosting"
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Continuous legislative tracking and system uptime"
  },
  {
    icon: Lock,
    title: "Secure Portals",
    description: "Individual client access with customized permissions"
  }
];

export default function Features() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mb-4">
              Complete Feature Suite
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Everything You Need for 
              <span className="text-primary"> Professional Advocacy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed specifically for Texas lobbyists and advocacy firms. 
              Secure, efficient, and built for government affairs professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Core Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional-grade tools for legislative tracking and client management.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 text-status-active mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Additional Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Extended functionality to enhance your advocacy practice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-soft text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Enterprise-Grade Security
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Your client data and advocacy strategies are protected with the highest levels 
                of security, designed for the confidential nature of government affairs work.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Bank-Level Encryption</p>
                    <p className="text-sm text-muted-foreground">256-bit AES encryption for all data at rest and in transit</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Lock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Role-Based Access</p>
                    <p className="text-sm text-muted-foreground">Granular permissions for different user roles and client access</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Compliance Ready</p>
                    <p className="text-sm text-muted-foreground">Built to meet SOC 2 Type II and government security standards</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Card className="shadow-large">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-status-active" />
                    <span>Security Dashboard</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Encryption Status</span>
                    <Badge variant="default" className="bg-status-active">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Two-Factor Auth</span>
                    <Badge variant="default" className="bg-status-active">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Access Controls</span>
                    <Badge variant="default" className="bg-status-active">Configured</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Audit Logging</span>
                    <Badge variant="default" className="bg-status-active">Active</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <Card className="border-primary/20 shadow-glow bg-gradient-subtle">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Experience the Complete Platform
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                See how M5 Solutions can transform your advocacy practice with 
                professional-grade tools and enterprise security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/login">
                    Start Free Trial
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