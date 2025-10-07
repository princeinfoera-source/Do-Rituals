// import { useNavigate } from 'react-router-dom';
// import Logo from "../assets/imgs/doRituals.webp";


// const GiLotusFlowerMock = () => <svg className="mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.6c-1.3 0-2.6.4-3.6 1.1-.9.7-1.7 1.7-2.2 2.8-.5 1.2-.7 2.4-.6 3.7.1 1.3.5 2.5 1.2 3.6.7 1.1 1.6 2 2.7 2.7 1.1.7 2.3 1 3.6 1 1.3 0 2.6-.3 3.6-1.1.9-.7 1.7-1.7 2.2-2.8.5-1.2.7-2.4.6-3.7-.1-1.3-.5-2.5-1.2-3.6-.7-1.1-1.6-2-2.7-2.7-1.1-.7-2.3-1-3.6-1zm-6.2 9c.1.9.4 1.7.9 2.5.5.8 1.1 1.4 1.9 1.9s1.6.8 2.5.9c.9.1 1.8 0 2.7-.2.9-.2 1.7-.6 2.5-1.1.8-.5 1.4-1.1 1.9-1.9.5-.8.8-1.7.9-2.5.1-.9 0-1.8-.2-2.7-.2-.9-.6-1.7-1.1-2.5-.5-.8-1.1-1.4-1.9-1.9s-1.6-.8-2.5-.9c-.9-.1-1.8 0-2.7.2-.9.2-1.7.6-2.5 1.1-.8.5-1.4 1.1-1.9 1.9-.5.8-.8 1.7-.9 2.5z" /></svg>;


// const useNavigateMock = () => (path) => { console.log(`[MOCK NAVIGATION] Redirecting to: ${path}`); };

// const NamasteCard = ({
//     appLogo = { Logo },
//     message = "May your path be guided by peace and devotion.",
//     linkText = "Explore Our Rituals",
//     linkTo = "/puja"
// }) => {
//     const navigate = useNavigate();

//     return (
//         <div className="flex items-center justify-center min-h-[100vh] p-4 bg-gradient-to-br from-orange-50 via-yellow-50 to-white font-sans">
//             <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 max-w-md w-full text-center transform hover:scale-[1.005] transition duration-300 relative overflow-hidden">
//                 {/* Subtle background pattern/texture */}
//                 <div className="absolute inset-0 bg-repeat opacity-5 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23a0a0a0\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34.545V48H28.98l-7-7H14v6H0v12h60V42h-4.02L36 34.545zm0-10.91V12h7.02l7 7H46v6H60V0H0v18h4.02L24 25.455z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

//                 <div className="relative z-10">
//                     {/* Application Logo */}
//                     <img
//                         src={Logo}
//                         alt="Application Logo"
//                         className="mx-auto h-12 mb-6" // Adjust height and margin as needed
//                     />
//                 </div>

//                 {/* Ritual Message */}
//                 <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight relative z-10">
//                     {message}
//                 </h3>

//                 {/* Call to Action Link */}
//                 <button
//                     onClick={() => navigate(linkTo)}
//                     className="cursor-pointer inline-flex items-center justify-center px-6 py-3 mt-4 text-lg font-semibold rounded-full text-white bg-gradient-to-r from-orange-500 to-yellow-500 shadow-lg hover:from-orange-600 hover:to-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-200 relative z-10"
//                 >
//                     <GiLotusFlowerMock /> {/* Example ritual icon */}
//                     {linkText}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default NamasteCard;
