import { siteConfig } from "@/config/site"
import Link from "next/link"


export function SiteFooter() {
  return (
    <section className="relative mx-auto w-full bg-black text-sm text-white md:px-6">
      <footer className="block py-4">
        {/* 介绍页 */}
        <div className="mx-10 my-5 flex flex-wrap justify-between">
          <div className="about flex flex-col space-y-5">
            <div>
              <Link href={"/"} className="text-xl font-bold hover:underline" >{siteConfig.name}</Link>
            </div>
            <div>
              <span className="hidden md:block">{siteConfig.description}</span>
            </div>
            <div>
              <Link href={"/tts"} className="hover:underline" >Shine TTS</Link>
            </div>
          </div>

          <div className="friends flex flex-col  space-y-5">
            <div>
              <span className="text-xl font-bold">LINKS</span>
            </div>
            <div>
              <a className="hover:underline" href="https://aiwith.me" title="AI WITH.ME | Discover thousands of AI Tools">AI WITH.ME</a>
            </div>
          </div>

          <div className="friends flex flex-col  space-y-5">
            <div>
              <a className="hover:underline" href="mailto:hi@317318.xyz?subject=Hello%20%F0%9F%91%8B&body=Hi%20there%20%F0%9F%98%83,%0D%0A%0D%0AI'm%20interested%20in%20your%20services.%0D%0A%0D%0ABest%20regards%2C%0D%0A%5BYour%20Name%5D">
                📧 hi@317318.xyz
              </a>
            </div>
          </div>
        </div>
        {/* border */}
        <div className="mx-auto mt-10">
          <hr className="border-b-1 mb-4 border-gray-200" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            {/* <div className="w-full px-4 md:w-4/12"> */}
            <div className="w-full px-4 ">
              <div className="mb-2 text-center md:mb-0 md:text-center">
                <a href="https://www.317318.xyz" target="_blank" className="py-1 text-center text-sm font-semibold text-white/60 md:text-left" rel="noreferrer">
                  Copyright © 2024 Shine Crafts All rights reserved.
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
