require('dotenv').config();
const User = require('../models/User');
const Course2 = require('../models/RegCourse2');
const Course3 = require('../models/RegCourse3');
const Course4 = require('../models/RegCourse4');
const Course5 = require('../models/RegCourse5');
const Course6 = require('../models/RegCourse6');
const Course7 = require('../models/RegCourse7');
const Course8 = require('../models/RegCourse8');
const Course9 = require('../models/RegCourse9');
const Course10 = require('../models/RegCourse10');
const Course11 = require('../models/RegCourse11');
const Course12 = require('../models/RegCourse12');
const sendEmail = require('./sendEmail');

const register = async (req, res) => {
  // const origin = 'https://certificate-generator-en.herokuapp.com';
  const origin = process.env.URL_API;
  const messageMail = `Please confirm your email by clicking on the following link : <a href="${origin}/register">Verify Email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await User.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'user already exists..' });
    }

    const user = await User.create({ name, surname, email, course, message });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificate from Alienmeditation',
      html: `<strong>Hello, ${name}</strong><br>
      ${messageMail} <br />
      Copy this code and paste in the code field of the link: <br />
      Code: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register2 = async (req, res) => {
  const origin = process.env.URL_API;
  const messageMail = `Please confirm your email by clicking on the following link : <a href="${origin}/register">Verify Email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course2.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'user already exists..' });
    }

    const user = await Course2.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificate from Alienmeditation',
      html: `<strong>Hello, ${name}</strong><br>
      ${messageMail} <br />
      Copy this code and paste in the code field of the link: <br />
      Code: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register3 = async (req, res) => {
  const origin = process.env.URL_API;
  const messageMail = `Please confirm your email by clicking on the following link : <a href="${origin}/register">Verify Email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course3.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'user already exists..' });
    }

    const user = await Course3.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificate from Alienmeditation',
      html: `<strong>Hello, ${name}</strong><br>
      ${messageMail} <br />
      Copy this code and paste in the code field of the link: <br />
      Code: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register4 = async (req, res) => {
  const origin = process.env.URL_API;
  const messageMail = `Please confirm your email by clicking on the following link : <a href="${origin}/register">Verify Email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course4.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'user already exists..' });
    }

    const user = await Course4.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificate from Alienmeditation',
      html: `<strong>Hello, ${name}</strong><br>
      ${messageMail} <br />
      Copy this code and paste in the code field of the link: <br />
      Code: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register5 = async (req, res) => {
  const origin = process.env.URL_API;
  const messageMail = `Please confirm your email by clicking on the following link : <a href="${origin}/register">Verify Email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course5.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'user already exists..' });
    }

    const user = await Course5.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificate from Alienmeditation',
      html: `<strong>Hello, ${name}</strong><br>
      ${messageMail} <br />
      Copy this code and paste in the code field of the link: <br />
      Code: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register6 = async (req, res) => {
  const origin = process.env.URL_API;
  const messageMail = `Please confirm your email by clicking on the following link : <a href="${origin}/register">Verify Email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course6.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'user already exists..' });
    }

    const user = await Course6.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificate from Alienmeditation',
      html: `<strong>Hello, ${name}</strong><br>
      ${messageMail} <br />
      Copy this code and paste in the code field of the link: <br />
      Code: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register7 = async (req, res) => {
  const origin = process.env.URL_API;
  const messageMail = `Please confirm your email by clicking on the following link : <a href="${origin}/register">Verify Email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course7.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'user already exists..' });
    }

    const user = await Course7.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificate from Alienmeditation',
      html: `<strong>Hello, ${name}</strong><br>
      ${messageMail} <br />
      Copy this code and paste in the code field of the link: <br />
      Code: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register8 = async (req, res) => {
  const origin = process.env.URL_API;
  const messageMail = `Please confirm your email by clicking on the following link : <a href="${origin}/register">Verify Email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course8.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'user already exists..' });
    }

    const user = await Course8.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificate from Alienmeditation',
      html: `<strong>Hello, ${name}</strong><br>
      ${messageMail} <br />
      Copy this code and paste in the code field of the link: <br />
      Code: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register9 = async (req, res) => {
  const origin = process.env.URL_API;
  const messageMail = `Please confirm your email by clicking on the following link : <a href="${origin}/register">Verify Email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course9.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'user already exists..' });
    }

    const user = await Course9.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificate from Alienmeditation',
      html: `<strong>Hello, ${name}</strong><br>
      ${messageMail} <br />
      Copy this code and paste in the code field of the link: <br />
      Code: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register10 = async (req, res) => {
  const origin = process.env.URL_API;
  const messageMail = `Please confirm your email by clicking on the following link : <a href="${origin}/register">Verify Email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course10.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'user already exists..' });
    }

    const user = await Course10.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificate from Alienmeditation',
      html: `<strong>Hello, ${name}</strong><br>
      ${messageMail} <br />
      Copy this code and paste in the code field of the link: <br />
      Code: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register11 = async (req, res) => {
  const origin = process.env.URL_API;
  const messageMail = `Please confirm your email by clicking on the following link : <a href="${origin}/register">Verify Email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course11.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'user already exists..' });
    }

    const user = await Course11.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificate from Alienmeditation',
      html: `<strong>Hello, ${name}</strong><br>
      ${messageMail} <br />
      Copy this code and paste in the code field of the link: <br />
      Code: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const register12 = async (req, res) => {
  const origin = process.env.URL_API;
  const messageMail = `Please confirm your email by clicking on the following link : <a href="${origin}/register">Verify Email</a>`;

  try {
    const { name, surname, email, course, message } = req.body;
    const emailAlreadyExists = await Course12.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'user already exists..' });
    }

    const user = await Course12.create({
      name,
      surname,
      email,
      course,
      message,
    });

    await sendEmail({
      to: email, // Change to your recipient
      subject: 'Certificate from Alienmeditation',
      html: `<strong>Hello, ${name}</strong><br>
      ${messageMail} <br />
      Copy this code and paste in the code field of the link: <br />
      Code: <b>${user._id}</b>
      `,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const verifyUser = async (req, res) => {
  try {
    const { code } = req.body;
    const user = await User.findById(code);
    const user2 = await Course2.findById(code);
    const user3 = await Course3.findById(code);
    const user4 = await Course4.findById(code);
    const user5 = await Course5.findById(code);
    const user6 = await Course6.findById(code);
    const user7 = await Course7.findById(code);
    const user8 = await Course8.findById(code);
    const user9 = await Course9.findById(code);
    const user10 = await Course10.findById(code);
    const user11 = await Course11.findById(code);
    const user12 = await Course12.findById(code);

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
    if (user10) {
      res.status(200).json({ userId: user10 });
    }
    if (user11) {
      res.status(200).json({ userId: user11 });
    }
    if (user12) {
      res.status(200).json({ userId: user12 });
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
  register,
  register2,
  register3,
  register4,
  register5,
  register6,
  register7,
  register8,
  register9,
  register10,
  register11,
  register12,
  verifyEmail,
  verifyUser,
};
