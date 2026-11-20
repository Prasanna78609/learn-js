"use client"
import { useRouter } from "next/navigation";
export default function Home() {
    const route = useRouter();
    const router = () => {
        route.push("/")
    }
    return (
        <>
            <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">

                <nav className="w-full flex justify-start ml-2">
                    <button onClick={router} className="bg-blue-500 rounded-xl h-10 w-24 mt-2 cursor-pointer">Go back</button>
                </nav>

                <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

                    <h1>Hi this is Dashboard Page</h1>

                </main>
            </div>
        </>
    );
}
