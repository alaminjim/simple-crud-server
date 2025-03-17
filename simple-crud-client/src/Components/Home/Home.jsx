const Home = () => {
  const handelAdd = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("database added successful");
          form.reset();
        }
      });
  };
  return (
    <div>
      <form onSubmit={handelAdd}>
        <input type="text" name="name" id="" />
        <br></br>
        <input type="email" name="email" id="" />
        <br></br>
        <input type="submit" value="add user" />
      </form>
    </div>
  );
};

export default Home;
