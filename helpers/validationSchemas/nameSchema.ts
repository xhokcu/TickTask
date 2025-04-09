import { InferType, object, string } from 'yup';

export const useNameSchema = () => {
  return object({
    firstName: string().required('First name is required'),
    lastName: string().required('Last name is required'),
  });
};

// Infertype kullanarak sema turunu cikartalim.
export type NameSchemaType = InferType<ReturnType<typeof useNameSchema>>;
