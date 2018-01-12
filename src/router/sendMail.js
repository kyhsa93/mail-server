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

    if (request.body.html) {
        var mailOptions = {
            from: request.body.user,
            to: request.body.receiver,
            subject: request.body.subject,
            html: request.body.html
        };
    } else {
        var mailOptions = {
            from: request.body.user,
            to: request.body.receiver,
            subject: request.body.subject,
            text: request.body.text
        };
    }

    smtpTransport.sendMail(mailOptions, (error, info) => {
        if (error) {
            response.status(400).send({"success": false, "message": error});
            return;
        } else {
            response.status(200).send({"success": true, "message": info});
            return;
        }
    });
};
