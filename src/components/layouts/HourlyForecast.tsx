import Image from "next/image";
import Card from "../common/Card";
import List from "../common/List";
import Title from "../common/Title";
import { ScrollArea } from "../ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const dayOfWeeks = [
  { id: crypto.randomUUID(), day: "Monday" },
  { id: crypto.randomUUID(), day: "Tuesday" },
  { id: crypto.randomUUID(), day: "Wednesday" },
  { id: crypto.randomUUID(), day: "Thursday" },
  { id: crypto.randomUUID(), day: "Friday" },
  { id: crypto.randomUUID(), day: "Saturday" },
  { id: crypto.randomUUID(), day: "Sunday" },
];

const hourlyWeather = [
  {
    id: crypto.randomUUID(),
    image: "/icon-overcast.webp",
    time: "3PM",
    value: 30,
  },
  {
    id: crypto.randomUUID(),
    image: "/icon-overcast.webp",
    time: "3PM",
    value: 30,
  },
  {
    id: crypto.randomUUID(),
    image: "/icon-overcast.webp",
    time: "3PM",
    value: 30,
  },
  {
    id: crypto.randomUUID(),
    image: "/icon-overcast.webp",
    time: "3PM",
    value: 30,
  },
  {
    id: crypto.randomUUID(),
    image: "/icon-overcast.webp",
    time: "3PM",
    value: 30,
  },
  {
    id: crypto.randomUUID(),
    image: "/icon-overcast.webp",
    time: "3PM",
    value: 30,
  },
];

const HourlyForecast = () => {
  return (
    <section className="bg-card rounded-20 px-4 py-5">
      <div className="flex justify-between items-center mb-4">
        <Title level="h2" className="text-preset-5">
          Hourly forecast
        </Title>

        <Select>
          <SelectTrigger>
            <SelectValue
              placeholder="Tuesday"
              className="text-fs-preset-8 font-medium text-neutral-0"
            />
          </SelectTrigger>
          <SelectContent>
            <List
              as={"div"}
              items={dayOfWeeks}
              renderItem={({ id, day }) => {
                return (
                  <SelectItem key={id} value={day}>
                    {day}
                  </SelectItem>
                );
              }}
            />
          </SelectContent>
        </Select>
      </div>

      <ScrollArea className="w-full h-[364px] gap-2">
        <List
          as={"div"}
          items={hourlyWeather}
          className="flex flex-col gap-4"
          renderItem={({ id, image, time, value }) => {
            return (
              <Card
                key={id}
                className="w-full h-15 flex items-center justify-between pl-3 pr-4 py-2.5 bg-neutral-700 border border-border rounded-8"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={image}
                    width={40}
                    height={40}
                    alt="weather image"
                  />
                  <p className="text-preset-5 uppercase">{time}</p>
                </div>

                <p className="text-preset-7">{value}°</p>
              </Card>
            );
          }}
        />
      </ScrollArea>
    </section>
  );
};

export default HourlyForecast;
