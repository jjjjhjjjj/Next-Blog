import nodemailer from "nodemailer";

export async function POST(res: Request) {
  const data = await res.json();
  const { email, subject, message } = data;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.NODEMAILER_USER, // generated ethereal user
      pass: process.env.NODEMAILER_PASS, // generated ethereal password
    },
  });

  return transporter
    .sendMail({
      from: email, // sender address
      to: process.env.NODEMAILER_TO, // list of receivers
      subject: subject, // Subject line
      text: `${message} from ${email}`, // plain text body
    })
    .then(
      () =>
        new Response(JSON.stringify({ message: "success" }), {
          status: 200,
        })
    )
    .catch((error) => {
      console.error(error);

      return new Response(JSON.stringify({ message: "fail" }), {
        status: 500,
      });
    });
}
