import Link from "next/link";
import Image from "next/image";

import UnitsParameters from "./UnitsParameters";
import { Button } from "../ui/button";
import { LocateIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="container pt-4 md:pt-6 lg:pt-12 flex items-center justify-between gap-3">
      <Link href={"/"}>
        <Image
          priority
          width={197}
          height={40}
          src={"/logo.svg"}
          alt="weather app logo"
          className="w-full h-full object-cover aspect-auto"
        />
      </Link>

      <div className="flex items-center gap-3">
        <Button size={"icon"} variant={"secondary"}>
          <LocateIcon className="text-fs-preset-5 text-neutral-0" />
        </Button>

        <UnitsParameters />
      </div>
    </nav>
  );
};

export default Navbar;
