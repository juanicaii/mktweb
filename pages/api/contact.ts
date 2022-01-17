// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "../../models/clients";
import supabase from "../../models/supabase";
import {
  createTestAccount,
  createTransport,
  getTestMessageUrl,
} from "nodemailer";
import SMTPConnection from "nodemailer/lib/smtp-connection";
type Response = {
  message: string;
};

type Body = {
  email: string;
  lastname: string;
  name: string;
  message: string;
  company: string;
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
  console.log("hola");
  const body: Body = req.body;
  try {
    if (!body.email || !body.name || !body.message || !body.lastname) {
      res.status(400).json({
        message: "La peticion es incorrecta, Todos los campos son requeridos",
      });
    }

    const { data, error } = await supabase.from<Client>("Clients").insert([
      {
        name: body.name,
        company: body.company,
        email: body.email,
        lastName: body.lastname,
      },
    ]);

    const optionsTransport = {
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT ?? "1"),
      secure: true,

      secureConnection: false, // TLS requires secureConnection to be false
      tls: {
        ciphers: "SSLv3",
      },
      requireTLS: true,

      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
      service: process.env.SERVICE,
    };
    console.log(optionsTransport);
    const transporter = createTransport(optionsTransport);

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: body.email, // sender address
      to: process.env.EMAIL, // list of receivers
      subject: "Contacto de " + body.name, // Subject line
      text: `${body.message}`, // plain text body
      html: `<b>${body.message}</b>`, // html body
    });

    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou.....
    res.status(200).json({ message: "Mensaje enviado correctamente" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Hubo un error" });
  }
}
