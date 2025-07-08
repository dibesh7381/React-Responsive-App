import React, { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errorUsername, setErrUsername] = useState('');
  const [errorEmail, setErrEmail] = useState('');
  const [errorPassword, setErrPassword] = useState('');
  const [errorConfirmPassword, setErrConfirmPassword] = useState('');

  const [userColor, setUserColor] = useState('');
  const [emailColor, setEmailColor] = useState('');
  const [passwordColor, setPasswordColor] = useState('');
  const [confirmPasswordColor, setConfirmPasswordColor] = useState('');

  const validate = (e) => {
    e.preventDefault();
    let isValid = true;

    if (username.length < 8) {
      setErrUsername('Username must be at least 8 characters');
      setUserColor('border-b-red-500');
      isValid = false;
    } else {
      setErrUsername('');
      setUserColor('border-b-green-500');
    }

    if (!email.includes('@')) {
      setErrEmail('Enter a valid email');
      setEmailColor('border-b-red-500');
      isValid = false;
    } else {
      setErrEmail('');
      setEmailColor('border-b-green-500');
    }

    if (password.length < 6) {
      setErrPassword('Password must be at least 6 characters');
      setPasswordColor('border-b-red-500');
      isValid = false;
    } else {
      setErrPassword('');
      setPasswordColor('border-b-green-500');
    }

    if (password !== confirmPassword) {
      setErrConfirmPassword('Passwords do not match');
      setConfirmPasswordColor('border-b-red-500');
      isValid = false;
    } else {
      setErrConfirmPassword('');
      setConfirmPasswordColor('border-b-green-500');
    }

    if (isValid) {
      alert('Form submitted ✅');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-200 px-4">
      <form
        onSubmit={validate}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Create Account</h2>

        {/* Username */}
        <div>
          <input
            type="text"
            placeholder="Username"
            className={`w-full bg-transparent border-b-2 outline-none py-2 px-1 transition-all duration-200 ${userColor}`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errorUsername && <p className="text-sm text-red-500 mt-1">{errorUsername}</p>}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            className={`w-full bg-transparent border-b-2 outline-none py-2 px-1 transition-all duration-200 ${emailColor}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorEmail && <p className="text-sm text-red-500 mt-1">{errorEmail}</p>}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="Password"
            className={`w-full bg-transparent border-b-2 outline-none py-2 px-1 transition-all duration-200 ${passwordColor}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorPassword && <p className="text-sm text-red-500 mt-1">{errorPassword}</p>}
        </div>

        {/* Confirm Password */}
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            className={`w-full bg-transparent border-b-2 outline-none py-2 px-1 transition-all duration-200 ${confirmPasswordColor}`}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errorConfirmPassword && <p className="text-sm text-red-500 mt-1">{errorConfirmPassword}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;


