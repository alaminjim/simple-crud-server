import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Server = () => {
  const loaderUser = useLoaderData();
  const [users, setUsers] = useState(loaderUser);

  const handelDelete = (_id) => {
    console.log(_id);

    fetch(`http://localhost:5000/user/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("delete successful..!");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };
  return (
    <div>
      <h4>user: {users.length}</h4>
      {users.map((users) => (
        <p key={users._id}>
          {users._id} : {users.name} : {users.email}
          <Link to={`/update/${users._id}`}>
            <button>Update</button>
          </Link>
          <button onClick={() => handelDelete(users._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Server;
