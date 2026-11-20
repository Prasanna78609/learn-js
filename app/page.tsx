"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
  const route = useRouter();
  const router = () => {
    route.push("/dashboard")
  }
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <nav>
        <button onClick={router} className=" h-10 w-24 rounded-xl bg-blue-500 cursor-pointer">Dashboard</button>
      </nav>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <h1>Hi this is Main Page</h1>

      </main>
    </div>
  );
}
