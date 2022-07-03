import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
// import { register, reset } from '../features/auth/authSlice'
// import Spinner from '../components/Spinner'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const {email, password} = formData
    // why brackets are used in useState 
    // stackoverflow post: https://stackoverflow.com/questions/49437859/adding-brackets-to-the-attribute-in-setstate
    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }
    
      const onSubmit = (e) => {
        e.preventDefault()
      }

    return (
        <>
            <section className='heading'>
                <h1>
                <FaUser /> Login
                </h1>
                <p>Please login to your account</p>
            </section> 

            <section className='form'>
                <form onSubmit={onSubmit}>
                
                <div className='form-group'>
                    <input
                    type='email'
                    className='form-control'
                    id='email'
                    name='email'
                    value={email}
                    placeholder='Enter your email'
                    onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <input
                    type='password'
                    className='form-control'
                    id='password'
                    name='password'
                    value={password}
                    placeholder='Enter password'
                    onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-block'>
                    Submit
                    </button>
                </div>
                </form>
            </section>
    </>
    )
}

export default Login