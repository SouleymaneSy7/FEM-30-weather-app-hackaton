import Title from "../common/Title";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="container flex flex-col gap-16 justify-center items-center mt-16">
      <Title level="h1" className="text-preset-2">
        How&apos;s the sky looking today?
      </Title>

      <form className="w-full flex flex-col items-center justify-center gap-3 mb-8 lg:mb-12 md:flex-row md:gap-4">
        <Input
          icon={SearchIcon}
          containerWidth="md:max-w-[526px]"
          placeholder="Search for a place..."
        />
        <Button className="md:max-w-[114px]">Search</Button>
      </form>
    </header>
  );
};

export default Header;
