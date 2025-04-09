import { InferType, object, string } from 'yup';

export const useLoginSchema = () => {
  return object({
    email: string().email('Geçerli bir e-posta girin.').required('E-posta zorunludur.'),
    password: string()
      .min(8, 'Password must be at least 8 characters long.')
      .required('Password is required.')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
      .matches(/[0-9]/, 'Password must contain at least one number.'),
  });
};

// Infertype kullanarak sema turunu cikartalim.
export type LoginSchemaType = InferType<ReturnType<typeof useLoginSchema>>;
