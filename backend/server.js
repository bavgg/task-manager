import express from "express";
const app = express();
import { client } from './mongodbClient.js';

const port = 3000;


// app.use(cors());
app.use(express.json());

app.get("/tasks", async (req, res) => {

  try {
    await client.connect();

    const data = await client.db('taskManager').collection('tasks').find({}).toArray();

    res.status(200).json(data);
  } catch(error) {

  }
  
});

app.get("/", async (req, res) => {
  res.json({ test: 'test'});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
