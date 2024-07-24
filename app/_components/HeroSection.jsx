import { Button } from "../../components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../components/ui/hover-card";

export default function HeroSection() {
  return (
    <>
      <section className="py-8 bg-green-300">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="mx-auto text-center max-w-xl">
            <h1
              className="relative font-semibold max-w-max mx-auto pb-2 font-display text-3xl sm:text-4xl md:text-5xl text-gray-800  after:absolute
                        after:bottom-0 after:left-0 after:h-0.5 after:rounded-lg after:bg-gray-800  after:w-4"
            >
              Jay Sagar
            </h1>
          </div>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-14 gap-y-8 md:items-end">
            <div className="space-y-4 md:space-y-6 md:col-span-2 lg:col-span-1 w-full max-w-3xl lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="font-display font-semibold text-2xl md:text-3xl text-gray-900 ">
                Full Stack Web Developer based in India
              </h1>
              <div className="text-gray-700 text-sm space-y-3 mx-auto max-w-2xl lg:max-w-none">
                <p>
                I am passionate about building scalable web applications, excelling in both front-end and back-end development, making me a versatile asset in any team. With experience in creating responsive websites and real-time chat applications, I thrive on tackling complex problems.                </p>
                <p>
                Committed to continuous learning, I aim to contribute to impactful projects and drive innovation in the tech industry.                </p>
              </div>
              <div className="flex justify-center lg:justify-start">
                <HoverCard>
                  <HoverCardTrigger>
                    <Link
                      href="https://drive.google.com/file/d/1OgFZaaB6hEC_rqUDrXNIyzFhKVcSwnYw/view?usp=drive_link"
                      className="px-6 h-11"
                    >
                      <Button>Visit Resume</Button>
                    </Link>
                  </HoverCardTrigger>
                  <HoverCardContent>
                   Resume in drive is always up to date
                  </HoverCardContent>
                </HoverCard>

                <a href="/JaySagar15_02_2001.pdf" download="JaySagarResume">
                  <Button variant="outline">Download Resume</Button>
                </a>
              </div>
              <div className="flex justify-center">
                <div>
                  <h2 className="text-xl md:text-2xl font-display font-semiboldtext-gray-800 ">
                    +10
                  </h2>
                  <span className="text-gray-600">Projects</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="max-w-full relative">
                <span className="absolute inset-x-0 top-16 bottom-0 rounded-lg scale-[1.04]  bg-gradient-to-b from-gray-200 " />
                <span className="absolute inset-x-0 bottom-0 top-16 rounded-lg bg-gray-100 " />
                <Image
                  src="/profileimg.png"
                  width={1240}
                  height={0}
                  alt="Developer with laptop smile"
                  className="relative w-full h-auto max-h-96 lg:max-h-[26rem]"
                />
              </div>
            </div>
            <div className="space-y-3 lg:space-y-6">
              <div className="flex items-start gap-x-2 p-2 md:p-3 lg:p-4 bg-gray-50  border border-gray-100/80  rounded-lg">
                <span className="min-w-max text-gray-600 p-2 md:p-3 rounded-lg bg-gray-200  border border-gray-100/70  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold text-gray-800   text-lg">
                    Technical Skills
                  </span>
                  <p className="text-gray-700 ">
                  JavaScript, Java, Next.js, React.js, PostgreSQL, Drizzle, MongoDB, Mongoose, Node.js, Express.js, HTML, CSS
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-x-2 p-2 md:p-3 lg:p-4  bg-gray-50  border border-gray-100/80  rounded-lg">
                <span className="min-w-max text-gray-600 p-2 md:p-3 rounded-lg bg-gray-200  border border-gray-100/70 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
                    />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold text-gray-800 text-lg">
                    Problem Solving
                  </span>
                  <Button variant="outline" className="bg-blue-500 mx-4 size-min">LeetCode</Button>
                  <p className="text-gray-700 ">
                    Solved more than 130+ questions. Demonstrating my problem solving skills
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-x-2 p-2 md:p-3 lg:p-4  bg-gray-50  border border-gray-100/80  rounded-lg">
                <span className="min-w-max text-gray-600 p-2 md:p-3 rounded-lg bg-gray-200  border border-gray-100/70  ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-languages"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>
                </span>
                <div>
                  <span className="font-semibold text-gray-800  text-lg">
                    Languages
                  </span>
                  <p className="text-gray-700 ">
                    English : Proficient
                  </p>
                  <p className="text-gray-700 ">
                    Hindi : Native/Fluent
                  </p>
                  <p className="text-gray-700 ">
                    Japanese : Basic (N5 Level)
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
