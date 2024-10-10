// import React from 'react';

// const LoginPage = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="flex w-full max-w-4xl rounded-lg shadow-lg bg-white overflow-hidden ">


//         {/* Form Section */}
//         <div className="w-1/2 p-8">
//           <h2 className="text-3xl font-semibold text-center mb-8">Sign In</h2>
//           <form className="space-y-6">

//             {/* Email Input */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Mail Address"
//               />
//             </div>

//             {/* Password Input */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Password"
//               />
//             </div>

//             {/* Sign In Button */}
//             <div>
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
//               >
//                 Sign In
//               </button>
//             </div>

//             {/* Forgot Password */}
//             <div className="text-center">
//               <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
//                 Forgot password?
//               </a>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;






import React from 'react';
import logo from "../assets/logo_png.png"


const LoginPage = () => {




    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 md:p-8">
                <div className="flex md:flex-row rounded-lg overflow-hidden w-full max-w-md bg-white shadow-xl">
                    <div className="flex flex-col items-center justify-center p-6 md:p-10 w-full mb-8 md:mb-0">
                        <img src={logo} alt="Logo" className="w-24 md:w-44 mx-auto" />
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-10">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 text-center focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Mail Address"
                        />

                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mt-6">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 text-center focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Password"
                        />

                        <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 mt-10">
                            Sign In
                        </button>
                        <button className="mt-4 hover:underline">
                            Forgot Password?
                        </button>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;




