const Course1Pt = require('../models/pt/RegPt1');
const Course2Pt = require('../models/pt/RegPt2');
const Course3Pt = require('../models/pt/RegPt3');
const Course4Pt = require('../models/pt/RegPt4');
const Course5Pt = require('../models/pt/RegPt5');
const Course6Pt = require('../models/pt/RegPt6');
const Course7Pt = require('../models/pt/RegPt7');
const Course8Pt = require('../models/pt/RegPt8');
const Course9Pt = require('../models/pt/RegPt9');
const sendEmail = require('./sendEmail');

const register1Pt = async (req, res) => {
  // const origin = 'https://certificate-generator-en.herokuapp.com';
  const origin = process.env.URL_API;
  const messageMail = `Por favor confirme seu email clicando no seguinte link: <a href="${origin}/register-pt">Verificar email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course1Pt.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'usuario ja existe..' });
    }

    const user = await Course1Pt.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificado de Alienmeditation',
      html: `<strong>Ola, ${name}</strong><br>
      ${messageMail} <br />
      Copiar este codigo e colar no campo do codigo do link: <br />
      Codigo: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register2Pt = async (req, res) => {
  // const origin = 'https://certificate-generator-en.herokuapp.com';
  const origin = process.env.URL_API;
  const messageMail = `Por favor confirme seu email clicando no seguinte link: <a href="${origin}/register-pt">Verificar email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course2Pt.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'usuario ja existe..' });
    }

    const user = await Course2Pt.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificado de Alienmeditation',
      html: `<strong>Ola, ${name}</strong><br>
      ${messageMail} <br />
      Copiar este codigo e colar no campo do codigo do link: <br />
      Codigo: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register3Pt = async (req, res) => {
  // const origin = 'https://certificate-generator-en.herokuapp.com';
  const origin = process.env.URL_API;
  const messageMail = `Por favor confirme seu email clicando no seguinte link: <a href="${origin}/register-pt">Verificar email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course3Pt.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'usuario ja existe..' });
    }

    const user = await Course3Pt.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificado de Alienmeditation',
      html: `<strong>Ola, ${name}</strong><br>
      ${messageMail} <br />
      Copiar este codigo e colar no campo do codigo do link: <br />
      Codigo: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register4Pt = async (req, res) => {
  // const origin = 'https://certificate-generator-en.herokuapp.com';
  const origin = process.env.URL_API;
  const messageMail = `Por favor confirme seu email clicando no seguinte link: <a href="${origin}/register-pt">Verificar email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course4Pt.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'usuario ja existe..' });
    }

    const user = await Course4Pt.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificado de Alienmeditation',
      html: `<strong>Ola, ${name}</strong><br>
      ${messageMail} <br />
      Copiar este codigo e colar no campo do codigo do link: <br />
      Codigo: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register5Pt = async (req, res) => {
  // const origin = 'https://certificate-generator-en.herokuapp.com';
  const origin = process.env.URL_API;
  const messageMail = `Por favor confirme seu email clicando no seguinte link: <a href="${origin}/register-pt">Verificar email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course5Pt.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'usuario ja existe..' });
    }

    const user = await Course5Pt.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificado de Alienmeditation',
      html: `<strong>Ola, ${name}</strong><br>
      ${messageMail} <br />
      Copiar este codigo e colar no campo do codigo do link: <br />
      Codigo: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register6Pt = async (req, res) => {
  // const origin = 'https://certificate-generator-en.herokuapp.com';
  const origin = process.env.URL_API;
  const messageMail = `Por favor confirme seu email clicando no seguinte link: <a href="${origin}/register-pt">Verificar email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course6Pt.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'usuario ja existe..' });
    }

    const user = await Course6Pt.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificado de Alienmeditation',
      html: `<strong>Ola, ${name}</strong><br>
      ${messageMail} <br />
      Copiar este codigo e colar no campo do codigo do link: <br />
      Codigo: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register7Pt = async (req, res) => {
  // const origin = 'https://certificate-generator-en.herokuapp.com';
  const origin = process.env.URL_API;
  const messageMail = `Por favor confirme seu email clicando no seguinte link: <a href="${origin}/register-pt">Verificar email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course7Pt.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'usuario ja existe..' });
    }

    const user = await Course7Pt.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificado de Alienmeditation',
      html: `<strong>Ola, ${name}</strong><br>
      ${messageMail} <br />
      Copiar este codigo e colar no campo do codigo do link: <br />
      Codigo: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register8Pt = async (req, res) => {
  // const origin = 'https://certificate-generator-en.herokuapp.com';
  const origin = process.env.URL_API;
  const messageMail = `Por favor confirme seu email clicando no seguinte link: <a href="${origin}/register-pt">Verificar email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course8Pt.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'usuario ja existe..' });
    }

    const user = await Course8Pt.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificado de Alienmeditation',
      html: `<strong>Ola, ${name}</strong><br>
      ${messageMail} <br />
      Copiar este codigo e colar no campo do codigo do link: <br />
      Codigo: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register9Pt = async (req, res) => {
  // const origin = 'https://certificate-generator-en.herokuapp.com';
  const origin = process.env.URL_API;
  const messageMail = `Por favor confirme seu email clicando no seguinte link: <a href="${origin}/register-pt">Verificar email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course9Pt.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'usuario ja existe..' });
    }

    const user = await Course9Pt.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificado de Alienmeditation',
      html: `<strong>Ola, ${name}</strong><br>
      ${messageMail} <br />
      Copiar este codigo e colar no campo do codigo do link: <br />
      Codigo: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const verifyUserPt = async (req, res) => {
  try {
    const { code } = req.body;
    const user1 = await Course1Pt.findById(code);
    const user2 = await Course2Pt.findById(code);
    const user3 = await Course3Pt.findById(code);
    const user4 = await Course4Pt.findById(code);
    const user5 = await Course5Pt.findById(code);
    const user6 = await Course6Pt.findById(code);
    const user7 = await Course7Pt.findById(code);
    const user8 = await Course8Pt.findById(code);
    const user9 = await Course9Pt.findById(code);

    if (user1) {
      res.status(200).json({ userId: user1 });
    }
    if (user2) {
      res.status(200).json({ userId: user2 });
    }
    if (user3) {
      res.status(200).json({ userId: user3 });
    }
    if (user4) {
      res.status(200).json({ userId: user4 });
    }
    if (user5) {
      res.status(200).json({ userId: user5 });
    }
    if (user6) {
      res.status(200).json({ userId: user6 });
    }
    if (user7) {
      res.status(200).json({ userId: user7 });
    }
    if (user8) {
      res.status(200).json({ userId: user8 });
    }
    if (user9) {
      res.status(200).json({ userId: user9 });
    }
  } catch (error) {
    console.log('Error');
  }
};

const verifyEmail = async (req, res) => {
  const { email } = req.body;
  res.status(200).json({ email });
};

module.exports = {
  register1Pt,
  register2Pt,
  register3Pt,
  register4Pt,
  register5Pt,
  register6Pt,
  register7Pt,
  register8Pt,
  register9Pt,
  verifyEmail,
  verifyUserPt,
};
