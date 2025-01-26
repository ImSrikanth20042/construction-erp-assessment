const EmployeeTable = ({ data }) => {
  return (
    <div className="w-full mt-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white mt-1.5 mb-1.5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-400 bg-white">
          <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-100 dark:text-gray-900">
            <tr>
              <th scope="col" className="px-6 py-3">
                {" "}
                EMPLOYEE{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                EMAIL{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                DEPARTMENT{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                Status{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                PROJECT{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                ACTIONS{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee, index) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-100 even:bg-gray-50 even:dark:bg-gray-100 border-b dark:border-gray-700 border-gray-200 text-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {employee.employee}
                </th>
                <td className="px-6 py-4">{employee.email}</td>
                <td className="px-6 py-4">{employee.department}</td>
                <td className="px-6 py-4 text-green-800 ">
                  <span className="bg-green-300 rounded-3xl p-1.5">
                    {" "}
                    {employee.status}{" "}
                  </span>
                </td>
                <td className="px-6 py-4">{employee.project}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium mr-2 text-blue-600 dark:text-blue-500 hover:underline">
                    {" "}
                    Edit{" "}
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline">
                    {" "}
                    Delete{" "}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
