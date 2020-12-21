const nodemailer = require("nodemailer")

// Nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "roy.beahan33@ethereal.email",
    pass: "G8sFgGj8bXRVSyp3vb",
  },
})

// Backend CRUD
exports.handler = async (event, context) => {
  // get stuff from front end req = event
  const body = JSON.parse(event.body)

  // ===========================================  Checking cases=============================
  // Honeypot falls bot
  if (body.yuzuTea) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Du bot" }),
    }
  }
  // pflichtfelder
  const pflichtFelder = ["email", "name", "order"]
  // checking ob alles erfüllt ist
  for (const feld of pflichtFelder) {
    if (!body[feld]) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: `Es fehlt ${body[feld]}` }),
      }
    }
  }
  //   Checking ob bestellt wurde
  if (body.order.length === 0) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Warum bestellst du nichts?" }),
    }
  }
}

// ===========================================  Sending email=============================
const info = await transporter.sendMail({
  from: "Kim's Kim <Kimbo@example.com>",
  to: `${body.name} <${body.email}>, orders@example.com`,
  subject: "Neue Bestellung",
  html: `<p>Deine Bestellung ist in 20 min da. Kostet dich ${total} </p>`,
})
return {
  statusCode: 200,
  body: JSON.stringify({ message: "Erfolg" }),
}
