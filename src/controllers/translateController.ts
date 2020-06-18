import { Request, Response } from "express";

export default {
  async translate(req: Request, res: Response) {
    const zero = "zero";
    const lessThanTwenty = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
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

    const number = req.query.translate;
    let translatedNumber = "";

    if (number >= 1000)
      return res
        .status(400)
        .json({ error: "Your number must be smaller then 1000" });

    if (number < 0)
      return res.status(400).json({ error: "Must be a positive number" });

    if (!Number.isInteger(parseInt(number)))
      return res.status(400).json({ error: "Must be a number" });

    if (Number(number) % 1 !== 0)
      return res.status(400).json({ error: "Number must be integer" });

    if (number == 0) translatedNumber = zero;
    if (number < 20 && number > 0)
      translatedNumber = lessThanTwenty[Number(number)];
    if (number < 100 && number >= 20)
      translatedNumber = `${dozens[number[0]]} ${lessThanTwenty[number[1]]}`;
    if (number < 1000 && number >= 100)
      translatedNumber = `${lessThanTwenty[number[0]]} hundred ${
        dozens[number[1]]
      } ${lessThanTwenty[number[2]]}`;

    return res.send(translatedNumber);
  },
};
