const ResourceCards = ({ cards }) => {
  return (
    <div className="flex flex-row items-center justify-evenly">
      {cards.map((card, index) => (
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {card.title}
          </h5>
          {card.title === "Upcoming Leaves"
            ? card.data.map((leave, index) => (
                <p
                  key={index}
                  className="flex items-center justify-between font-normal text-gray-700">
                  <span className="font-medium">{leave.name}</span>
                  <br />
                  <span className="font-light">{leave.dates}</span>
                  <span
                    className={`${leave.statusColor} ${leave.bgColor} rounded-2xl p-1.5 ml-auto text-sm`}>
                    {leave.status}
                  </span>
                </p>
              ))
            : card.data.map((data, index) => (
                <p
                  key={index}
                  className="flex items-center justify-between font-normal text-gray-700">
                  {data.label}
                  <span className={`${data.color} text-xl p-1.5 ml-auto`}>
                    {data.value}
                  </span>
                </p>
              ))}
        </a>
      ))}
    </div>
  );
};

export default ResourceCards;
