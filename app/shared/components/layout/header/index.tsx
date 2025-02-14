import Image from "next/image";

import IMAGES from "@/app/public/images";
import { HeaderLayout } from "./header-layout";

export function Header() {
  return (
    <HeaderLayout
      leftSlot={
        <div className="flex items-center gap-4">
          <Image src={IMAGES.LOGO} alt="logo" width={40} height={30} priority />
          <h1 className="text-2xl font-bold">Kanban</h1>
        </div>
      }
    />
  );
}
