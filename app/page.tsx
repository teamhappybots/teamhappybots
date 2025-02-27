import Image from "next/image";
import Link from "next/link";
import SlapHappyLogo from "@/public/slap-happy.png";
import SlapHappy from "@/public/slap-happy.jpg";

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center gap-4 sm:flex-row flex-col">
      <div>
        <Image
          src={SlapHappyLogo}
          alt="Slap Happy"
          className="h-40 w-40 border rounded-xl"
        />
      </div>
      <div>
        <Link href="https://www.youtube.com/watch?v=m5PwVNDSY60&list=PLnTcKOMw1qGphoZjXdNacrd3ZYU95FYKe">
          <Image
            src={SlapHappy}
            alt="Slap Happy"
            className="w-56 rounded-xl border h-40 hover:border-teal-700"
          />
        </Link>
      </div>
    </div>
  );
}
