import connectMongo from "../../utils/connectMongo";
import Program from "../../models/Program";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        res.json("CONNECTING TO MONGO");
        await connectMongo();
        const newProgram = await Program.create(req.body);
        res.json(newProgram);
      } catch (err) {
        res.json(err);
      }

    case "GET":
      try {
        await connectMongo();
        const Programs = await Program.find();
        res.json(Programs);
      } catch (err) {
        res.json("there is an error");
      }
  }
}
