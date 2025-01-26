const MultiCards = ({ cards }) => {
  return (
    <div className="flex-1 flex items-center justify-evenly flex-wrap gap-6 ml-10 m-5 rounded">
      {cards.map((card, index) => (
        <div
          key={index}
          className="p-4 bg-white rounded-2xl shadow-lg flex items-center justify-between w-64">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              {card.title}
            </h3>
            <p className="text-4xl font-bold text-gray-900 mt-2">
              {card.value}
            </p>
            <p className="text-sm text-gray-600 mt-1 font-medium">
              <span className={`font-bold text-${card.changeColor}-500`}>
                {card.percentageChange}
              </span>{" "}
              from last month
            </p>
          </div>
          <card.icon
            sx={{ color: card.iconColor }}
            className={`${card.iconBgColor} p-0.5 rounded-2xl`}
          />
        </div>
      ))}
    </div>
  );
};

export default MultiCards;
