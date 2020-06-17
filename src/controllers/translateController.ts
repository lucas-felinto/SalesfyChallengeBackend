import { Request, Response } from "express";

export default {
  async translate(req: Request, res: Response) {
    return res.send("OK");
  },
};
