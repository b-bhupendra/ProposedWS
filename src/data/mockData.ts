export const mockBills = [
  { id: 'B-1001', patient: 'Sarah Jenkins', date: '2026-03-10', amount: 250.00, status: 'paid', treatment: 'Teeth Cleaning' },
  { id: 'B-1002', patient: 'Michael Chen', date: '2026-03-11', amount: 850.00, status: 'pending', treatment: 'Root Canal' },
  { id: 'B-1003', patient: 'Emily Davis', date: '2026-03-12', amount: 120.00, status: 'overdue', treatment: 'Consultation' },
  { id: 'B-1004', patient: 'James Wilson', date: '2026-03-13', amount: 450.00, status: 'pending', treatment: 'Cavity Filling' },
  { id: 'B-1005', patient: 'Olivia Martinez', date: '2026-03-08', amount: 1200.00, status: 'paid', treatment: 'Crown Placement' },
];

export const mockNotifications = [
  { id: 1, type: 'payment', message: 'Payment of $250 received from Sarah Jenkins.', time: '2 hours ago', read: false },
  { id: 2, type: 'alert', message: 'Bill B-1003 for Emily Davis is overdue.', time: '5 hours ago', read: false },
  { id: 3, type: 'appointment', message: 'New appointment booked by David Smith for tomorrow at 10:00 AM.', time: '1 day ago', read: true },
  { id: 4, type: 'system', message: 'System maintenance scheduled for Sunday at 2:00 AM.', time: '2 days ago', read: true },
];

export const mockStats = {
  totalRevenue: 12450.00,
  pendingBills: 15,
  overdueBills: 3,
  activePatients: 142
};
