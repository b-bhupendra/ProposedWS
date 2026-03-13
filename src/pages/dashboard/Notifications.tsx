import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/src/components/ui/card';
import { mockNotifications } from '@/src/data/mockData';
import { Bell, CheckCircle2, AlertTriangle, Calendar, Info, MoreVertical } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { cn } from '@/src/lib/utils';

export default function Notifications() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'payment': return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      case 'alert': return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case 'appointment': return <Calendar className="w-5 h-5 text-blue-600" />;
      default: return <Info className="w-5 h-5 text-slate-600" />;
    }
  };

  const getBg = (type: string) => {
    switch (type) {
      case 'payment': return 'bg-emerald-100';
      case 'alert': return 'bg-red-100';
      case 'appointment': return 'bg-blue-100';
      default: return 'bg-slate-100';
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Notifications</h2>
          <p className="text-slate-500 mt-1">Stay updated on clinic activity and patient alerts.</p>
        </div>
        <Button variant="outline" className="text-slate-600">Mark all as read</Button>
      </div>

      <Card>
        <CardContent className="p-0 divide-y divide-slate-100">
          {mockNotifications.map((notification) => (
            <div 
              key={notification.id} 
              className={cn(
                "p-6 flex items-start gap-4 transition-colors hover:bg-slate-50/50",
                !notification.read && "bg-emerald-50/30"
              )}
            >
              <div className={cn("w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0", getBg(notification.type))}>
                {getIcon(notification.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-4 mb-1">
                  <p className={cn("text-sm font-medium", !notification.read ? "text-slate-900" : "text-slate-700")}>
                    {notification.message}
                  </p>
                  <span className="text-xs text-slate-500 whitespace-nowrap flex-shrink-0">{notification.time}</span>
                </div>
                {!notification.read && (
                  <div className="mt-3 flex gap-2">
                    <Button size="sm" variant="secondary" className="h-8 text-xs">View Details</Button>
                    <Button size="sm" variant="ghost" className="h-8 text-xs text-slate-500">Dismiss</Button>
                  </div>
                )}
              </div>

              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600 -mt-2 -mr-2">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
