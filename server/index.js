import express from "express";
import { OpenAIApi, Configuration } from "openai";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

mongoose.connect(
  process.env.DATABASE
);

const Search = mongoose.model("search", { search: String });

var values = [];
const myfunction = async () => {
  const data = await Search.find({}).then((res) => {
    values = res;
    console.log(values);
  });
};

myfunction();

const configuration = new Configuration({
  apiKey: process.env.API,
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/image", async (req, res) => {
  const requestData = req.body.prompt;

  const response = await openai.createImage({
    prompt: requestData,
    n: 1,
    size: "256x256",
  });
  var image_url = response.data.data[0].url;

  res.send(image_url);
});

app.post("/qanswer", async (req, res) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: ${req.body.prompt}?\nA:`,
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["\n"],
  });

  const user = new Search({ search: `${req.body.prompt}` });
  user.save().then(() => {
    console.log("data saved");
  });

  res.send(response.data.choices[0].text);
});

app.listen(3000, () => {
  console.log("server is started on port 3000");
});
