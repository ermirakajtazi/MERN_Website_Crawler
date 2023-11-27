import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  url: Yup.string()
    .url('Invalid URL format')
    .required('URL is required'),
});

export default validationSchema;
