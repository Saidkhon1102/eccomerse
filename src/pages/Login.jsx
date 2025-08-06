import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center py-8">
      <form className="w-[460px] bg-gradient-to-br from-purple-50 to-indigo-100 flex flex-col gap-4 py-6 rounded-xl shadow-2xl border border-purple-200">
        {/* Header */}
        <div className="mx-auto mb-4">
          <h1 className="text-5xl font-bold text-emerald-600">Login</h1>
        </div>

        {/* Email Input */}
        <div className="mx-auto mb-3">
          <input
            className="border border-gray-300 text-emerald-800 px-3 rounded-lg text-xl w-[360px] h-13 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 placeholder-emerald-600"
            type="email"
            placeholder="Email address or phone number"
          />
        </div>

        {/* Password Input */}
        <div className="mx-auto mb-3">
          <input
            className="border border-gray-300 text-emerald-800 px-3 rounded-lg text-xl w-[360px] h-13 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 placeholder-emerald-600"
            type="password"
            placeholder="Password"
          />
        </div>

        {/* Login Button */}
        <div className="mx-auto mb-3">
          <button
            type="submit"
            className="border text-white rounded-lg text-2xl w-[360px] h-13 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 hover:cursor-pointer transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Login
          </button>
        </div>

        {/* Forgot Password Link */}
        <div className="mx-auto mb-3">
          <h2 className="text-emerald-600 italic hover:text-emerald-800 transition-colors duration-200 cursor-pointer">
            Forgot your account?
          </h2>
        </div>

        {/* Divider */}
        <div className="mx-auto mb-3">
          <hr className="w-[300px] text-center text-emerald-400" />
        </div>

        {/* Sign Up Button */}
        <div className="mx-auto mb-3">
          <NavLink to="/register">
            <button className="border text-white rounded-lg text-2xl w-[200px] h-13 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 hover:cursor-pointer transition-all duration-200 shadow-lg hover:shadow-xl">
              Sign up
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
