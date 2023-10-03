import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <Link href="/">
        <div className="transition ease-in-out delay-150 bg-gradient-to-r from-[#fbe2e3] to-[#dbd7fb] hover:-translate-y-1 hover:scale-105 duration-300 p-8 my-6 rounded-md text-center">
          <Image
            src="/logo.png"
            width={40}
            height={40}
            className="mx-auto"
            alt={"logo"}
          />
          <h1 className="text-2xl text-black font-bold mt-4">Abir's Blog</h1>        
          <p className="text-gray">👋 Welcome to my tech blog. 💻☕</p>
        </div>
      </Link>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-black mt-12 py-6 text-center text-black">
        <h3>Designed by Abir Dey</h3>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body>
        <div className="bg-[#fbe2e3] fixed top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] fixed top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <div className="mx-auto  max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
