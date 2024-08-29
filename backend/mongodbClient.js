import { MongoClient, ServerApiVersion } from "mongodb";
const uri =
  "mongodb+srv://gestopajonas:VWFyYs6Di805km0W@cluster0.x28nq0l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
