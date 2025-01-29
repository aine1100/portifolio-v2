
const Experience = () => {
  const timelineData = [
    {
      date: 'August 2024-Present',
      title: 'Frontend Developer and Designer -Insta Health',
      description:
        'I have collaborated with the team to make a solution for both mobile and web app for this health company',
    },
    {
      date: 'January 2025-Present',
      title: 'Product Designer -StoryLoom Ai',
      description:
        'I collaborated with the team to make the ui and ux designer for the user in order to have a modern view',
    },
    
  ];

  return (
    <div className="container mx-auto p-4 w-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="absolute border-opacity-20 border-gray-700 h-full border left-1/2 transform -translate-x-1/2"></div>
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 1 ? 'flex-row-reverse' : ''
            }`}
          >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-[#A53DFF] shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">
                {index + 1}
              </h1>
            </div>
            <div className="order-1 bg-[#132238] rounded-lg shadow-xl w-5/12 px-8 py-9">
              <h3 className="mb-3 font-bold text-white text-xl">
                {item.title}
              </h3>
              <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                {item.description}
              </p>
              <span className="text-sm font-semibold text-white pt-2">
                {item.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
