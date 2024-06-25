import{ createBrowserRouter , RouterProvider } from 'react-router-dom';


/**import all rout components */
import Register from './components/Register';
import Login from './components/Login';
import Password from './components/Password';
import Reset from './components/Reset';
import Recovery from './components/Recovery';
import Profile from './components/Profile';
import Pagenotfound from './components/Pagenotfound';
import Username from './components/Username';

/**create routers */
const router = createBrowserRouter([
  {
    path :'/Register',
    element:<Register>Register page</Register>
  },
  {
    path :'/Login',
    element:<Login>Login page</Login>
  },
  {
    path :'/Password',
    element:<Password>Password page</Password>
  },
  {
    path :'/Reset',
    element:<Reset>Reset page</Reset>
  },
  {
    path :'/Recovery',
    element:<Recovery>Recovery page</Recovery>
  },
  {
    path :'/Profile',
    element:<Profile>Profile page</Profile>
  },
  {
    path :'/*',
    element:<Pagenotfound>Pagenotfound page</Pagenotfound>
  },
  {
    path :'/',
    element:<Username>Username page</Username>
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
