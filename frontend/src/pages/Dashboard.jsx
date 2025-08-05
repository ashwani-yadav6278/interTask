
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Dashboard = () => {
  const [internData, setInternData] = useState([]);
  
  useEffect(() => {
    getInternData();
  }, []);

  const getInternData = async () => {
    try {
      const res = await axios.get("https://intertask.onrender.com/api/interndata");
      setInternData(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  if (internData.length === 0) {
    return <div className="text-center mt-10">Loading...</div>;
  }
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
        Intern Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {internData.map((intern, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-xl transition-all"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Welcome, <span className="text-blue-600 font-bold">{intern?.name}</span>
            </h2>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Referral Code:</span>{" "}
              {intern?.referralCode}
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-medium">Donation:</span> ₹{intern?.totalDonations}
            </p>

            <h3 className="text-lg font-bold mb-2 text-green-700">Rewards</h3>
            {Array.isArray(intern.rewards) && intern.rewards.length > 0 ? (
              <ul className="list-disc list-inside text-gray-700">
                {intern.rewards.map((reward, i) => (
                  <li key={i}>{reward}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No rewards yet.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
