import * as React from "react";
import { format, formatDuration, intervalToDuration } from "date-fns";

import Card from "../common/Card";
import Title from "../common/Title";

import { SunriseSunsetPropsType } from "@/types";
import { SunriseIcon, SunsetIcon } from "lucide-react";

const SunriseAndSunset: React.FC<SunriseSunsetPropsType> = ({
  sunrise,
  sunset,
  sunshine,
  daylight,
}) => {
  const formatTime = (dateString: string | undefined, fallback: string) => {
    if (!dateString) return fallback;

    try {
      return format(new Date(dateString), "hh:mm aa");
    } catch (error) {
      console.log(error);
      return fallback;
    }
  };

  const secondConvertToHour = (secondes: number | undefined) => {
    if (secondes === undefined || secondes === null) return "0 minutes";

    try {
      const duration = intervalToDuration({
        start: 0,
        end: secondes * 1000,
      });

      return formatDuration(duration, { format: ["hours", "minutes"] });
    } catch (error) {
      console.log(error);
      return "0 minutes";
    }
  };

  const formatedSunrise = formatTime(sunrise, "6:45 AM");
  const formatedSunset = formatTime(sunset, "5:42 PM");

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

          <div className="flex items-center gap-3">
            <div className="bg-neutral-700 p-2 rounded-full border-2 border-border grid place-items-center">
              <SunriseIcon />
            </div>

            <p className="text-preset-5 uppercase">{formatedSunrise}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Title level="h3" className="text-preset-8 text-muted-foreground">
            Sunset{" "}
          </Title>

          <div className="flex items-center gap-3">
            <div className="bg-neutral-700 p-2 rounded-full border-2 border-border grid place-items-center">
              <SunsetIcon />
            </div>

            <p className="text-preset-5 uppercase">{formatedSunset}</p>
          </div>
        </div>
      </div>

      <p className="mt-4 text-preset-8">
        {`The day begins with sunrise at ${formatedSunrise} and concludes with sunset at ${formatedSunset}, offering a full ${secondConvertToHour(daylight)} of daylight, of which ${secondConvertToHour(sunshine)} will be bright sunshine.`}{" "}
      </p>
    </Card>
  );
};

export default SunriseAndSunset;
