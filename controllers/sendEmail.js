const sgMail = require('@sendgrid/mail');

const sendEmail = async ({ to, subject, html }) => {
  sgMail.setApiKey(process.env.MAIL_KEY);

  const msg = {
    from: 'info@alienmeditation.com', // Change to your verified sender
    to,
    subject,
    html,
  };
  const info = await sgMail.send(msg);
};

module.exports = sendEmail;
