import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* logo */}
            <div>
              <a href="#" className="flex items-center py-5 px-2 text-gray-700">
                <svg
                  className="w-6 h-6 mr-1 text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
                <span className="font-extrabold text-lg">
                  Learnedze Networks
                </span>
              </a>
            </div>
            {/* primary nav */}
            <div className="flex items-center space-x-1 font-semibold">
              <a
                href="#"
                className="py-5 px-3 text-gray-600 hover:font-bold hover:text-gray-700 hover:shadow-gray-100 hover:underline hover:decoration-gray-800 hover:decoration-2 transition duration-5000">
                Home
              </a>
              <a
                href="#"
                className="py-5 px-3 text-gray-600 hover:font-bold hover:text-gray-700 hover:shadow-gray-100 hover:underline hover:decoration-gray-800 hover:decoration-2 transition duration-5000">
                About
              </a>
              <Link
                href="/courses"
                className="py-5 px-3 text-gray-600 hover:font-bold hover:text-gray-700 hover:shadow-gray-100 hover:underline hover:decoration-gray-800 hover:decoration-2 transition duration-5000">
                Courses
              </Link>
              <a
                href="#"
                className="py-5 px-3 text-gray-600 hover:font-bold hover:text-gray-700 hover:shadow-gray-100 hover:underline hover:decoration-gray-800 hover:decoration-2 transition duration-5000">
                Trainers
              </a>
              <a
                href="#"
                className="py-5 px-3 text-gray-600 hover:font-bold hover:text-gray-700 hover:shadow-gray-100 hover:underline hover:decoration-gray-800 hover:decoration-2 transition duration-5000">
                Corporates
              </a>
            </div>
          </div>
          {/* secondary nav */}
          <div className="flex items-center space-x-1">
            <a
              href="#"
              className="py-5 px-3 text-gray-600 font-semibold hover:font-bold hover:text-gray-700 hover:shadow-gray-100 hover:underline hover:decoration-gray-800 hover:decoration-2 transition duration-5000">
              Login
            </a>
            <a
              href="#"
              className="py-2 px-3 bg-yellow-300 text-yellow-900 font-semibold rounded-2xl hover:rounded-full hover:text-yellow-800 hover:font-extrabold transition hover:duration-5000">
              Signup
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
