export default function Home() {
  return (
    <main>
      <article className="container mx-auto max-w-2xl mt-20 px-4">
        <div className="markdown-body">
          <div className="my-8">
            <span className="text-xl font-medium">Hi there,</span>
            <h1 className="text-4xl mt-1 font-bold tracking-wide">
              I&apos;m Kiran Dash
            </h1>
          </div>
          <p className="my-8">
            Currently based in 🇸🇬 Singapore, I&apos;m a Full Stack Engineer
            specializing in high-performance web applications with Next.js,
            React, and TypeScript. I share my knowledge through tutorials and
            create npm packages to solve real-world problems.
          </p>
          <p className="my-4 text-gray-700 dark:text-gray-300">
            Find my tutorials helpful? Consider becoming a sponsor to support my
            mission of creating more educational content! 🎓
          </p>
          <iframe
            src="https://github.com/sponsors/kirandash/button"
            title="Become a sponsor"
            height="32"
            width="114"
            style={{ border: 0, borderRadius: "6px", marginBottom: "1rem" }}
          ></iframe>
          <div className="mt-8 sm:mt-14 flex flex-wrap gap-2 sm:gap-4">
            <a
              href="https://bgwebagency.in/"
              target="_blank"
              className="border-black dark:border-white border-2 rounded-lg px-4 flex items-center py-2 gap-1 hover:opacity-50 w-full sm:w-auto justify-center"
              title="Link to my blog posts"
              role="button"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="1.2em"
                height="1.2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path>
                <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path>
                <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path>
                <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path>
                <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path>
                <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path>
                <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path>
              </svg>
              Read my blog
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/kirandash"
              className="border-black dark:border-white border-2 rounded-lg px-4 flex items-center py-2 gap-1 hover:opacity-50 flex-1 sm:flex-none justify-center"
              title="Link to my GitHub profile"
              role="button"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                width="1.2em"
                height="1.2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
              </svg>
              GitHub
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://www.youtube.com/@bgwebagency/"
              className="border-black dark:border-white border-2 rounded-lg px-4 flex items-center py-2 gap-1 hover:opacity-50 flex-1 sm:flex-none justify-center"
              title="Link to my Twitter profile"
              role="button"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                width="1.2em"
                height="1.2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path>
              </svg>
              YouTube
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/kiran-dash/"
              className="border-black dark:border-white border-2 rounded-lg px-4 flex items-center py-2 gap-1 hover:opacity-50 w-full sm:w-auto justify-center"
              title="Link to my LinkedIn profile"
              role="button"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                width="1.2em"
                height="1.2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
