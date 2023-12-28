"use client";
const Pricing = async () => {
  const response = await fetch("http://localhost:3000/api/burgers/");
  const data = await response.json();

  return (
    <div className="mt-14">
      <h1 className="text-center text-pink-700 ">Best Food Menu</h1>
      <h1 className="text-center text-3xl font-semibold text-slate-900">
        Our Best Foods Menus
      </h1>
      <div className="grid grid-cols-2 gap-6 mx-14 mt-10">
        {data.map((d) => (
          <div
            key={d._id}
            className="flex justify-center items-center col-span-1 bg-orange-100 h-[250px] px-5 rounded-lg relative"
          >
            <div className=" w-2/5 ">
              <img className="w-[200px][h-200px]" src={d.url} alt="" />
            </div>
            <div className="flex flex-col w-3/5 gap-x-2 pl-7  px-3 text-justify">
              <p className="font-bold">{d.title}</p>
              <p>{d.content}</p>
              <p className="font-semibold">{d.price}</p>
              <div className="flex justify-between gap-x-4 font-bold py-4 absolute bottom-0">
                <button className="text-pink-700">add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
