import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes"
import { ThemeContext } from "./context/theme";
import { ProjectsProvider } from "./context/projects/context";
import { UsersProvider } from "./context/members/context";
import { CommentsProvider } from "./context/comment/context";

const App = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div
    className={`h-screen w-full mx-auto py-2 ${
      theme === "dark" ? "dark" : ""
    }`}
  >
    <ProjectsProvider>
      <UsersProvider>
        <CommentsProvider>
          <RouterProvider router={router} />
        </CommentsProvider>
      </UsersProvider>
    </ProjectsProvider>
  </div>
  )
}
export default App;