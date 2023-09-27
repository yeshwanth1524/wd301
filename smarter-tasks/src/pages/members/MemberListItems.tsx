import { useUsersDispatch, useUsersState } from "../../context/members/context";
import { deleteUser } from "../../context/members/actions";

export default function MemberListItems() {
  let state: any = useUsersState();
  const dispatchUsers = useUsersDispatch();

  const handleDelete = async (id: number) => {
    try {
      await deleteUser(dispatchUsers, id);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const { users, isLoading, isError, errorMessage } = state;

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    <>
      {users.map((user: any) => (
        <div
          key={user.id}
          id="member"
          className="member block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {user.name}
          </h5>
          <p className="text-gray-600 dark:text-gray-400">Email: {user.email}</p>
          <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(user.id)}>
            &#10005; Delete
          </button>
        </div>
      ))}
    </>
  );
}
