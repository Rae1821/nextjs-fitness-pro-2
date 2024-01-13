
import Link from 'next/link';
import Image from 'next/image';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from '../ui/button';
import MobileNav from './MobileNav';
import NavItems from './NavItems';


const Header = () => {
  return (
    <header className="w-full border-b">
        <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:p-0 w-full flex items-center justify-between">
            <Link href="/" className="flex gap-3 items-center">
                    <Image
                        src="/assets/images/logo.png"
                        alt="logo"
                        width={30}
                        height={30}
                    />
                <p className="font-bold text-lg">Fitness Pro</p>
            </Link>

            <SignedIn>
                <nav className="md:flex-between hidden w-full max-w-xs">
                    <NavItems />
                </nav>
            </SignedIn>

            <div className="flex w-32 justify-end gap-3">
                <SignedIn>
                    <UserButton afterSignOutUrl="/"/>
                    <MobileNav />
                </SignedIn>
                <SignedOut>
                    <Button asChild className="rounded-full" size="lg">
                        <Link href="/sign-in">
                            Login
                        </Link>
                    </Button>
                </SignedOut>
            </div>
        </div>
    </header>
  )
}

export default Header
