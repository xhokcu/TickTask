import { InferType, object, string } from 'yup';

export const useAddTaskSchema = () => {
  return object({
    title: string().required('First name is required.'),
    description: string(),
    // priority: string().required('Priority is required.'),
  });
};

// Infertype kullanarak sema turunu cikartalim.
export type AddTaskSchemaType = InferType<ReturnType<typeof useAddTaskSchema>>;
