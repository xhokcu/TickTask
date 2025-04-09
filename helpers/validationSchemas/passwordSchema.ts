import { InferType, object, string } from 'yup';

export const usePasswordSchema = () => {
  return object({
    email: string().email('Geçerli bir e-posta girin.').required('E-posta zorunludur.'),
  });
};

// Infertype kullanarak sema turunu cikartalim.
export type PasswordSchemaType = InferType<ReturnType<typeof usePasswordSchema>>;
