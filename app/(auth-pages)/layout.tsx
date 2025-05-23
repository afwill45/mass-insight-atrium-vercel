// import RingOne from "@/components/svg/RingOne";
// import RingThree from "@/components/svg/RingThree";
// import RingTwo from "@/components/svg/RingTwo";

import { Suspense } from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <div className="w-full bg-gradient-to-tl from-[#006EB6] to-[#9BD3F8] h-screen">
        {/* <RingOne />
      <RingTwo />
      <RingThree /> */}
        {children}
      </div>
    </Suspense>
  );
}
