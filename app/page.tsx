import Image from "next/image";
import SlapHappy from "@/public/slap-happy.png";

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div>
        <Image src={SlapHappy} alt="Slap Happy" className="h-80 w-80 " />
      </div>
    </div>
  );
}
