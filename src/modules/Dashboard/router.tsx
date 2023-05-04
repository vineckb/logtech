import { DashboardIndex } from './Index';
import { DashboardRoot } from './Root';

export const dashboardRouter = {
  path: 'dashboard',
  element: <DashboardRoot />,
  children: [
    {
      path: '',
      element: <DashboardIndex />,
    },
  ],
};
