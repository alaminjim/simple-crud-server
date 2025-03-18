import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loaderUser = useLoaderData();

  const handelUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updateUser = { name, email };

    console.log(name, email);

    fetch(`http://localhost:5000/user/${loaderUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    }).then((res) =>
      res.json().then((data) => {
        console.log(data);
        if (data.matchedCount) {
          alert("updated successful");
          form.reset();
        }
      })
    );
  };

  return (
    <div>
      <h2>update user name {loaderUser.name}</h2>
      <form onSubmit={handelUpdate}>
        <input type="text" name="name" defaultValue={loaderUser?.name} id="" />
        <br></br>
        <input
          type="email"
          name="email"
          defaultValue={loaderUser?.email}
          id=""
        />
        <br></br>
        <button>Update</button>
      </form>
    </div>
  );
};

export default Update;
