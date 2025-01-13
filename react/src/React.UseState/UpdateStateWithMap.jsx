import { useState } from "react";

const UpdateStateWithMap = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", active: false },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Charlie", active: false },
  ]);

  const toggleActive = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <span>{user.name}</span>
          <button onClick={() => toggleActive(user.id)}>
            {user.active ? "Deactivate" : "Activate"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default UpdateStateWithMap;
