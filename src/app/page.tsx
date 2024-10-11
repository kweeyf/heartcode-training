import { FlipWords } from "@/components/ui/flip-words";
import FlickeringGrid from "@/components/ui/flickering-grid";

export default function Home() {
  const words: string[] = [
    "Methamphetamine?",
    "LSD?",
    "Cocaine?",
    "Alcohol?",
    "Heroin?",
    "Cannabis?",
    "Ketamine?",
    "Khat?",
    "Fetanyl?",
  ];
  return (
    <div className="relative h-[500px] rounded-lg w-full bg-background overflow-hidden border min-h-screen">
      <div className="bg-cover">
      <div className="flex flex-col justify-center h-dvh">
        <div className="font-bold text-7xl text-center text-[#00bfff] relative z-20 bg-white bg-opacity-0">
        You Wanna Do 
        <FlipWords words={words}/>
        </div>
        <p className="text-sm text-center">You At THE Place</p>
      </div>
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full min-h-screen w-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        // height={800}
        // width={800}
      />
    </div>
    </div>
  );
}
