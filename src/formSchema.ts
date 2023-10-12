import * as zod from 'zod'
import { configure } from 'vee-validate'
import type { SubmissionContext, GenericObject } from 'vee-validate'

// Default values
configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: true, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true // controls if `update:modelValue` events should trigger validation with `handleChange` handler
})

// resolves the error below, typescript related

// Type '(values: { email: string; password: string; }, ctx: SubmissionContext) => void' is not assignable to type 'SubmissionHandler<GenericObject, GenericObject, unknown>'.
//   Types of parameters 'values' and 'values' are incompatible.
//     Type 'GenericObject' is missing the following properties from type '{ email: string; password: string; }': email, password

// 28         @submit="submit"
export function getSubmitFn<Schema extends zod.ZodObject<Record<string, any>>>(
  _: Schema,
  callback: (values: zod.infer<Schema>, ctx: SubmissionContext) => void
) {
  return (values: Record<string, any>, ctx: SubmissionContext): void => {
    callback(values, ctx)
  }
}

// resolves the error below, typescript related

// Type '(values: { email: string; password: string; confirm_password: string; }, ctx: SubmissionContext) => void' is not assignable to type 'SubmissionHandler<GenericObject, GenericObject, unknown>'.
//   Types of parameters 'values' and 'values' are incompatible.
//     Type 'GenericObject' is missing the following properties from type '{ email: string; password: string; confirm_password: string; }': email, password, confirm_password

// 33         @submit="submit"



export function getSubmitRegFn<Schema extends zod.ZodObject<Record<string, any>>>(
  _: Schema,
  callback: (values: zod.infer<Schema>, ctx: SubmissionContext) => void
) {
  return (values: zod.infer<Schema>, ctx: SubmissionContext): void => {
    callback(values, ctx)
  }
}

// SCHEMAS

export const loginSchema = zod.object({
  email: zod.string().nonempty('Can’t be empty').email({ message: 'Must be a valid email' }),
  password: zod.string().nonempty('Please check again').min(8, { message: 'Password is too short' })
})


export const signUpSchema = zod
  .object({
    email: zod.string().nonempty('This is required').email({ message: 'Must be a valid email' }),
    password: zod
      .string()
      .nonempty('Password field is required')
      .min(8, { message: 'Password is too short' }),
    confirm_password: zod
      .string()
      .nonempty('Password field is required')
      .min(8, { message: 'Password is too short' })
  })
  .refine((obj) => obj.password === obj.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm'] // this value is concatenated to the end of the actual path of the error
  })

export const validateUrl = zod.object({
  url_link: zod
    .string()
    .nonempty('Can’t be empty')
    .url('Please check the URL')
    .min(1, 'Can’t be empty')
})

// END
