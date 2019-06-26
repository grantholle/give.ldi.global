const nodemailer = require("nodemailer")
const { validateEmail, validateLength } = require("./validations")
const emailCreds = {
  user: 'no-reply@ldiglobal.org',
  pass: 't5V8!sUmtnFwZzZGExVx',
  from: `"no-reply" <no-reply@ldiglobal.org>`
}

const autoReply = `<p>Greetings,</p>
<p>Thank you for your interest in Leadership Development International (LDi) and International Schools Consortium (iSC). We have received your inquiry and we will be in touch with you soon.</p>
<p>If you have submitted an employment application, then we will contact you directly if you have been selected for the next stage of the application process. </p>
<p>Warm regards,</p>
<p>Recruitment and Mobilization</p>`

exports.handler = (event, context, callback) => {
  const body = JSON.parse(event.body)

  // Validate some stuff
  try {
    validateLength(`Name`, body.name, 3, 50)
  } catch (e) {
    return callback(null, {
      statusCode: 403,
      body: e.message
    })
  }

  try {
    validateLength(`Question`, body.question, 3, 50)
  } catch (e) {
    return callback(null, {
      statusCode: 403,
      body: e.message
    })
  }

  try {
    validateEmail(`Email`, body.email)
  } catch (e) {
    return callback(null, {
      statusCode: 403,
      body: e.message
    })
  }

  // Create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: `email1.luxsci.com`,
    port: 25,
    secure: false,
    auth: {
      user: emailCreds.user,
      pass: emailCreds.pass
    }
  })

  try {
    // send mail with defined transport object
    Promise.all([
      transporter.sendMail({
        from: emailCreds.from,
        to: body.email,
        subject: `Thanks for your interest!`,
        html: autoReply
      }),
      transporter.sendMail({
        from: emailCreds.from,
        to: `digital.recruiting@ldius.org`,
        subject: `Contact Form Submission`,
        html: `<p><strong>Name:</strong><br>${body.name}</p>
          <p><strong>Question:</strong><br>${body.question}</p>
          <p><strong>Email:</strong><br>${body.email}</p>
          <p><strong>Phone:</strong><br>${body.phone || 'None provided'}</p>`
      })
    ]).then(() => {
      callback(null, {
        statusCode: 200,
        body: ''
      })
    })
  } catch (e) {
    return callback(null, {
      statusCode: 500,
      body: e.message
    })
  }
}
