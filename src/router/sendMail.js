var nodeMailer = require('nodemailer');

module.exports = (request, response) => {
    console.log('request: ', request.body);

    var smtpTransport = nodeMailer.createTransport({
        service: 'Gmail',
        auth: {
            user: request.body.user,
            pass: request.body.pass
        }
    });

    var mailOptions = {
        from: request.body.user,
        to: request.body.receiver,
        subject: request.body.subject,
        text: request.body.text
    };

    var result = smtpTransport.sendMail(mailOptions, (error, response) => {
        if (error) {
            console.log('error: ', error);
            return error;
        } else {
            console.log('success: ',response.message);
            return response.message;
        }
    });

    console.log('smtpTransprt: ', smtpTransport);
    console.log('result: ', result);
};
