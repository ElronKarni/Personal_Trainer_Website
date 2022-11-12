import connectMongo from "../../utils/connectMongo";
import Option from "../../models/Option";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        const { title, description } = req.body;
        await connectMongo();
        const newOption = await Option.create(req.body);
        res.json(newOption);
      } catch (err) {
        res.json(err);
      }

    case "GET":
      try {
        await connectMongo();
        const Options = await Option.find();
        res.json(Options);
      } catch (err) {
        res.json("there is an error");
      }
  }
}
