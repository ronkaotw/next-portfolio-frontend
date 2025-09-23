export default function Experience() {
  return (
    <section className="w-full h-screen relative flex flex-row justify-center items-start gap-36 p-10">
      <div className="flex flex-col">
        <h2 className="text-[50px] font-bold mb-4">Portfolio</h2>
        <hr className="h-px my-4 bg-white border-0" />
        <p className="text-[15px]">作品集</p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="relative flex flex-col">
          <div className="w-[150px] h-[50px] absolute top-5 bg-gray-200 rounded-lg flex flex-row items-center justify-center gap-5">
                <button className="bg-blue-700 w-[60px] h-10 rounded-md hover:bg-blue-600 transition-colors">Pinned</button>
                <button className="w-15 h-10 rounded-md bg-transparent text-black hover:bg-gray-500 hover:text-white transition-colors">All</button>
          </div> 
        </div>
      </div>

      <div className="flex flex-col absolute top-36 left-36 bg-gray-300 w-[400px] h-[300px] rounded-lg">
        <div className="w-[400px] h-[200px] absolute top-65 rounded-lg bg-gray-100">

        </div>
      </div>
    </section>
  );
}
