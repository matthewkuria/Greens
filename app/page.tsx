import Image from "next/image";
export default function Home() {
  return (
    <main className="flex flex-col w-full flex-1 px-1 text-center">
      <section className="Hero flex flex-col  py-2 min-h-screen">
      <div className="flex ml-44 mt-72 py-2 px-4 bg-white w-[320px] rounded-md ">
        <h1 className="text-4xl text-green-600 font-bold ml-0">Thika Greens Golf Resort</h1>
      </div>     
    </section>
     <section className="flex flex-col py-2">
        <h2 className="text-2xl font-semibold">Accomodation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="stay min-h-[200px]">
            <Image src="/stay.jpeg" alt="Stay" width={500} height={500}
            className="rounded-sm"/>
            <p className="">Stay</p>
        </div>
         <div className="min-h-[200px]">
          <Image src="/dine.jpeg" alt="Stay" width={500} height={500} />
            <p className="">Stay</p>
        </div>
          <div className="min-h-[200px]">
            <Image src="/golf.jpg" alt="Stay" width={500} height={500} />
            <p className="font-semibold">Golf</p>
        </div>
        </div>
      </section>
    </main>
  );
}
