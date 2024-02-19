import { createBrowserRouter } from 'react-router-dom';
import AccountPage from '../../features/auth/AccountPage';
import EventDashboard from '../../features/events/dashboard/EventDashboard';
import EventDetailedPage from '../../features/events/details/EventDetailedPage';
import EventForm from '../../features/events/form/EventForm';
import ProfilePage from '../../features/profiles/ProfilePage';
import Scratch from '../../features/scratch/Scratch';
import App from '../layout/App';
import UnauthComponent from '../layout/UnauthComponent';
import RequireAuth from './RequireAuth';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <RequireAuth />,
        children: [
          { path: '/manage/:id', element: <EventForm /> },
          { path: '/profiles/:id', element: <ProfilePage /> },
          { path: '/createEvent', element: <EventForm key='create' /> },
          { path: '/account', element: <AccountPage /> },
        ],
      },
      { path: '/events', element: <EventDashboard /> },
      { path: '/events/:id', element: <EventDetailedPage /> },
      { path: '/scratch', element: <Scratch /> },
      { path: '/unauthorised', element: <UnauthComponent /> },
    ],
  },
]);
