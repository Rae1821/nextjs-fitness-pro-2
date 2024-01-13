import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-cover bg-[url('/assets/images/bg-4.jpg')]">
      <div className="min-h-screen w-full bg-slate-900 bg-opacity-70">
        <div className="z-0 flex flex-col items-center justify-center max-w-6xl p-4 text-center text-slate-100 min-h-screen">
          <h1 className="text-4xl">Welcome Back!</h1>
          <div className="my-8">
            Random Quote Here
          </div>
        </div>
      </div>

    </main>
  )
}
