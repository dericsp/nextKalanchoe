import nodemailer from 'nodemailer'

export default async (req, res) => {
    const { name, surname, cpf, cidade, email, phone, revende, tempo, restricao, message } = req.body;
    const host = process.env.SERVER_MAIL
    const user = process.env.MAIL_USER
    const pass = process.env.MAIL_PASS
    const port = process.env.MAIL_PORT
    const emailTo = process.env.MAIL_TO
    const transporter = nodemailer.createTransport({
        host: `${host}`,
        port: `${port}`,
        secure: false,
        auth: {
            user: `${user}`,
            pass: `${pass}`
        },
        logger: true,
        debug: false
    });

    try {
        const emailRes = await transporter.sendMail({
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
        });
    } catch (err) {
        console.log(err)
        return process.exit(1)
    }
    // console.log(req.body)
    res.status(200).json()
}