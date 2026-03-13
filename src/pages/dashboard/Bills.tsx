import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/src/components/ui/card';
import { mockBills } from '@/src/data/mockData';
import { Badge } from '@/src/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/src/components/ui/table';
import { Button } from '@/src/components/ui/button';
import { Search, Filter, Download, MoreHorizontal } from 'lucide-react';

export default function Bills() {
  const [filter, setFilter] = useState('all');

  const filteredBills = mockBills.filter(bill => {
    if (filter === 'all') return true;
    return bill.status === filter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search patients or invoices..." 
              className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 w-64"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="w-4 h-4 text-slate-600" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="text-slate-600">
            <Download className="w-4 h-4 mr-2" /> Export
          </Button>
          <Button>Create Invoice</Button>
        </div>
      </div>

      <div className="flex gap-2 border-b border-slate-200 pb-px">
        {['all', 'paid', 'pending', 'overdue'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              filter === status 
                ? 'border-emerald-600 text-emerald-600' 
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50/50">
                <TableHead className="pl-6">Invoice ID</TableHead>
                <TableHead>Patient Name</TableHead>
                <TableHead>Treatment</TableHead>
                <TableHead>Date Issued</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right pr-6">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBills.map((bill) => (
                <TableRow key={bill.id}>
                  <TableCell className="pl-6 font-medium text-slate-900">{bill.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                        {bill.patient.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-medium text-slate-700">{bill.patient}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-600">{bill.treatment}</TableCell>
                  <TableCell className="text-slate-600">{bill.date}</TableCell>
                  <TableCell>
                    <Badge variant={
                      bill.status === 'paid' ? 'success' :
                      bill.status === 'pending' ? 'warning' : 'destructive'
                    }>
                      {bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-medium text-slate-900">${bill.amount.toFixed(2)}</TableCell>
                  <TableCell className="text-right pr-6">
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
