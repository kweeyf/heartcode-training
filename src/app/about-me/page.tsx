// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import shin from "@/app/asset/shin.jpg";
// import shin2 from "@/app/asset/shin2.png";
// import shin3 from "@/app/asset/shin3.jpg";
// import shin4 from "@/app/asset/shin4.png";
// import Image from "next/image";

// export default function AboutMe() {
//   return (
//     <div>
//       <Card>
//         <CardHeader>
//           <CardTitle>Hello I am Keane</CardTitle>
//           <CardDescription className="text-wrap">I’m passionate about computing and love exploring new tech,
//             especially when it comes to solving problems and learning about networking.
//             Outside of that, I enjoy spending time in the kitchen,
//             experimenting with new recipes especially with leftovers</CardDescription>
//         </CardHeader>

//         <div className="flex justify-center">
//             <Image src={shin} alt="shin" width={512} height={512} className="m-6" />
//             <Image src={shin2} alt="shin" width={512} height={400} className="m-6" />
//             <Image src={shin4} alt="shin" width={512} height={400} className="m-6" />

//         </div>

//         <CardContent>
//           <div className="flex flex-row gap-2">
//             <p className="font-bold">Name:</p>
//             Keane
//           </div>
//           <div className="flex flex-row gap-2">
//             <p className="font-bold">Major:</p>Software Enginnering
//           </div>
//           <div className="flex flex-row gap-2">
//             <p className="font-bold">Hobbies:</p>I like to get cooked
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import shin from "@/app/asset/shin.jpg";
import shin2 from "@/app/asset/shin2.png";
import shin3 from "@/app/asset/shin3.jpg";
import shin4 from "@/app/asset/shin4.png";
import shin5 from "@/app/asset/Shinchan.webp"
import emailimage from "@/app/asset/emailimage.png";
import pattern from "@/app/asset/pattern2.jpg";
import olive from "@/app/asset/Olive.jpg"
import taro from "@/app/asset/Taro.jpg"
import hypno from "@/app/asset/hynosis2.gif"
import Image from "next/image";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { notIlike } from "drizzle-orm";

const features = [
  {
    name: "Keane",
    description:
      "I’m passionate about computing and love exploring new tech, especially when it comes to solving problems. Outside of that, I enjoy spending time in the kitchen,experimenting with new recipes",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        src={shin}
        alt="Keane"
        fill
        className="absolute -right-20 -top-20 opacity-80"
      />
    ),
    className:
      "lg:row-span-2 lg:col-span-1 bg-pastel-yellow rounded-xl shadow-lg",
  },
  {
    name: "",
    description: "",
    href: "/",
    cta: "Learn more",
    background: (
        <Image
          src={shin5}
          alt="Keane email"
          fill
          className="absolute -right-20 -top-20 opacity-80"
        />
      ),
    className:
      "lg:col-span-2 lg:row-span-2 bg-pastel-green rounded-xl shadow-lg",
  },
  {
    name: "",
    description: "",
    href: "/",
    cta: "Learn more",
    background: (
        <Image
          src={hypno}
          alt="Keane email"
          fill
          className="absolute -right-20 -top-20 opacity-80"
        />
      ),
    className:
      "lg:col-span-2 lg:row-span-1 bg-pastel-pink rounded-xl shadow-lg",
  },
  {
    name: "Email",
    description: "Contact me via email @keane.wee.2024@computing.smu.edu.sg",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        src={emailimage}
        alt="Keane email"
        fill
        className="absolute -right-20 -top-20 opacity-80"
      />
    ),
    className:
      "lg:col-span-1 lg:row-span-2 bg-pastel-orange rounded-xl shadow-lg",
  },
  {
    name: "Taro",
    description: "",
    href: "/",
    cta: "Learn more",
    background: (
        <Image
          src={taro}
          alt="Taro"
          fill
          className="absolute -right-20 -top-20 opacity-80"
        />
      ),
      className:
        "lg:col-span-1 lg:row-span-1 bg-pastel-orange rounded-xl shadow-lg",
  },
  {
    name: "Olive",
    description: "",
    href: "/",
    cta: "Learn more",
    background: (
        <Image
          src={olive}
          alt="olive"
          fill
          className="absolute -right-20 -top-20 opacity-80"
        />
      ),
      className:
        "lg:col-span-1 lg:row-span-1 bg-pastel-orange rounded-xl shadow-lg",
  },
];

export default function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-cols-3 lg:grid-rows-3 gap-4 p-6">
      {features.map((feature,idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
