import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Shield, 
  Users, 
  Target, 
  Award, 
  ArrowRight,
  MapPin,
  Mail,
  Phone
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "We prioritize the confidential nature of government affairs work with enterprise-grade security measures."
  },
  {
    icon: Users,
    title: "Client Focused", 
    description: "Every feature is designed with the unique needs of Texas lobbyists and advocacy professionals in mind."
  },
  {
    icon: Target,
    title: "Precision & Accuracy",
    description: "Real-time legislative tracking with verified data sources and automated quality checks."
  },
  {
    icon: Award,
    title: "Professional Excellence",
    description: "Built to the highest standards to support the critical work of government affairs professionals."
  }
];

const team = [
  {
    name: "Michael Rodriguez",
    role: "CEO & Founder",
    description: "Former Texas state government relations director with 15+ years in advocacy and technology.",
    image: "/api/placeholder/150/150"
  },
  {
    name: "Sarah Chen", 
    role: "CTO",
    description: "Previously led engineering teams at Fortune 500 companies specializing in secure government platforms.",
    image: "/api/placeholder/150/150"
  },
  {
    name: "David Martinez",
    role: "Head of Product",
    description: "Austin-based advocacy professional turned product leader, bringing deep industry expertise.",
    image: "/api/placeholder/150/150"
  }
];

const stats = [
  { label: "Active Users", value: "500+" },
  { label: "Bills Tracked", value: "10,000+" },
  { label: "Client Organizations", value: "150+" },
  { label: "Years of Experience", value: "15+" }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mb-4">
              About M5 Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Built by Advocates, 
              <span className="text-primary"> For Advocates</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We understand the unique challenges of Texas government affairs because we've lived them. 
              M5 Solutions was created by advocacy professionals to solve real problems in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded in Austin, Texas by former government relations professionals, 
                  M5 Solutions emerged from a simple observation: existing tools weren't 
                  built for the unique security and organizational needs of advocacy work.
                </p>
                <p>
                  After years of managing sensitive client relationships and complex 
                  legislative tracking with inadequate tools, our founders set out to 
                  create something better—a platform that understands the confidential 
                  nature of government affairs.
                </p>
                <p>
                  Today, M5 Solutions serves advocacy firms, lobbyists, and government 
                  affairs professionals across Texas, providing the security, organization, 
                  and efficiency they need to excel in their critical work.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="shadow-large">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at M5 Solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-0 shadow-soft">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{value.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals with deep roots in Texas government affairs and technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-soft text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-muted-foreground">
                Have questions? We'd love to hear from you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-soft text-center">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-sm text-muted-foreground">
                    Austin, Texas<br />
                    United States
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-soft text-center">
                <CardContent className="p-6">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    hello@m5solutions.com<br />
                    support@m5solutions.com
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-soft text-center">
                <CardContent className="p-6">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-sm text-muted-foreground">
                    (512) 555-0123<br />
                    Mon-Fri 9AM-6PM CT
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <Card className="border-primary/20 shadow-glow bg-gradient-subtle">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Transform Your Practice?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join advocacy professionals across Texas who trust M5 Solutions for their 
                legislative tracking and client management needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/login">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/contact">Contact Us</Link>
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