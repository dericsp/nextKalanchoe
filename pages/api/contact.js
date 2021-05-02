// import nodemailer from 'nodemailer'

// export default async (req, res) => {
//     console.log('async nodemailer')
//     const { name, surname, cpf, cidade, email, phone, revende, tempo, restricao, message } = req.body;
//     const host = process.env.SERVER_MAIL
//     const user = process.env.MAIL_USER
//     const pass = process.env.MAIL_PASS
//     const port = process.env.MAIL_PORT
//     const emailTo = process.env.MAIL_TO
//     const transporter = nodemailer.createTransport({
//         host: `${host}`,
//         port: `${port}`,
//         secure: false,
//         auth: {
//             user: `${user}`,
//             pass: `${pass}`
//         },
//         logger: true,
//         debug: false
//     }, console.log('hi transporter'));


//     try {
//         console.log('hi try contact.js')
//         const emailRes = await transporter.sendMail({
//             from: `${emailTo}`,
//             to: `${emailTo}`,
//             replyTo: `${email}`,
//             subject: `Formulario de contato de ${name} ${surname}`,
//             html: `<p><Nova mensagem de correio</p><br>
//             <p>Nome: ${name} ${surname}</p>
//             <p>CPF: ${cpf}</p>
//             <p>Cidade: ${cidade}</p>
//             <p>E-mail: ${email}</p>
//             <p>Telefone: ${phone}</p>
//             <p>Revende algo ?: ${revende}</p>
//             <p>Tempo que vende algo: ${tempo}</p>
//             <p>Possui alguma restrição? ${restricao}</p>
//             <p>Mensagem: ${message}</p>`
//             ,
//         });
//         console.log('Message Sent', emailRes.messageId)
//     } catch (err) {
//         console.log(err)
//         return process.exit(1)
//     }
//     return res.status(200).json(req.body)
// }

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import sgMail from '@sendgrid/mail'

export default async (req, res) =>{
    sgMail.setApiKey(process.env.MAIL_SEND_WEBAPI)
    const { name, surname, cpf, cidade, email, phone, revende, tempo, restricao, message } = req.body;
        const host = process.env.SERVER_MAIL
        const user = process.env.MAIL_USER
        const pass = process.env.MAIL_PASS
        const port = process.env.MAIL_PORT
        const emailTo = process.env.MAIL_TO
    const msg = {
        from: `${emailTo}`,
        to: `${emailTo}`,
        replyTo: `${email}`,
        subject: `Formulario de contato de ${name} ${surname}`,
        html: `<p><Nova mensagem de correio</p><br>
        <p>Nome: ${name} ${surname}</p>
        <p>CPF: ${cpf}</p>
        <p>Cidade: ${cidade}</p>
        <p>E-mail: ${email}</p>
        <p>Telefone: ${phone}</p>
        <p>Revende algo ?: ${revende}</p>
        <p>Tempo que vende algo: ${tempo}</p>
        <p>Possui alguma restrição? ${restricao}</p>
        <p>Mensagem: ${message}</p>`
        ,
    }
    // const result = await sgMail.send(msg)

    sgMail
      .send(msg)
      .then(() => {

      })
      .catch((error) => {
        res.json(error);
        res.status(405).end();
        return resolve();
      })

      return res.status(200).json()

}
