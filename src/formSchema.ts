
import * as zod from 'zod'
import { configure } from 'vee-validate';

// Default values
configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: true, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});


 export const loginSchema =  zod.object({
    email: zod.string().nonempty('Can’t be empty').email({ message: 'Must be a valid email' }),
    password: zod
      .string()
      .nonempty('Please check again')
      .min(8, { message: 'Password is too short' })
  })
 export const signUpSchema =  zod.object({
    email: zod.string().nonempty('This is required').email({ message: 'Must be a valid email' }),
    password: zod
      .string()
      .nonempty('Password field is required')
      .min(8, { message: 'Password is too short' }),
    confirm_password: zod
      .string()
      .nonempty('Password field is required')
      .min(8, { message: 'Password is too short' }),

  }).superRefine(({password, confirm_password}, ctx) => {
    if (confirm_password !== password) {
        ctx.addIssue({
          code: "custom",
          message: "The passwords did not match"
        });
      }
  })
