import AddTaskIcon from '@mui/icons-material/AddTask';
import BugReportIcon from '@mui/icons-material/BugReport';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import TerrainIcon from '@mui/icons-material/Terrain';

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Welcome]: {
    component: asyncComponentLoader(() => import('@/pages/Welcome')),
    path: '/',
    title: 'Town',
    icon: HomeIcon,
  },
  
  [Pages.AreasScreen]: {
    component: asyncComponentLoader(() => import('@/pages/AreasScreen')),
    path: '/areas-screen',
    title: 'Areas',
    icon: BugReportIcon,
  },
  [Pages.NotificationsScreen]: {
    component: asyncComponentLoader(() => import('@/pages/NotificationsScreen')),
    path: '/NotificationsScreen',
    title: 'Notifications',
    icon: AddTaskIcon,
  },
  [Pages.AccountScreen]: {
    component: asyncComponentLoader(() => import('@/pages/AccountsScreen')),
    path: '/AccountScreen',
    title: 'Account',
    icon: TerrainIcon,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
    title: '',
  },
  [Pages.Page1]: {
    component: asyncComponentLoader(() => import('@/pages/Page1')),
    path: '/page-1',
    title: '',
    icon: GitHubIcon,
  },
  [Pages.Page2]: {
    component: asyncComponentLoader(() => import('@/pages/Page2')),
    path: '/page-2',
    title: '',
    icon: AddTaskIcon,
  },
  [Pages.Page3]: {
    component: asyncComponentLoader(() => import('@/pages/Page3')),
    path: '/page-3',
    title: '',
    icon: TerrainIcon,
  },
};

export default routes;
