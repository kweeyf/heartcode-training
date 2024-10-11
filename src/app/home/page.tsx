import { FlipWords } from "@/components/ui/flip-words";
import NumberTicker from "@/components/ui/number-ticker"

export default function Home() {
  const words: string[] = ["Methamphetamine","LSD","Cocaine","Alcohol","Heroin","Cannabis","Ketamine","Khat","Fetanyl"]
  return (

    <div className="bg-cover">
      <div className="flex flex-col justify-center h-dvh">
        <div className="font-bold text-7xl text-center text-[#00bfff]">
        You wanna do
        <FlipWords words={words}/>
        </div>
        <p className="text-sm text-center">You at THE place</p>
        <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
      <NumberTicker value={5000000} />
    </p>
      </div>
    </div>
  );
}

// // bg-[url('/package2.webp')]

