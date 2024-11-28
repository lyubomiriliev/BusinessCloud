import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen relative overflow-y-clip">
      <section className="hidden w-1/2 items-center justify-center bg-white p-10 lg:flex xl:w-[30%]">
        <Image
          width={800}
          height={800}
          alt="/"
          src="/sideBar.png"
          className="w-full absolute -z-10 h-screen"
        />
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-14">
          <Image
            src="/businessCloudLogo.svg"
            alt="logo"
            width={224}
            height={82}
            className="h-auto z-10"
          />

          <div className="space-y-5 text-white z-10">
            <h1 className="h1">Manage your files the best way</h1>
            <p className="body-1">
              This is a place where you can store all your documents.
            </p>
          </div>
          <Image
            src="/laptopSVG.svg"
            alt="Files"
            width={642}
            height={642}
            className="w-full scale-150 -translate-x-5 translate-y-10 z-10"
          />
        </div>
      </section>
      <Image
        src="/sideBar.png"
        alt="Files"
        width={642}
        height={642}
        className="absolute left-0 -z-0"
      />

      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          <Image
            src="/assets/icons/logo-full-brand.svg"
            alt="logo"
            width={224}
            height={82}
            className="h-auto w-[200px] lg:w-[250px]"
          />
        </div>

        {children}
      </section>
    </div>
  );
};

export default Layout;
