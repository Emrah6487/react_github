import Navbar from "./components/Navbar";
import UserList from "./components/UserList";


function App() {
  return (
    <div>
      <Navbar title="Github"/>
      <div className="container mt-5">
        <UserList/>
      </div>
    </div>
  );
}



export default App;
