import { Request, Response } from "express";

export default {
  async translate(req: Request, res: Response) {
    const units = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];

    const tens = [
      "",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];

    const dozens = [
      "",
      "ten",
      "twenty",
      "thirty",
      "fourty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];

    const thousands = ["", "thousand", "million", "billion", "trillion"];

    const number = req.query.translate;
    let translatedNumber = "";

    if (number > 999999999999999)
      return res
        .status(400)
        .json({ error: "Your number must be smaller then 999999999999999" });

    if (number < 0)
      return res.status(400).json({ error: "Must be a positive number" });

    if (!Number.isInteger(parseInt(number)))
      return res.status(400).json({ error: "Must be a number" });

    if (Number(number) % 1 !== 0)
      return res.status(400).json({ error: "Number must be integer" });

    function convertToString(number: Number) {}

    convertToString(number);

    return res.send("OK");
  },
};
