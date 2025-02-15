"use client";

import { ShieldAlert } from "lucide-react";
import { Button } from "@/app/shared/components/ui";

export default function GlobalError(props: {
  error: unknown;
  reset: () => void;
}) {
  <html>
    <body>
      <div className="w-full h-dvh space-y-2 flex flex-col items-center justify-center">
        <ShieldAlert size={128} />

        <h2>Error occurred while loading the page.</h2>

        <Button size="sm" onClick={() => props.reset()}>
          Re Try
        </Button>
      </div>
    </body>
  </html>;
}
