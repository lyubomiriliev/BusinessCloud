import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import FileUploader from "./FileUploader";
import Search from "./Search";

const Header = () => {
  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploader />
        <form>
          <Button type="submit" className="sign-out-button" />
          <Image
            src="/assets/icons/logout.svg"
            alt="logo"
            width={24}
            height={24}
            className="w-6"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
