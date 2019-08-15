import * as Yup from 'yup'

const schema = Yup.object().shape({
  firstname: Yup.string().required('Firstname is required'),
  lastname: Yup.string().required('Lastname is required'),
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required')
})

export default schema
