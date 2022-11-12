import connectMongo from "../../utils/connectMongo";
import Program from "../../models/Program";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        res.json("CONNECTING TO MONGO");
        await connectMongo();
        console.log("GOT CONNECTED TO MONGO");

        console.log("CREATING TO MONGO");
        const newProgram = await Program.create(req.body);
        console.log("GOT CREATED TO MONGO");
        res.json(newProgram);
      } catch (err) {
        res.json(err);
      }

    case "GET":
      try {
        res.json("CONNECTING TO MONGO");
        await connectMongo();
        res.json("GOT CONNECTED TO MONGO");
        const Programs = await Program.find();
        res.json(Programs);
      } catch (err) {
        res.json("there is an error");
      }
  }
}
