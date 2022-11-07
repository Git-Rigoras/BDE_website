import { NextApiHandler } from "next";

import { sendMail } from "lib/mailer";

const contact: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const info = await sendMail();
      console.log(info);
      return res.status(200);
    } catch (error) {
      console.warn(error);
      return res.status(500);
    }
  } else {
    return res.status(405);
  }
};

export default contact;
