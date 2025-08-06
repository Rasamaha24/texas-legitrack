import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Users, 
  FileText, 
  Bell, 
  BarChart3, 
  Plus,
  Search,
  Filter,
  Download,
  AlertTriangle,
  CheckCircle,
  Clock,
  Scale,
  LogOut
} from "lucide-react";

// Mock data
const stats = [
  { title: "Active Clients", value: "12", icon: Users, change: "+2 this month" },
  { title: "Bills Tracked", value: "247", icon: FileText, change: "+15 this week" },
  { title: "Unread Notifications", value: "8", icon: Bell, change: "3 urgent" },
  { title: "High Priority Bills", value: "5", icon: AlertTriangle, change: "2 new" }
];

const recentActivity = [
  { id: 1, type: "bill_update", title: "HB 1234 passed committee", time: "2 hours ago", urgent: false },
  { id: 2, type: "client_update", title: "New client onboarded: Tech Corp", time: "4 hours ago", urgent: false },
  { id: 3, type: "deadline", title: "SB 5678 hearing tomorrow", time: "6 hours ago", urgent: true },
  { id: 4, type: "bill_update", title: "HB 9012 status changed", time: "1 day ago", urgent: false }
];

const clients = [
  { id: 1, name: "TechCorp Industries", status: "active", industry: "Technology", billsTracked: 15, contact: "john@techcorp.com" },
  { id: 2, name: "Healthcare Alliance", status: "active", industry: "Healthcare", billsTracked: 23, contact: "sarah@healthcare.com" },
  { id: 3, name: "Energy Partners LLC", status: "active", industry: "Energy", billsTracked: 8, contact: "mike@energy.com" }
];

const bills = [
  { id: 1, number: "HB 1234", title: "Technology Privacy Act", status: "committee", priority: "high", position: "support", client: "TechCorp Industries" },
  { id: 2, number: "SB 5678", title: "Healthcare Reform Bill", status: "floor", priority: "urgent", position: "oppose", client: "Healthcare Alliance" },
  { id: 3, number: "HB 9012", title: "Clean Energy Initiative", status: "introduced", priority: "medium", position: "support", client: "Energy Partners LLC" }
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-status-active";
      case "urgent": return "bg-status-urgent";
      case "pending": return "bg-status-pending";
      default: return "bg-status-neutral";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent": return "bg-status-urgent";
      case "high": return "bg-status-urgent";
      case "medium": return "bg-status-pending";
      case "low": return "bg-status-neutral";
      default: return "bg-status-neutral";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scale className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">M5 Solutions</span>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary">Professional Plan</Badge>
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button variant="ghost" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your advocacy practice.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="clients">Client Management</TabsTrigger>
            <TabsTrigger value="legislation">Legislative Tracking</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="border-0 shadow-soft">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                          <p className="text-2xl font-bold">{stat.value}</p>
                          <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest updates and notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${activity.urgent ? 'bg-status-urgent' : 'bg-status-active'}`} />
                        <div className="flex-1">
                          <p className="text-sm font-medium">{activity.title}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                        {activity.urgent && (
                          <Badge variant="destructive" className="text-xs">Urgent</Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Priority Legislation */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle>Priority Legislation</CardTitle>
                  <CardDescription>Top 3 bills requiring attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bills.slice(0, 3).map((bill) => (
                      <div key={bill.id} className="flex items-center justify-between p-3 rounded-lg border">
                        <div>
                          <p className="font-medium">{bill.number}</p>
                          <p className="text-sm text-muted-foreground">{bill.title}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getPriorityColor(bill.priority)} variant="secondary">
                            {bill.priority}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Client Management Tab */}
          <TabsContent value="clients" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Client Management</h2>
                <p className="text-muted-foreground">Manage your advocacy clients and relationships</p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Client
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search clients..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Clients</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clients.map((client) => (
                <Card key={client.id} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{client.name}</CardTitle>
                      <Badge className={getStatusColor(client.status)} variant="secondary">
                        {client.status}
                      </Badge>
                    </div>
                    <CardDescription>{client.industry}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Bills Tracked:</span>
                        <span className="text-sm font-medium">{client.billsTracked}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Contact:</span>
                        <span className="text-sm font-medium">{client.contact}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-4">
                      <Button variant="outline" size="sm" className="flex-1">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Edit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Legislative Tracking Tab */}
          <TabsContent value="legislation" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Legislative Tracking</h2>
                <p className="text-muted-foreground">Monitor bills and legislative activity</p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Track New Bill
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search bills..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Bills</SelectItem>
                  <SelectItem value="introduced">Introduced</SelectItem>
                  <SelectItem value="committee">In Committee</SelectItem>
                  <SelectItem value="floor">On Floor</SelectItem>
                  <SelectItem value="passed">Passed</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {bills.map((bill) => (
                <Card key={bill.id} className="border-0 shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <h3 className="font-semibold">{bill.number}</h3>
                          <Badge className={getStatusColor(bill.status)} variant="secondary">
                            {bill.status}
                          </Badge>
                          <Badge className={getPriorityColor(bill.priority)} variant="secondary">
                            {bill.priority}
                          </Badge>
                          <Badge variant="outline">
                            {bill.position}
                          </Badge>
                        </div>
                        <h4 className="font-medium mb-1">{bill.title}</h4>
                        <p className="text-sm text-muted-foreground">Client: {bill.client}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit Tracking
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Reports & Analytics</h2>
                <p className="text-muted-foreground">Generate professional reports and insights</p>
              </div>
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <BarChart3 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Client Activity Report</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive report of client engagement and bill tracking activity
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <FileText className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Legislative Summary</h3>
                  <p className="text-sm text-muted-foreground">
                    Summary of all tracked legislation and status updates
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <Clock className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Deadline Tracker</h3>
                  <p className="text-sm text-muted-foreground">
                    Upcoming deadlines and important dates for tracked bills
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle>Quick Analytics</CardTitle>
                <CardDescription>Key metrics for your advocacy practice</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">85%</div>
                    <p className="text-sm text-muted-foreground">Bills Successfully Tracked</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">24</div>
                    <p className="text-sm text-muted-foreground">Average Response Time (hours)</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">98%</div>
                    <p className="text-sm text-muted-foreground">Client Satisfaction Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}