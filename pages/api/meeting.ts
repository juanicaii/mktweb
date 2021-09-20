// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  createTestAccount,
  createTransport,
  getTestMessageUrl,
} from "nodemailer";
type Response = {
  message: string;
};

type Body = {
  email: string;
  name: string;
  message: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method != "POST") {
    res.status(400).json({
      message: `Peticion ${req.method} No esta permitida`,
    });
  }
  const body: Body = req.body;
  try {
    if (!body.email || !body.name || !body.message) {
      res.status(400).json({
        message: "La peticion es incorrecta, Todos los campos son requeridos",
      });
    }
    let testAccount = await createTestAccount();

    const transporter = createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: body.email, // list of receivers
      subject: "Contacto de " + body.name, // Subject line
      text: `${body.message}`, // plain text body
      html: `<b>${body.message}</b>`, // html body
    });

    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou.
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou.....
    res.status(200).json({ message: "Mensaje enviado correctamente" });
  } catch (err) {
    console.log(err);
  }
}
