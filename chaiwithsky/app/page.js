import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="min h-[44vh] text-white flex flex-col gap-3 justify-center items-center">
      <div className="text-3xl font-bold">Buy Me a Chai</div>
      <p>A Crowd funding Platform for Creators.Get funded by your Fans and Followers.Start now!</p>
      <div>
      <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
      <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </div>
    </div>
    <div className="h-1 bg-slate-50 opacity-10"></div>
    </>
  );
}
