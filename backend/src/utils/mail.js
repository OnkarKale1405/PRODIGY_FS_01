import Mailgen from "mailgen";
import nodemailer from "nodemailer";

/**
 * @param {{email: string; subject: string; mailgenContent: Mailgen.Content; }} options
 */
// generating a mail template for all the mail that are to be sent 
const sendEmail = async (options) => {

    // Configure mailgen by setting a theme and your product info
    var mailGenerator = new Mailgen({
        theme: 'default',
        product: {
            // Appears in header & footer of e-mails
            name: 'Employee_Management',
            link: 'https://mailgen.js/'
            // Optional product logo
            // logo: 'https://mailgen.js/img/logo.png'
        }
    });

    // Generate the plaintext version of the e-mail (for clients that do not support HTML)
    const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);

    // Generate an HTML email with the provided contents
    const emailHtml = mailGenerator.generate(options.mailgenContent);

    // Create a nodemailer transporter instance which is responsible to send a mail
    const transporter = nodemailer.createTransport({
        // host: process.env.MAILTRAP_SMTP_HOST,
        service: "gmail",
        secure: true,
        port: process.env.MAILTRAP_SMTP_PORT,
        auth: {
            user: process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASS,
        },
    });

    const mail = {
        from: "mail.EmployeeManage@gmail.com", // We can name this anything. The mail will go to your Mailtrap inbox
        to: options.email, // receiver's mail
        subject: options.subject, // mail subject
        text: emailTextual, // mailgen content textual variant
        html: emailHtml, // mailgen content html variant
    };

    try {
        await transporter.sendMail(mail);
    } catch (error) {
        // As sending email is not strongly coupled to the business logic it is not worth to raise an error when email sending fails
        // So it's better to fail silently rather than breaking the app
        console.log(
            "Email service failed silently. Make sure you have provided your MAILTRAP credentials in the .env file"
        );
        console.log("Error: ", error);
    }
};

/**
 * @param {string} username
 * @param {string} verificationUrl
 * @returns {Mailgen.Content}
 * @description It designs the email verification mail
 */
const emailVerificationMailgenContent = (username, verificationUrl) => {
    return {
        body: {
            name: username,
            intro: "Welcome to our app! We're very excited to have you on board.",
            action: {
                instructions:
                    "To verify your email please click on the following button:",
                button: {
                    color: "#22BC66",
                    text: "Verify your email",
                    link: verificationUrl,
                },
            },
            outro:
                "Need help, or have questions? Just reply to this email, we'd love to help.",
        },
    };
};

/**
* @param {string} username
* @param {string} verificationUrl
* @returns {Mailgen.Content}
* @description It designs the forgot password mail
*/
const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
    return {
        body: {
            name: username,
            intro: "We got a request to reset the password of our account",
            action: {
                instructions:
                    "To reset your password click on the following button or link:",
                button: {
                    color: "#22BC66", // Optional action button color
                    text: "Reset password",
                    link: passwordResetUrl,
                },
            },
            outro:
                "Need help, or have questions? Just reply to this email, we'd love to help.",
        },
    };
};

export {
    sendEmail,
    emailVerificationMailgenContent,
    forgotPasswordMailgenContent,
};