import express, { RequestHandler } from "express";
import { config } from "./config.mjs";
import { getTypeConfig } from "./helper.mjs";
import json2emap from "json2emap";

const insuring =
  (handler: RequestHandler): RequestHandler =>
  async (req, res, next) =>
    handler(req, res, next)?.catch(next);

const app = express();

app.use(express.json());

app.get(
  "/ping",
  insuring(async (_req, res) => {
    res.send("pong");
  }),
);

app.get(
  "/supportFromType",
  insuring(async (req, res) => {
    const { hoveringType, side, format } = req.query;

    if (typeof hoveringType !== "string") {
      res
        .status(400)
        .send("Invalid query parameters: 'hoveringType' must be a string.");
      return;
    }
    if (side !== "input" && side !== "output") {
      res
        .status(400)
        .send(
          "Invalid query parameters: 'side' must be either 'input' or 'output'.",
        );
      return;
    }

    const typeConfig = getTypeConfig(hoveringType);
    if (!typeConfig) {
      res
        .status(400)
        .send(
          `Invalid query parameters: 'hoveringType' ${hoveringType} is not a valid type.`,
        );
      return;
    }

    const result = typeConfig[side];

    res.send(format == "emap" ? json2emap(result) : result);
  }),
);

app.listen(config.PORT, () => {
  console.log(`Server is running on http://localhost:${config.PORT}`);
});
