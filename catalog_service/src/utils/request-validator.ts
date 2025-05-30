import { ClassConstructor, plainToClass } from 'class-transformer'
import { ValidationError, validate } from 'class-validator'

const validatorError = async (
  input: any
): Promise<ValidationError[] | false> => {
  const errors = await validate(input, { ValidationError: { target: true } })
  if (errors.length) {
    return errors
  }
  return false
}

export const RequestValidator = async <T>(
  type: ClassConstructor<T>,
  body: any
): Promise<{ error: boolean | string; input: T }> => {
  const input = plainToClass(type, body)
  const errors = await validatorError(input)
  if (errors && Array.isArray(errors)) {
    const errorMessage = errors
      .map((error: ValidationError) =>
        (Object as any).values(error.constraints)
      )
      .join(', ')
    return { error: errorMessage, input }
  }
  return { error: false, input }
}
