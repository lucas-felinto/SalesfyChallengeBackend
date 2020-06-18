import * as express from "express";
import * as cors from "cors";
import routes from "./routes";

const app = express();

app.use(routes);
app.use(cors());

const port = 3000;

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Salesfy Challenge Backend is listening on ${port}`);
});

export default app;
