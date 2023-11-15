import Image from "next/image";

export default function Offerings() {
  const offeringsData = [
    {
      title: "Virtual Workshop",
      imageSrc: "/laptop.svg",
    },
    {
      title: "Training Pods",
      imageSrc: "/peers.svg",
    },
    {
      title: "PoC Labs",
      imageSrc: "/desktop.svg",
    },
    {
      title: "Classroom Workshops",
      imageSrc: "/classroom.svg",
    },
    {
      title: "Advanced Learnings Labs",
      imageSrc: "/chemical.svg",
    },
    {
      title: "Consulting",
      imageSrc: "/consulting.svg",
    },
    {
      title: "Video On Demand",
      imageSrc: "/videoOnDemand.svg",
    },
    {
      title: "Foundational Learning Labs",
      imageSrc: "/time.svg",
    },
    {
      title: "Engineering Test Beds",
      imageSrc: "/chemicalTwo.svg",
    },
    {
      title: "Design/PoC/PoV Demos",
      imageSrc: "/flowchart.svg",
    },
    {
      title: "Virtual Sandboxes",
      imageSrc: "/database.svg",
    },
    {
      title: "Implementation",
      imageSrc: "/flowchart.svg",
    },
  ];

  return (
    <div className="relative top-[14rem]">
      <span className="relative left-[27rem] px-16 py-5 rounded-2xl font-semibold text-5xl text-white bg-gradient-to-r from-blue-500 to-red-500 rounded-tl-full rounded-br-full">
        What We Offer ?
      </span>
      <div className="flex flex-row flex-wrap m-10 p-5 pt-16">
        {offeringsData.map((offering) => (
          <div
            className="basis-1/4 p-6 pl-16 justify-start items-between flex bg-slate-200 border-4 border-white rounded-2xl"
            key={offering.title}>
            <Image
              src={offering.imageSrc}
              width={70}
              height={50}
              alt={offering.title}
            />
            <span className="pl-3 pt-5 text-base font-semibold leading-loose">
              {offering.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
