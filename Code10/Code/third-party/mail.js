

function sendEmail(rec, message, response){
    const nodemailer = require('nodemailer');
nodemailer.createTestAccount((err, account) => {
    
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            //host: 'smtp.ethereal.email',
            //port: 587,
            //secure: false, // true for 465, false for other ports
            auth: {
                user: 'krishantemporary1',
                pass: 'Amitabh@786'
            }
            /*auth: {
                user: 'cnoxbhjk7f2sujpk@ethereal.email', // generated ethereal user
                pass: 'DQrD2fHErscJj6raqs'  // generated ethereal password
            }*/
        });

        let mailOptions = {
            from: 'amit.shashi.srivastava@gmail.com', // sender address
           to:rec,
            // to: 'rajatsehdev171@gmail.com', // list of receivers
            subject: 'Hello ', // Subject line
            text:message,
            //text: 'Hello world?', // plain text body
            html: '<h1>'+message+'</h1>'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                response.send("Error During Mail Sending...")
            }
            response.send("Message Send Done....");
        });
    });
}
module.exports = sendEmail;