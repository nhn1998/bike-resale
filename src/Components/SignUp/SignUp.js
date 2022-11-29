import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../Auth/AuthProvider';
import image from './login.jpg'
const SignUp = () => {
  const { register, updateUserProfile } = useContext(authContext)
  const navigate = useNavigate()
  const HandleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const options= form.options.value;
    console.log(options)

    register(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        saveUser(name, email,options)

        HandleUpdateUserProfile(name, photoUrl)
          .then(() => {
            
          })
          .catch(err => console.log(err))

      })
      .catch(err => console.log(err))
  };
  const HandleUpdateUserProfile = (name, photoUrl) => {
    const profile = {
      displayName: name,
      photoURL: photoUrl
    }
    updateUserProfile(profile)
  }
  const saveUser = (name, email,role) => {
    const user = { name, email,role }
    fetch('https://assaingment-twelve-server-nhn1998.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          navigate('/')
          toast.success('user created successfully')
        }

      })
  }
  return (
    <div className="hero min-h-screen bg-base-200 pt-20">
      <div className="hero-content flex-col gap-32 lg:flex-row">
        <div className="text-center lg:text-left">

          <img src={image} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={HandleSubmit} className="card-body">
            <h1 className="text-5xl font-bold mb-12">Register now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoUrl</span>
              </label>
              <input type="text" name='photoUrl' placeholder="Your photo Url" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
            </div>
            <select className='input-bordered' name="options">
              <option>Buyers</option>
              <option>Sellers</option>
            </select>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p className='mt-5'>Already have an account?<Link to='/login' className='font-bold'>SingIn</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;