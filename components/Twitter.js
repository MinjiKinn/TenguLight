import Image from "next/image";
import Link from "next/link";

export default function Top() {
  return (
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://unpkg.com/tailwindcss@1.4.6/dist/tailwind.min.css" rel="stylesheet" />
        <div className="max-w-md mx-auto">
          {/*frist row*/}
          <div className="flex flex-no-wrap lg:flex-row flex-row-reverse justify-center pt-10">
            {/* left col */}
            <div className="w-2/5 sm:2/3 flex-none p-2">
              <div className="text-gray-700 lg:float-right float-left border-2 rounded border-green-200 bg-green-200 shadow-lg px-2">
                <blockquote className="twitter-tweet">
                  <p lang="en" dir="ltr">
                    Day 10 of the challenge
                    <a href="https://twitter.com/hashtag/100DaysOfCode?src=hash&ref_src=twsrc%5Etfw">#100DaysOfCode</a>
                    <br />Today, I've learned php composer, how I can use it. Also, I've made a simple working backend for twitter application. No backend framework, pure PHP &amp; Tailwindcss so far.
                    <br />[10/100]😺
                    <a href="https://twitter.com/hashtag/WomenWhoCode?src=hash&ref_src=twsrc%5Etfw">#WomenWhoCode</a>
                    <a href="https://twitter.com/hashtag/CodeNewbie?src=hash&ref_src=twsrc%5Etfw">#CodeNewbie</a>
                    <a href="https://t.co/aIIYO464gf">pic.twitter.com/aIIYO464gf</a>
                  </p>— Sonali Hirave (@ShonaDesign)
                  <a href="https://twitter.com/ShonaDesign/status/1260913733687279616?ref_src=twsrc%5Etfw">May 14, 2020</a>
                </blockquote>
              </div>
            </div>
            {/*line column*/}
            <div className="w-1/5 sm:1/3 flex-none float-left">
              <div className="bg-indigo-400 p-1 h-full w-1 mx-auto">
                <button className="h-24 w-24 mt-56 bg-indigo-400 hover:bg-indigo-600 text-white font-bold rounded-full -ml-12">Day #1</button>
              </div>
            </div>
            {/*right column*/}
            <div className="w-2/5 flex-none p-2 hidden lg:block" />
          </div>
          <div className="flex flex-no-wrap sm:flex-row-reverse1 justify-center">
            {/* left col */}
            <div className="w-2/5 sm:2/3 flex-none p-2 hidden lg:block" />
            {/*line column*/}
            <div className="w-1/5 sm:1/3 flex-none float-left">
              <div className="bg-indigo-400 p-1 h-full w-1 mx-auto">
                <button className="h-24 w-24 mt-56 bg-indigo-400 hover:bg-indigo-600 text-white font-bold rounded-full -ml-12">Day #2</button>
              </div>
            </div>
            {/*right column*/}
            <div className="w-2/5 flex-none p-2">
              <div className="text-gray-700 float-left border-2 rounded border-green-200 bg-green-200 shadow-lg px-2">
                <blockquote className="twitter-tweet">
                  <p lang="en" dir="ltr">
                    Day 10 of the challenge
                    <a href="https://twitter.com/hashtag/100DaysOfCode?src=hash&ref_src=twsrc%5Etfw">#100DaysOfCode</a>
                    <br />Today, I've learned php composer, how I can use it. Also, I've made a simple working backend for twitter application. No backend framework, pure PHP &amp; Tailwindcss so far.
                    <br />[10/100]😺
                    <a href="https://twitter.com/hashtag/WomenWhoCode?src=hash&ref_src=twsrc%5Etfw">#WomenWhoCode</a>
                    <a href="https://twitter.com/hashtag/CodeNewbie?src=hash&ref_src=twsrc%5Etfw">#CodeNewbie</a>
                    <a href="https://t.co/aIIYO464gf">pic.twitter.com/aIIYO464gf</a>
                  </p>— Sonali Hirave (@ShonaDesign)
                  <a href="https://twitter.com/ShonaDesign/status/1260913733687279616?ref_src=twsrc%5Etfw">May 14, 2020</a>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="flex flex-no-wrap lg:flex-row flex-row-reverse justify-center">
            {/* left col */}
            <div className="w-2/5 sm:2/3 flex-none p-2">
              <div className="text-gray-700 lg:float-right float-left border-2 rounded border-green-200 bg-green-200 shadow-lg px-2">
                <blockquote className="twitter-tweet">
                  <p lang="en" dir="ltr">
                    Day 10 of the challenge
                    <a href="https://twitter.com/hashtag/100DaysOfCode?src=hash&ref_src=twsrc%5Etfw">#100DaysOfCode</a>
                    <br />Today, I've learned php composer, how I can use it. Also, I've made a simple working backend for twitter application. No backend framework, pure PHP &amp; Tailwindcss so far.
                    <br />[10/100]😺
                    <a href="https://twitter.com/hashtag/WomenWhoCode?src=hash&ref_src=twsrc%5Etfw">#WomenWhoCode</a>
                    <a href="https://twitter.com/hashtag/CodeNewbie?src=hash&ref_src=twsrc%5Etfw">#CodeNewbie</a>
                    <a href="https://t.co/aIIYO464gf">pic.twitter.com/aIIYO464gf</a>
                  </p>— Sonali Hirave (@ShonaDesign)
                  <a href="https://twitter.com/ShonaDesign/status/1260913733687279616?ref_src=twsrc%5Etfw">May 14, 2020</a>
                </blockquote>
              </div>
            </div>
            {/*line column*/}
            <div className="w-1/5 sm:1/3 flex-none float-left">
              <div className="bg-indigo-400 p-1 h-full w-1 mx-auto">
                <button className="h-24 w-24 mt-56 bg-indigo-400 hover:bg-indigo-600 text-white font-bold rounded-full -ml-12">Day #3</button>
              </div>
            </div>
            {/*right column*/}
            <div className="w-2/5 flex-none p-2 hidden lg:block" />
          </div>
        </div>
      </div>
    );
  }
