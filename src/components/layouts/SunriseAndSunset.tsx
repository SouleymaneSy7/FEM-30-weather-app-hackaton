import { SunriseIcon, SunsetIcon } from "lucide-react";
import Card from "../common/Card";
import Title from "../common/Title";

const SunriseAndSunset = () => {
  return (
    <Card className="bg-card rounded-20 border border-border py-5 px-4">
      <Title level="h2" className="text-preset-5 mb-4">
        Sunrise & Sunset
      </Title>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <Title level="h3" className="text-preset-8 text-muted-foreground">
            Sunrise
          </Title>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-neutral-700 p-2 rounded-full border-2 border-border grid place-items-center">
                <SunriseIcon />
              </div>

              <p className="text-preset-5 uppercase">6:35 AM</p>
            </div>

            <p className="text-preset-8 text-muted-foreground">-1m 46s</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Title level="h3" className="text-preset-8 text-muted-foreground">
            Sunset{" "}
          </Title>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-neutral-700 p-2 rounded-full border-2 border-border grid place-items-center">
                <SunsetIcon />
              </div>

              <p className="text-preset-5 uppercase">5:42 PM</p>
            </div>

            <p className="text-preset-8 text-muted-foreground">+3m 17s</p>
          </div>
        </div>
      </div>

      <p className="mt-4 text-preset-8">
        Sunrise will occur at 6:35 AM (1m 46s earlier than yesterday), and
        sunset at 5:42 PM (3m 17s later than yesterday).{" "}
      </p>
    </Card>
  );
};

export default SunriseAndSunset;
