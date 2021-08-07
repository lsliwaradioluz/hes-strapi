const nodemailer = require("nodemailer");

const headers = {
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};

exports.handler = async function(event, context) {
  const { from, to, subject, html } = JSON.parse(event.body)
  const transporter = nodemailer.createTransport({
    pool: true,
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  const info = await transporter.sendMail({
    from,
    to,
    subject,
    html
  });

  return {
    headers,
    statusCode: 200,
    body: JSON.stringify(info)
  }
}
