import Image from "next/image";
import Card from "../common/Card";
import List from "../common/List";
import Title from "../common/Title";

const dailyForecastContents = [
  {
    id: crypto.randomUUID(),
    day: "Tue",
    image: "/icon-rain.webp",
    minTemperature: "20°",
    maxTemperature: "14°",
  },
  {
    id: crypto.randomUUID(),
    day: "Tue",
    image: "/icon-rain.webp",
    minTemperature: "20°",
    maxTemperature: "14°",
  },
  {
    id: crypto.randomUUID(),
    day: "Tue",
    image: "/icon-rain.webp",
    minTemperature: "20°",
    maxTemperature: "14°",
  },
  {
    id: crypto.randomUUID(),
    day: "Tue",
    image: "/icon-rain.webp",
    minTemperature: "20°",
    maxTemperature: "14°",
  },
  {
    id: crypto.randomUUID(),
    day: "Tue",
    image: "/icon-rain.webp",
    minTemperature: "20°",
    maxTemperature: "14°",
  },
  {
    id: crypto.randomUUID(),
    day: "Tue",
    image: "/icon-rain.webp",
    minTemperature: "20°",
    maxTemperature: "14°",
  },
  {
    id: crypto.randomUUID(),
    day: "Tue",
    image: "/icon-rain.webp",
    minTemperature: "20°",
    maxTemperature: "14°",
  },
];

const DailyForecast = () => {
  return (
    <section className="flex flex-col gap-5">
      <Title level="h2">Daily forecast</Title>

      <List
        items={dailyForecastContents}
        className="flex flex-wrap gap-4 items-center justify-center"
        renderItem={({ id, day, image, minTemperature, maxTemperature }) => {
          return (
            <Card
              key={id}
              className="w-full max-w-[6.5rem] flex flex-col items-center gap-4 py-4 px-2.5 bg-card border border-border rounded-12"
            >
              <Title level="h3" className="text-preset-6 text-center">
                {day}
              </Title>

              <div>
                <Image
                  width={60}
                  height={60}
                  src={image}
                  alt="current weather state image"
                />
              </div>

              <div className="w-full flex items-center justify-between">
                <p className="text-preset-7">{minTemperature}</p>
                <p className="text-preset-7 text-muted-foreground">
                  {maxTemperature}
                </p>
              </div>
            </Card>
          );
        }}
      />
    </section>
  );
};

export default DailyForecast;
