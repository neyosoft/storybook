import {ref, object, string} from 'yup';

export const createAccountSchema = object().shape({
  firstName: string()
    .required('First name is required.')
    .matches(/^[a-z]+$/i, 'Can only contain Alphabeths'),
  lastName: string()
    .required('First name is required.')
    .matches(/^[a-z]+$/i, 'Can only contain Alphabeths'),
  email: string().required('Email name is required.').email('Invalid email'),
  phoneNumber: string().required('Phone number is required.'),
  password: string()
    .required('Password is required.')
    .min(8, 'Must be minimum of 8 Characters'),
});

export const loginSchema = object().shape({
  email: string().required('Email name is required.').email('Invalid email'),
  password: string()
    .required('Password is required.')
    .min(8, 'Must be minimum of 8 Characters'),
});

export const forgetPasswordSchema = object().shape({
  email: string().required('Email name is required.').email('Invalid email'),
});

export const resetPasswordSchema = object().shape({
  newPassword: string()
    .required('Password is required.')
    .min(8, 'Must be minimum of 8 Characters'),
  confirmPassword: string()
    .required('New password is required')
    .oneOf([ref('newPassword')], 'Passwords must match'),
});
