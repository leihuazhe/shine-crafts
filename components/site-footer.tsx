
export function SiteFooter() {
  return (
    <section className="relative mx-auto w-full bg-black text-sm text-white md:px-6">
      <footer className="block py-4">

        {/*  */}
        {/*  */}
        <div className="mx-auto mt-20">
          <hr className="border-b-1 mb-4 border-gray-200" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 md:w-4/12">
              <div className="mb-2 text-center md:mb-0 md:text-left"><a href="https://www.creative-tim.com/?ref=npr-footeradmin" target="_blank" className="text-blueGray-500 py-1 text-center text-sm font-semibold md:text-left" rel="noreferrer">Copyright © 2021 Creative Tim</a></div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
