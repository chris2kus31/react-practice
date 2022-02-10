import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/styles.module.css'

import signup from '../api/signup'

const Signup = () => {
  const [formData, setFormData] = useState({})

  const handleChange = (name, event) => {
    event.preventDefault()
    setFormData({ ...formData, [name]: event.target.value })
  }

  const handleSignup = (event) => {
    event.preventDefault()
    // signup(/** @TODO: implement */)
  }

  return (
    <div className={styles.container}>
      <Link href="/">
        <div style={{ padding: '20px 0', cursor: 'pointer' }}>{`<- Home`}</div>
      </Link>
      <h1 className={styles.title}>Sign Up</h1>
      <form className={styles.main} style={{ width: 300 }}>
        <label>First Name</label>
        <input type="text" value={formData.fName || ''} />
        <label>Last Name</label>
        <input type="text" value={formData.lName || ''} />
        <label>Username</label>
        <input type="text" value={formData.email || ''} />
        <label>Password</label>
        <input type="password" value={formData.password || ''} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
