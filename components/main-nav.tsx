"use client"
import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { Icons } from "./icons"
import { MobileSidebar } from "./mobile-sidebar"
import HomeIcon from "./ui/icon/home"
import Icon from "./ui/icon/icon"

interface MainNavProps {
  items?: NavItem[]
  navItems: any
}

export function MainNav({ items, navItems }: MainNavProps) {
  const [showMobileSidebar, setShowMobileSidebar] = React.useState<boolean>(false)
  return (
    <>
      <div className="flex gap-6 text-white md:gap-10">
        <div className="sm:hidden" onClick={() => setShowMobileSidebar(!showMobileSidebar)}>
          <Icons.menu />
        </div>
        {items?.length ? (
          <nav className="hidden gap-6 md:flex">
            {items?.map(
              (item, index) =>
                item.href && (
                  <>
                    <div className={cn(
                          "ml-2 flex items-center text-2xl	 text-white sm:text-lg",
                          item.disabled && "cursor-not-allowed opacity-80"
                        )}>
                      <Icon icon={item.icon} />
                      <Link
                        key={index}
                        href={item.href}
                        className="ml-2"
                        // className={cn(
                        //   "flex items-center text-2xl	 text-white sm:text-lg",
                        //   item.disabled && "cursor-not-allowed opacity-80"
                        // )}
                      >
                        {item.title}
                      </Link>
                    </div>
                  </>
                )
            )}
          </nav>
        ) : null}
      </div>
      {showMobileSidebar && <MobileSidebar navItems={navItems} setShowMobileSidebar={setShowMobileSidebar} />}
    </>
  )
}
