import { createBrowserRouter, Navigate , RouterProvider,} from "react-router-dom";
import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';
import TaskDetailsPage from "./pages/TaskDetailsPage";
import Layout from "./Layout";
import Signin from "./pages/Signin";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" replace />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "home",
        element: (<HomePage />)
      },
      {
        path: "tasks",
        element: (<TaskListPage />)
      },
      {
        path: "tasks/:id",
        element: (<TaskDetailsPage />)
      },
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App