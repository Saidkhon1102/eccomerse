import { NavLink } from "react-router";

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center py-8">
      <form className="w-[460px] bg-gradient-to-br from-purple-50 to-indigo-100 flex flex-col gap-4 py-6 rounded-xl shadow-2xl border border-purple-200">
        {/* Header */}
        <div className="mx-auto mb-4">
          <h1 className="text-5xl font-bold text-emerald-600">Sign up</h1>
        </div>

        {/* Name Input */}  
        <div className="mx-auto mb-3">
          <input
            className="border border-gray-300 text-emerald-800 px-3 rounded-lg text-xl w-[360px] h-10 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 placeholder-emerald-600"
            type="text"
            placeholder="Name"
          />
        </div>

        {/* Surname Input */}
        <div className="mx-auto mb-3">
          <input
            className="border border-gray-300 text-emerald-800 px-3 rounded-lg text-xl w-[360px] h-10 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 placeholder-emerald-600"
            type="text"
            placeholder="Surname"
          />
        </div>

        {/* Date Input */}
        <div className="mx-auto mb-3">
          <input
            className="border border-gray-300 text-emerald-800 px-3 rounded-lg text-xl w-[360px] h-10 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
            type="date"
          />
        </div>

        {/* Email Input */}
        <div className="mx-auto mb-3">
          <input
            className="border border-gray-300 text-emerald-800 px-3 rounded-lg text-xl w-[360px] h-10 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 placeholder-emerald-600"
            type="email"
            placeholder="Phone number or email address"
          />
        </div>

        {/* Password Input */}
        <div className="mx-auto mb-3">
          <input
            className="border border-gray-300 text-emerald-800 px-3 rounded-lg text-xl w-[360px] h-10 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 placeholder-emerald-600"
            type="password"
            placeholder="New password"
          />
        </div>

        {/* Sign Up Button */}
        <div className="mx-auto mb-3">
          <button
            type="submit"
            className="border text-white rounded-lg text-2xl w-[360px] h-13 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 hover:cursor-pointer transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Sign up
          </button>
        </div>

        {/* Login Link */}
        <div className="mx-auto mb-3">
          <NavLink to="/login">
            <p className="italic text-emerald-600 hover:text-emerald-800 hover:underline transition-colors duration-200">
              Do you already have an account?
            </p>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Register;
