import usersData from "./data/users.json";
import UserList from "./components/UserList";
import AverageAge from "./components/AverageAge";

const users = usersData.filter((e) => e.role === "user");
const admin = usersData.filter((e) => e.role === "admin");
const sum = admin.map((e) => e.age).reduce((a, b) => a + b);
const avg = sum / admin.length;

const App = () => {
  return (
    <>
      <UserList users={users} />
      <AverageAge average={avg} />
    </>
  );
};

export default App;
