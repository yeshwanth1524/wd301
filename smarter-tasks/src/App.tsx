import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Notfound from "./pages/Notfound";
import Signup from './pages/signup';
import Signin from './pages/signin';
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/notfound",
    element: <Notfound />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <Notfound />,
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

// import { createBrowserRouter, Navigate , RouterProvider,} from "react-router-dom";
// import HomePage from './pages/HomePage';
// import TaskListPage from './pages/TaskListPage';
// import TaskDetailsPage from "./pages/TaskDetailsPage";
// import Layout from "./Layout";
// import Signin from "./pages/Signin";
// import ProtectedRoute from "./ProtectedRoute";
// import NotFound from "./pages/Notfound";
// import ReactPlayground from './ReactPlayground';
// import Form from './Form';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navigate to="/signin" replace />,
//   },
//   {
//     path: "/signin",
//     element: <Signin />,
//   },
//   {
//     element: (
//       <ProtectedRoute>
//         <Layout />
//       </ProtectedRoute>
//     ),
//     children: [
//       {
//         path: "home",
//         element: (<HomePage />)
//       },
//       {
//         path: "tasks",
//         element: (<TaskListPage />)
//       },
//       {
//         path: "tasks/:id",
//         element: (<TaskDetailsPage />)
//       },
//       {
//         path: "*",
//         element: <Navigate to="/notfound" replace />
//       },
//       {
//         path: "Notfound",
//         element: <NotFound />,
//       }  
//     ]
//   }
// ]);

// const App = () => {
//   return (
//     <>
//       <Form />
//       <ReactPlayground />
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App