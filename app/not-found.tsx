import { NextPage } from "next";
import { Dog } from "lucide-react";
import Link from "next/link";
import { Button } from "@/app/shared/components/ui";

const NotFound: NextPage = () => {
  return (
    <div className="w-full h-dvh flex flex-col items-center justify-center">
      <Dog size={128} />

      <p>Page not found!</p>

      <Button variant="link" size="sm" className="mt-4" asChild>
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
