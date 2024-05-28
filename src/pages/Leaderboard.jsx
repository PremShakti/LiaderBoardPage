import React from "react";
import { IoHomeOutline } from "react-icons/io5";
const data = [
  {
    rank: 1,
    name: "	Selling with re entr",
    calmarRatio: 1.5,
    overallProfit: 50000,
    avgDailyProfit: 500,
    winPercent: 60,
    price: 100,
  },
  {
    rank: 2,
    name: "	strategy_name",
    calmarRatio: 1.4,
    overallProfit: 45000,
    avgDailyProfit: 450,
    winPercent: 58,
    price: 0,
  },
  {
    rank: 3,
    name: "Based on premium and",
    calmarRatio: 1.3,
    overallProfit: 40000,
    avgDailyProfit: 400,
    winPercent: 55,
    price: 80,
  },
  {
    rank: 4,
    name: "strategy_name",
    calmarRatio: 1.2,
    overallProfit: 35000,
    avgDailyProfit: 350,
    winPercent: 53,
    price: 70,
  },
  {
    rank: 5,
    name: "	strategy_name",
    calmarRatio: 1.1,
    overallProfit: 30000,
    avgDailyProfit: 300,
    winPercent: 50,
    price: 0,
  },
  {
    rank: 6,
    name: "	Based on premium wit",
    calmarRatio: 1.0,
    overallProfit: 25000,
    avgDailyProfit: 250,
    winPercent: 48,
    price: 0,
  },
  {
    rank: 7,
    name: "	strategy_name",
    calmarRatio: 0.9,
    overallProfit: 20000,
    avgDailyProfit: 200,
    winPercent: 45,
    price: 0,
  },
  {
    rank: 8,
    name: "Wait and trade_Save",
    calmarRatio: 0.8,
    overallProfit: 15000,
    avgDailyProfit: 150,
    winPercent: 43,
    price: 0,
  },
  {
    rank: 9,
    name: "	iron condor",
    calmarRatio: 0.7,
    overallProfit: 10000,
    avgDailyProfit: 100,
    winPercent: 40,
    price: 0,
  },
  {
    rank: 10,
    name: "	strategy_name",
    calmarRatio: 0.6,
    overallProfit: 5000,
    avgDailyProfit: 50,
    winPercent: 38,
    price: 0,
  },
];
const Leaderboard = () => {
  return (
    <>
      <div className="w-full lg:px-[100px]  px-[10px] lg:mt-8 mt-4 ">
        <div className="flex flex-col items-start justify-start gap-2">
          <h1 className=" text-2xl font-semibold text-gray-600">Leaderboard</h1>
          <div className="flex items-center justify-start gap-1">
            <IoHomeOutline />/<p>Leaderboard</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-4">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-700">
          Basic Backtest
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg text-sm lg:text:lg">
            <thead className="bg-gray-800 text-white ">
              <tr>
                <th className="py-2 px-4 sticky left-0 bg-gray-800">Rank</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Calmar Ratio</th>
                <th className="py-2 px-4">Overall Profit</th>
                <th className="py-2 px-4">Avg. Daily Profit</th>
                <th className="py-2 px-4">Win % (Day)</th>
                <th className="py-2 px-4">Price (Rs)</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.rank} className="border-b">
                  <td className="py-2 px-4 text-center sticky left-0 bg-white shadow-right">
                    {" "}
                    <div className="w-10 h-10  rounded-full flex items-center justify-center font-semibold bg-[#ffffff] text-black border">
                      {item.rank}
                    </div>{" "}
                  </td>
                  <td className="py-2 px-4  whitespace-nowrap capitalize text-start font-semibold">
                    {item.name}
                  </td>
                  <td className="py-2 px-4 text-center whitespace-nowrap">
                    {item.calmarRatio}
                  </td>
                  <td className="py-2 px-4 text-center whitespace-nowrap">
                    {item.overallProfit}
                  </td>
                  <td className="py-2 px-4 text-center whitespace-nowrap">
                    {item.avgDailyProfit}
                  </td>
                  <td className="py-2 px-4 text-center whitespace-nowrap">
                    {item.winPercent}
                  </td>
                  <td className="py-2 px-4 text-center whitespace-nowrap">
                    {item.price ? item.price : "-"}
                  </td>
                  <td className="py-2 px-4 text-center whitespace-nowrap">
                    <button className="bg-blue-500 text-white px-4 py-1 rounded">
                      {item.price ? "Buy" : "View"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;

// <div className="container mx-auto p-4">

// <div className="overflow-x-auto">
//   <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
//     <table className="min-w-full">
//       <thead className="bg-gray-800 text-white text-sm lg:text-base">
//         <tr>
//           <th className="sticky top-0 left-0 z-20 px-4 py-2 bg-gray-800">Rank</th>
//           <th className="px-4 py-2">Name</th>
//           <th className="px-4 py-2">Calmar Ratio</th>
//           <th className="px-4 py-2">Overall Profit</th>
//           <th className="px-4 py-2">Avg. Daily Profit</th>
//           <th className="px-4 py-2">Win % (Day)</th>
//           <th className="px-4 py-2">Price (Rs)</th>
//           <th className="px-4 py-2">Action</th>
//         </tr>
//       </thead>
//       <tbody className="bg-white">
//         {data.map((item) => (
//           <tr key={item.rank} className="border-b border-gray-200">
//             <td className="sticky left-0 z-10 px-4 py-2 bg-white"> <div className='flex items-center justify-center w-10 h-10 font-semibold shadow-sm border rounded-full'>{item.rank}</div> </td>
//             <td className="px-4 py-2">{item.name}</td>
//             <td className="px-4 py-2">{item.calmarRatio}</td>
//             <td className="px-4 py-2">{item.overallProfit}</td>
//             <td className="px-4 py-2">{item.avgDailyProfit}</td>
//             <td className="px-4 py-2">{item.winPercent}</td>
//             <td className="px-4 py-2">{item.price}</td>
//             <td className="px-4 py-2">
//               <button className="bg-blue-500 text-white px-4 py-1 rounded">View</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// </div>
// </div>
