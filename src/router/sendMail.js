var nodeMailer = require('nodemailer');

module.exports = (request, response) => {

    /**
     * If you want to use another smtp, change this area
     */
    var smtpTransport = nodeMailer.createTransport({
        service: 'naver',
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

    var result = smtpTransport.sendMail(mailOptions, (error, mailResponse) => {
        if (error) {
            response.status(400).send({"success": false});
            return error;
        } else {
            response.status(200).send({"success": true});
            return mailResponse;
        }
    });
};
