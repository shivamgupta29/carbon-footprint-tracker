const ProgressCard = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg h-64 flex flex-col justify-center items-center transition-shadow duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]">
      <h1 className="text-xl font-semibold mb-4">Today</h1>
      <p className="text-gray-600 text-center">Todays emission vs goal</p>
    </div>
  );
};
export default ProgressCard;
