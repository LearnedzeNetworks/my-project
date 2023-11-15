import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="relative flex flex-col max-w-5xl mx-auto top-12 mt-32 p-24">
      <span className="mx-auto px-16 py-5 rounded-2xl font-semibold text-5xl text-white bg-gradient-to-r from-blue-500 to-red-500 rounded-tl-full rounded-br-full">
        Customer Feedback
      </span>
      <p className="p-8 pt-12 text-2xl font-medium text-center underline decoration-blue-500 decoration-2">
        CGI Information Systems
      </p>
      <p className="relative text-2xl font-medium text-justify text-gray-700">
        The trainer is good. Great presentation by him and explained every topic
        very well also helped us if we faced any issue during lab and resolve
        every query. Srikanth is very good in presentation and has knowledge of
        the subject. Very informative while discussing with him.
      </p>
    </div>
  );
}
