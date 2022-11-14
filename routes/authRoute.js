const express = require('express');
const router = express.Router();
const {
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
} = require('../controllers/authController');

const {
  register1Sp,
  register2Sp,
  register3Sp,
  register4Sp,
  register5Sp,
  register6Sp,
  register7Sp,
  register8Sp,
  register9Sp,
  verifyUserSp,
} = require('../controllers/authControllerSp');

const {
  register1Pt,
  register2Pt,
  register3Pt,
  register4Pt,
  register5Pt,
  register6Pt,
  register7Pt,
  register8Pt,
  register9Pt,
  verifyUserPt,
} = require('../controllers/authControllerPt');

// English
router.post('/register', register);
router.post('/register2', register2);
router.post('/register3', register3);
router.post('/register4', register4);
router.post('/register5', register5);
router.post('/register6', register6);
router.post('/register7', register7);
router.post('/register8', register8);
router.post('/register9', register9);
router.post('/register10', register10);
router.post('/register11', register11);
router.post('/register12', register12);

// Spanish
router.post('/register1sp', register1Sp);
router.post('/register2sp', register2Sp);
router.post('/register3sp', register3Sp);
router.post('/register4sp', register4Sp);
router.post('/register5sp', register5Sp);
router.post('/register6sp', register6Sp);
router.post('/register7sp', register7Sp);
router.post('/register8sp', register8Sp);
router.post('/register9sp', register9Sp);

// Portuguese
router.post('/register1Pt', register1Pt);
router.post('/register2Pt', register2Pt);
router.post('/register3Pt', register3Pt);
router.post('/register4Pt', register4Pt);
router.post('/register5Pt', register5Pt);
router.post('/register6Pt', register6Pt);
router.post('/register7Pt', register7Pt);
router.post('/register8Pt', register8Pt);
router.post('/register9Pt', register9Pt);

router.post('/verify-email', verifyEmail);
router.post('/verify-user', verifyUser);
router.post('/verify-user-sp', verifyUserSp);
router.post('/verify-user-pt', verifyUserPt);

module.exports = router;
