import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
        {children}
        <div className="auth-asset">
          <div className="border-gray-800 rounded-l-3xl border-y-2 border-l-2 shadow-2xl">
            <Image src="/icons/fintech_cover_web.png" alt="auth image" width={500} height={700} className="h-[500px] rounded-l-3xl" />
          </div>
        </div>
    </main>
  );
}
