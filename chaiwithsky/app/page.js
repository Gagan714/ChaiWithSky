import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="min h-[44vh] text-white flex flex-col gap-3 justify-center items-center">
      <div className="text-3xl font-bold">Buy Me a Chai</div>
      <p className="px-2">A Crowd funding Platform for Creators.Get funded by your Fans and Followers.Start now!</p>
      <div>
      <Link href={"/login"}><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button></Link>
      <Link href={"https://github.com/Gagan714/ChaiWithSky"}><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button></Link>
      </div>
    </div>
    <div className="h-1 bg-slate-50 opacity-10 mb-6"></div>
    <div className="flex flex-col gap-4 justify-center items-center text-white">
      <div className="font-bold text-xl">Your Fans Can buy You a Chai</div>
      <div className="flex flex-col my-2 md:flex-row justify-around w-full items-center">
        <div className="flex flex-col gap-2 justify-center items-center">
        <div>
          <Image className=" rounded-full" src="/man.jpg" alt="" width={80} height={80}/>
        </div>
        <div className="font-bold">Fans want to help</div>
        <p className="px-5">Your followers are Available to Support You</p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
        <div>
          <Image className="rounded-full" src="/Dollar.gif" alt="" width={80} height={80}/>
        </div>
        <div className="font-bold">Fans want to Contribute</div>
        <p>Your followers are willing to Contribute Financially</p>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
        <div>
          <Image className=" bg-slate-400 rounded-full" src="/group.svg" alt="" width={80} height={80}/>
        </div>
        <div className="font-bold">Followers want to collaborate</div>
        <p>Your fans can collaborate with you</p>
        </div>
      </div>
    </div>
    </>
  );
}
