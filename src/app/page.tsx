import React from 'react';

const page = () => {
  const staffName = "Luqman"; // Example name
  const staffList = [
    { name: "Luqman", position: "Software Engineer" },
    { name: "Diyana", position: "Designer" },
    // Add more staff here
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-4 shadow-lg">
        <div className="flex flex-col items-center">
          {/* Staff Picture */}
          <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
            {/* Placeholder for picture */}
            <span className="text-gray-600">Picture</span>
          </div>
          {/* Staff List */}
          <div className="w-full">
            <h2 className="text-lg font-bold mb-2">Staff List</h2>
            <ul className="space-y-2">
              {staffList.map((staff, index) => (
                <li key={index} className="border-b pb-2">
                  <p className="text-gray-800">{staff.name}</p>
                  <p className="text-gray-500 text-sm">{staff.position}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          Welcome, {staffName}!
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
