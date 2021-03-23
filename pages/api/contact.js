import nodemailer from 'nodemailer'

export default async (req, res) => {
    const {name, surname, cpf, cidade, email, phone, revende, tempo, restricao, message} = req.body;
    const host = process.env.SERVER_MAIL
    const user = process.env.MAIL_USER
    const pass = process.env.MAIL_PASS
    const port = process.env.MAIL_PORT

    const transporter = nodemailer.createTransport({
        host: `${host}`,
        port: `${port}`,
        secure: true,
        auth: {
            user: `${user}`,
            pass: `${pass}`
        }
    });

    try {
        const emailRes = await transporter.sendMail({
            from: email,
            to: `${user}`,
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
        });
        // console.log('Message Sent', emailRes)
    } catch (error) {
        console.log(error)
    }

    res.status(200).json(req.body)
}