

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import sgMail from '@sendgrid/mail'

export default async (req, res) =>{
    sgMail.setApiKey(process.env.MAIL_SEND_WEBAPI)
    const { name, surname, cpf, cidade, email, phone, revende, tempo, restricao, message } = req.body;
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
