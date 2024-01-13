import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image';
import { Separator } from "@/components/ui/separator"
import NavItems from "./NavItems";



const MobileNav = () => {
  return (
    <nav className="md:hidden">
        <Sheet>
            <SheetTrigger className="align-middle">
                <Image
                    src="/assets/icons/menu.svg"
                    alt="menu"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                />
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
                <div className="flex gap-3">
                    <Image
                        src="/assets/images/logo.png"
                        alt="logo"
                        width={30}
                        height={30}
                    />
                    <p className="font-bold text-lg">Fitness Pro</p>
                </div>
                <Separator className="border border-gray-50" />
                <NavItems />
            </SheetContent>
        </Sheet>


    </nav>
  )
}

export default MobileNav