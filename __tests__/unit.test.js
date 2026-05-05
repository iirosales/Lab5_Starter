// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('valid phone number 1', () => expect(isPhoneNumber('123-456-7890')).toBe(true));
test('valid phone number 2', () => expect(isPhoneNumber('(123) 456-7890')).toBe(true));
test('invalid phone number 1', () => expect(isPhoneNumber('123')).toBe(false));
test('invalid phone number 2', () => expect(isPhoneNumber('123-abc-def')).toBe(false));

// isEmail
test('valid email 1', () => expect(isEmail('me@ucsd.edu')).toBe(true));
test('valid email 2', () => expect(isEmail('regular@gmail.com')).toBe(true));
test('invalid email 1', () => expect(isEmail('nocom@ucsd')).toBe(false));
test('invalid email 2', () => expect(isEmail('noat.com')).toBe(false));

// isStrongPassword
test('valid strong password 1', () => expect(isStrongPassword('Abcdef123')).toBe(true));
test('valid strong password 2', () => expect(isStrongPassword('Z1234567_')).toBe(true));
test('invalid strong password 1', () => expect(isStrongPassword('1number')).toBe(false));
test('invalid strong password 2', () => expect(isStrongPassword('a1')).toBe(false));

// isDate
test('valid date 1', () => expect(isDate('10/01/2024')).toBe(true));
test('valid date 2', () => expect(isDate('12/31/1999')).toBe(true));
test('invalid date 1', () => expect(isDate('1/1/24')).toBe(false));
test('invalid date 2', () => expect(isDate('12/323/2030')).toBe(false));

// isHexColor
test('valid hex 1', () => expect(isHexColor('#FF0000')).toBe(true));
test('valid hex 2', () => expect(isHexColor('FFF')).toBe(true));
test('invalid hex 1', () => expect(isHexColor('#ZZZZZZ')).toBe(false));
test('invalid hex 2', () => expect(isHexColor('10')).toBe(false));