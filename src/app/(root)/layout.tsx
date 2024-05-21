import MobileNav from "@/components/MobileNav";
import Sidebar  from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName: "Pankaj", lastName: "Bhayare"}

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn} />
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="/icons/logo.svg" alt="logo" width={30} height={30} className="size-[24px] max-xl:size-14" />
            <div>
              {/* @ts-ignore */}
              <MobileNav user={loggedIn} />
            </div>
          </div>
        {children}
        </div>
    </main>
  );
}
