// const Sidebar = () => {
//   return (
//     <div className="w-[350px] h-full bg-white px-4 py-6 overflow-y-auto shadow-xl flex flex-col">
//       <div className="flex-1 mb-4 pb-4 border-b">
//         <h1 className="text-lg font-semibold mb-3">Important Reminders</h1>
//         <ul className="space-y-2 text-sm text-gray-800">
//           <li>Set your July goal</li>
//           <li>Refil your gas in 3 days</li>
//           <li>No of rides in 2 days</li>
//         </ul>
//       </div>
//       <div className="flex-1">
//         <h1 className="text-lg font-semibold mb-3">News</h1>
//         <ul className="space-y-2 text-sm text-gray-800">
//           <li>India become first country to develop time travel</li>
//           <li>India to lead the world after world war 3</li>
//           <li>India to have abudandcyb of minerals</li>
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default Sidebar;
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-64 bg-green-600 text-white p-4 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/dashboard" className="hover:underline">
            🏠 Dashboard
          </Link>
        </li>
        <li>
          <Link to="/profile" className="hover:underline">
            👤 Profile
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">
            ℹ️ About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
