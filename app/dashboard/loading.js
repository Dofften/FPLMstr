import { Lexend } from "next/font/google";
import Link from "next/link";

const lexend = Lexend({ subsets: ["latin"] });

export default function Loading() {
  return (
    <div className="flex min-h-full flex-col">
      <div className="relative flex flex-auto items-center">
        <div className="absolute inset-0 -z-10 text-slate-900/10 [mask-image:linear-gradient(transparent,white,transparent)]">
          <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
            <defs>
              <pattern
                id=":S1:"
                width="128"
                height="128"
                patternUnits="userSpaceOnUse"
                x="50%"
                y="50%"
                patternTransform="translate(0 60)"
              >
                <path
                  d="M0 128V.5H128"
                  fill="none"
                  stroke="currentColor"
                ></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#:S1:)"></rect>
          </svg>
        </div>
        <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12 flex flex-col items-center py-16 text-center sm:py-20 lg:py-32">
          <p className="rounded-full px-4 py-1 text-base font-medium tracking-tight text-slate-900 ring-1 ring-inset ring-slate-900">
            Loading...
          </p>
          <h1
            className={`mt-6 ${lexend.className} text-5xl font-extrabold text-slate-900 sm:text-6xl`}
          >
            Please Wait
          </h1>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            We are organizing the data for you as fast as we can!
          </p>
          <Link
            className="mt-6 text-base font-medium text-blue-600 hover:text-blue-800"
            href="/"
          ></Link>
        </div>
      </div>
    </div>
  );
}
