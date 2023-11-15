import Image from "next/image";
import Offerings from "./offerings";
import Testimonial from "./testimonial";

export default function HomePage() {
  return (
    <div className="bg-white">
      <div className="flex max-w-8xl mx-auto">
        <div className="flex flex-col w-3/5 h-full pt-[160px] pl-[8.5rem]">
          <div className="font-bold text-7xl text-blue-500">
            Learnedze <span className="text-red-500">Networks!</span>
          </div>
          <div className="pt-6 text-justify leading-loose text-base text-slate-900">
            <span className="font-semibold text-xl text-blue-500">
              Learnedze
            </span>{" "}
            <span className="font-semibold text-lg text-red-500">Networks</span>{" "}
            is an ed-tech company based out of India. Learnedze provides{" "}
            <span className="font-semibold text-lg">on-demand labs</span> as a
            service to organizations in the networking industry. Focusing on{" "}
            <span className="font-semibold text-lg">
              technology learning labs, sandbox labs, proof of concept labs &
              demos, training & consulting
            </span>{" "}
            on networking technologies.
          </div>
        </div>
        <div className="relative w-3/5 h-full pt-[50px] pr-[8.5rem]">
          <Image
            src="/3d-business-man-and-woman-working-with-laptop.png"
            alt="3D business man and woman working with laptop"
            width={330}
            height={600}
            className="absolute right-60 top-8 z-10"
          />
          <div className="relative bg-blue-500 h-52 w-42 rounded-tr-[7542px] rounded-bl-[8500px] top-5 left-20 z-0 opacity-90 hover:opacity-100"></div>
          <div className="relative bg-red-500 h-52 w-42 rounded-tr-[7542px] rounded-bl-[8500px] top-42 left-20 z-0 opacity-90 hover:opacity-100"></div>
        </div>
      </div>
      <Offerings />
      <Testimonial />
    </div>
  );
}
