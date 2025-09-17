import Title from "../common/Title";

const Header = () => {
  return (
    <header className="flex flex-col gap-16 justify-center items-center mt-16">
      <Title level="h1" className="text-preset-2">
        How&apos;s the sky looking today?
      </Title>
    </header>
  );
};

export default Header;
