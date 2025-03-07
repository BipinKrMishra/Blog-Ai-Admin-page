"use client"

import { Card } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { motion } from 'framer-motion';
import { Activity, Users, FileText, TrendingUp } from 'lucide-react';

const articleData = [
  { name: 'Jan', articles: 400, users: 240 },
  { name: 'Feb', articles: 600, users: 320 },
  { name: 'Mar', articles: 800, users: 480 },
  { name: 'Apr', articles: 1000, users: 520 },
  { name: 'May', articles: 1200, users: 580 },
  { name: 'Jun', articles: 1500, users: 620 },
];

const revenueData = [
  { name: 'Jan', revenue: 12000 },
  { name: 'Feb', revenue: 19000 },
  { name: 'Mar', revenue: 25000 },
  { name: 'Apr', revenue: 35000 },
  { name: 'May', revenue: 42000 },
  { name: 'Jun', revenue: 50000 },
];

const statsData = [
  { 
    title: 'Total Articles',
    value: '1,234',
    change: '+12.5%',
    icon: FileText,
  },
  {
    title: 'Active Users',
    value: '856',
    change: '+5.2%',
    icon: Users,
  },
  {
    title: 'AI Generations',
    value: '25.4k',
    change: '+18.3%',
    icon: Activity,
  },
  {
    title: 'Revenue',
    value: '$45.2k',
    change: '+8.1%',
    icon: TrendingUp,
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Dashboard Overview</h1>
        <div className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  <p className="text-sm text-success mt-1">{stat.change}</p>
                </div>
                <stat.icon className="h-8 w-8 text-brand-purple opacity-80" />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Article Generation Trends</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={articleData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="name" stroke="currentColor" opacity={0.5} />
                <YAxis stroke="currentColor" opacity={0.5} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    borderRadius: '8px',
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="articles" 
                  stroke="rgb(var(--brand-purple))"
                  strokeWidth={2}
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="users" 
                  stroke="rgb(var(--brand-purple-light))"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Revenue Overview</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="name" stroke="currentColor" opacity={0.5} />
                <YAxis stroke="currentColor" opacity={0.5} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    borderRadius: '8px',
                  }}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
                />
                <Bar 
                  dataKey="revenue" 
                  fill="rgb(var(--brand-purple))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 col-span-2">
          <h2 className="text-xl font-semibold mb-4">Recent Articles</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-card-hover rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center">
                    <FileText className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium">How to Optimize Your Content for SEO</h3>
                    <p className="text-sm text-muted-foreground">Generated 2 hours ago</p>
                  </div>
                </div>
                <div className="text-sm text-success">Published</div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">System Status</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>CPU Usage</span>
                <span>65%</span>
              </div>
              <div className="h-2 bg-card-hover rounded-full overflow-hidden">
                <div className="h-full bg-brand-purple w-[65%] rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Memory Usage</span>
                <span>48%</span>
              </div>
              <div className="h-2 bg-card-hover rounded-full overflow-hidden">
                <div className="h-full bg-brand-purple w-[48%] rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Storage</span>
                <span>82%</span>
              </div>
              <div className="h-2 bg-card-hover rounded-full overflow-hidden">
                <div className="h-full bg-brand-purple w-[82%] rounded-full" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}