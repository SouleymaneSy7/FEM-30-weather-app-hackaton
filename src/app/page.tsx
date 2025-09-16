import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
export default function Home() {
  return (
    <div className="m-5 flex flex-row  items-center gap-2 md:flex-row">
      <Input placeholder="Search for a city" icon={Search} />
      <Button>Button</Button>
    </div>
  );
}
