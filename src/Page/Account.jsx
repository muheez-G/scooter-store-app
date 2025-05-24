import React, { useState, useEffect } from 'react';
import { PiTruckDuotone } from 'react-icons/pi';
import { MdPayment } from 'react-icons/md';
import { BsHeadset } from 'react-icons/bs';
import { LuCodesandbox } from 'react-icons/lu';

const Account = () => {
  const [activeView, setActiveView] = useState('signin');
  const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) || []);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('currentUser')));
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(user));
  }, [users, user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignUp = () => {
    if (!form.name || !form.email || !form.password) {
      setError('All fields are required.');
      return;
    }
    const userExists = users.some(u => u.email === form.email);
    if (userExists) {
      setError('User already exists.');
      return;
    }
    const newUser = { name: form.name, email: form.email, password: form.password };
    setUsers([...users, newUser]);
    setUser(newUser);
    setActiveView('signedin');
    setError('');
  };

  const handleSignIn = () => {
    const found = users.find(u => u.email === form.email && u.password === form.password);
    if (found) {
      setUser(found);
      setActiveView('signedin');
      setError('');
    } else {
      setError('Invalid email or password.');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setForm({ name: '', email: '', password: '' });
    setActiveView('signin');
  };

  const sharedInputClasses =
    'w-full px-4 py-3 rounded-lg bg-[#1e1e1e] text-white focus:outline-none focus:ring-2 focus:ring-green-500';

  const sharedButtonClasses =
    'w-full bg-green-600 hover:bg-green-700 transition text-white font-semibold py-3 rounded-lg text-lg mt-4';

  const renderForm = () => (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-8">
      <div className="w-full bg-[#2b2b2b] text-white rounded-xl shadow-md p-6 sm:p-10">
        {activeView === 'signin' && (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
            {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={sharedInputClasses + ' mb-4'}
              onChange={handleChange}
              value={form.email}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={sharedInputClasses + ' mb-4'}
              onChange={handleChange}
              value={form.password}
            />
            <button className={sharedButtonClasses} onClick={handleSignIn}>
              Sign In
            </button>
            <div className="flex justify-between mt-4 text-sm text-green-400">
              <button onClick={() => setActiveView('recover')} className="hover:underline">Forgot Password?</button>
              <button onClick={() => setActiveView('signup')} className="hover:underline">Sign Up</button>
            </div>
          </>
        )}

        {activeView === 'signup' && (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
            {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={sharedInputClasses + ' mb-4'}
              onChange={handleChange}
              value={form.name}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={sharedInputClasses + ' mb-4'}
              onChange={handleChange}
              value={form.email}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={sharedInputClasses + ' mb-4'}
              onChange={handleChange}
              value={form.password}
            />
            <button className={sharedButtonClasses} onClick={handleSignUp}>
              Sign Up
            </button>
            <div className="text-center mt-4 text-green-400">
              <button onClick={() => setActiveView('signin')} className="hover:underline text-sm">
                Already have an account? Sign In
              </button>
            </div>
          </>
        )}

        {activeView === 'recover' && (
          <>
            <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
            <p className="text-gray-300 text-sm text-center mb-4">Enter your email and we’ll send a reset link.</p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={sharedInputClasses + ' mb-4'}
            />
            <button className={sharedButtonClasses}>Send Reset Link</button>
            <div className="text-center mt-4 text-green-400">
              <button onClick={() => setActiveView('signin')} className="hover:underline text-sm">
                Back to Sign In
              </button>
            </div>
          </>
        )}

        {activeView === 'signedin' && user && (
          <>
            <h2 className="text-2xl font-bold text-center mb-4">Welcome</h2>
            <p className="text-center text-green-400 mb-2">{user.name}</p>
            <p className="text-center text-gray-300 mb-4">{user.email}</p>
            <button className={sharedButtonClasses} onClick={handleLogout}>
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );

  return (
    <>
      <div className="px-4 py-12">{renderForm()}</div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-14">We Are Happy to Help You</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 md:px-12 md:py-16">
        {[
          {
            icon: <PiTruckDuotone size={32} className="text-green-500 mb-2" />,
            title: 'Fastest Delivery',
            desc: 'Delivery ordered within 24 hours',
          },
          {
            icon: <LuCodesandbox size={32} className="text-green-500 mb-2" />,
            title: 'Trustworthy Service',
            desc: 'Trustworthy and reliable service provider',
          },
          {
            icon: <MdPayment size={32} className="text-green-500 mb-2" />,
            title: 'Secure Payments',
            desc: 'Payment protected by billdesk pro',
          },
          {
            icon: <BsHeadset size={32} className="text-green-500 mb-2" />,
            title: '24*7 Support',
            desc: 'Customer service active 24*7 all-over',
          },
        ].map(({ icon, title, desc }, i) => (
          <span
            key={i}
            className="bg-[#2b2b2b] text-white p-5 sm:p-6 rounded-xl min-h-[200px] flex flex-col justify-start items-start"
          >
            {icon}
            <h3 className="text-base sm:text-lg font-semibold mt-2">{title}</h3>
            <p className="text-sm text-gray-300 mt-1">{desc}</p>
          </span>
        ))}
      </div>
    </>
  );
};

export default Account;
