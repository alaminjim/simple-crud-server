import { useLoaderData } from "react-router-dom";

const Server = () => {
  const user = useLoaderData();

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
        }
      });
  };
  return (
    <div>
      <h4>user: {user.length}</h4>
      {user.map((users) => (
        <p key={users._id}>
          {users._id} : {users.name} : {users.email}
          <button onClick={() => handelDelete(users._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Server;
