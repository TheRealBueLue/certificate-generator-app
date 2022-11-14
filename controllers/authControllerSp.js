const Course1Sp = require('../models/sp/RegSp1');
const Course2Sp = require('../models/sp/RegSp2');
const Course3Sp = require('../models/sp/RegSp3');
const Course4Sp = require('../models/sp/RegSp4');
const Course5Sp = require('../models/sp/RegSp5');
const Course6Sp = require('../models/sp/RegSp6');
const Course7Sp = require('../models/sp/RegSp7');
const Course8Sp = require('../models/sp/RegSp8');
const Course9Sp = require('../models/sp/RegSp9');
const sendEmail = require('./sendEmail');

const register1Sp = async (req, res) => {
  // const origin = 'https://certificate-generator-en.herokuapp.com';
  const origin = process.env.URL_API;
  const messageMail = `Por favor confirma tu email clicando en el siguiente link: <a href="${origin}/register-sp">Confirma tu Email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course1Sp.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'este usuario ya existe..' });
    }

    const user = await Course1Sp.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificado de Alienmeditation',
      html: `<strong>Hola, ${name}</strong><br>
      ${messageMail} <br />
      Copia este codigo y pegalo en el campo del codigo del link: <br />
      Codigo: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register2Sp = async (req, res) => {
  // const origin = 'https://certificate-generator-en.herokuapp.com';
  const origin = process.env.URL_API;
  const messageMail = `Por favor confirma tu email clicando en el siguiente link: <a href="${origin}/register-sp">Confirma tu Email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course2Sp.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'este usuario ya existe..' });
    }

    const user = await Course2Sp.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificado de Alienmeditation',
      html: `<strong>Hola, ${name}</strong><br>
      ${messageMail} <br />
      Copia este codigo y pegalo en el campo del codigo del link: <br />
      Codigo: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register3Sp = async (req, res) => {
  // const origin = 'https://certificate-generator-en.herokuapp.com';
  const origin = process.env.URL_API;
  const messageMail = `Por favor confirma tu email clicando en el siguiente link: <a href="${origin}/register-sp">Confirma tu Email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course3Sp.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'este usuario ya existe..' });
    }

    const user = await Course3Sp.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificado de Alienmeditation',
      html: `<strong>Hola, ${name}</strong><br>
      ${messageMail} <br />
      Copia este codigo y pegalo en el campo del codigo del link: <br />
      Codigo: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register4Sp = async (req, res) => {
  // const origin = 'https://certificate-generator-en.herokuapp.com';
  const origin = process.env.URL_API;
  const messageMail = `Por favor confirma tu email clicando en el siguiente link: <a href="${origin}/register-sp">Confirma tu Email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course4Sp.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'este usuario ya existe..' });
    }

    const user = await Course4Sp.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificado de Alienmeditation',
      html: `<strong>Hola, ${name}</strong><br>
      ${messageMail} <br />
      Copia este codigo y pegalo en el campo del codigo del link: <br />
      Codigo: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register5Sp = async (req, res) => {
  // const origin = 'https://certificate-generator-en.herokuapp.com';
  const origin = process.env.URL_API;
  const messageMail = `Por favor confirma tu email clicando en el siguiente link: <a href="${origin}/register-sp">Confirma tu Email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course5Sp.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'este usuario ya existe..' });
    }

    const user = await Course5Sp.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificado de Alienmeditation',
      html: `<strong>Hola, ${name}</strong><br>
      ${messageMail} <br />
      Copia este codigo y pegalo en el campo del codigo del link: <br />
      Codigo: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register6Sp = async (req, res) => {
  // const origin = 'https://certificate-generator-en.herokuapp.com';
  const origin = process.env.URL_API;
  const messageMail = `Por favor confirma tu email clicando en el siguiente link: <a href="${origin}/register-sp">Confirma tu Email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course6Sp.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'este usuario ya existe..' });
    }

    const user = await Course6Sp.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificado de Alienmeditation',
      html: `<strong>Hola, ${name}</strong><br>
      ${messageMail} <br />
      Copia este codigo y pegalo en el campo del codigo del link: <br />
      Codigo: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register7Sp = async (req, res) => {
  // const origin = 'https://certificate-generator-en.herokuapp.com';
  const origin = process.env.URL_API;
  const messageMail = `Por favor confirma tu email clicando en el siguiente link: <a href="${origin}/register-sp">Confirma tu Email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course7Sp.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'este usuario ya existe..' });
    }

    const user = await Course7Sp.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificado de Alienmeditation',
      html: `<strong>Hola, ${name}</strong><br>
      ${messageMail} <br />
      Copia este codigo y pegalo en el campo del codigo del link: <br />
      Codigo: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register8Sp = async (req, res) => {
  // const origin = 'https://certificate-generator-en.herokuapp.com';
  const origin = process.env.URL_API;
  const messageMail = `Por favor confirma tu email clicando en el siguiente link: <a href="${origin}/register-sp">Confirma tu Email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course8Sp.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'este usuario ya existe..' });
    }

    const user = await Course8Sp.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificado de Alienmeditation',
      html: `<strong>Hola, ${name}</strong><br>
      ${messageMail} <br />
      Copia este codigo y pegalo en el campo del codigo del link: <br />
      Codigo: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register9Sp = async (req, res) => {
  // const origin = 'https://certificate-generator-en.herokuapp.com';
  const origin = process.env.URL_API;
  const messageMail = `Por favor confirma tu email clicando en el siguiente link: <a href="${origin}/register-sp">Confirma tu Email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course9Sp.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'este usuario ya existe..' });
    }

    const user = await Course9Sp.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificado de Alienmeditation',
      html: `<strong>Hola, ${name}</strong><br>
      ${messageMail} <br />
      Copia este codigo y pegalo en el campo del codigo del link: <br />
      Codigo: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const verifyUserSp = async (req, res) => {
  try {
    const { code } = req.body;
    const user = await Course1Sp.findById(code);
    const user2 = await Course2Sp.findById(code);
    const user3 = await Course3Sp.findById(code);
    const user4 = await Course4Sp.findById(code);
    const user5 = await Course5Sp.findById(code);
    const user6 = await Course6Sp.findById(code);
    const user7 = await Course7Sp.findById(code);
    const user8 = await Course8Sp.findById(code);
    const user9 = await Course9Sp.findById(code);

    if (user) {
      res.status(200).json({ userId: user });
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
  register1Sp,
  register2Sp,
  register3Sp,
  register4Sp,
  register5Sp,
  register6Sp,
  register7Sp,
  register8Sp,
  register9Sp,
  verifyEmail,
  verifyUserSp,
};
