const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// jimalamin7
// XzoAxhmz9v0NXjxD

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://jimalamin7:XzoAxhmz9v0NXjxD@cluster0.hdvmz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const userCollection = client.db("usersDB").collection("userCollection");

    app.get("/user", async (req, res) => {
      const courser = userCollection.find();
      const result = await courser.toArray();
      res.send(result);
    });

    app.get("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await userCollection.findOne(query);
      res.send(user);
    });

    app.post("/user", async (req, res) => {
      const users = req.body;
      console.log("new users", users);

      const result = await userCollection.insertOne(users);
      res.send(result);
    });

    app.put("/user/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);

      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const user = {
        $set: {
          name: updateUser.name,
          email: updateUser.email,
        },
      };
      const result = await userCollection.updateOne(filter, user, options);
      res.send(result);
    });

    app.delete("/user/:id", async (req, res) => {
      const id = req.params.id;
      console.log("delete", id);

      const query = { _id: new ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("crud server running");
});

app.listen(port, () => {
  console.log(`simple crud server running on port: ${port}`);
});
