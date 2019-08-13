import * as Yup from 'yup'

const schema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required')
})

export default schema
