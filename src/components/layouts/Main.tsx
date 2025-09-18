import List from "../common/List";
import Card from "../common/Card";
import Title from "../common/Title";
import Container from "../common/Container";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

const weatherContents = [
  { id: crypto.randomUUID(), title: "Feels like", value: "64°" },
  { id: crypto.randomUUID(), title: "Humidity", value: "46%" },
  { id: crypto.randomUUID(), title: "Wind", value: "9 mph" },
  { id: crypto.randomUUID(), title: "Precipitation", value: "0 in" },
];

const Main = () => {
  return (
    <Container as={"main"} className="container flex flex-col gap-8 pb-20">
      <section>
        <List
          items={weatherContents}
          className="flex flex-wrap gap-4 items-center justify-center"
          renderItem={({ id, title, value }) => {
            return (
              <Card
                key={id}
                className="w-full max-w-[10.25rem] flex flex-col items-start gap-6 p-5 bg-card border border-border rounded-12"
              >
                <Title
                  level="h3"
                  className="text-preset-6 leading-small text-muted-foreground"
                >
                  {title}
                </Title>

                <p className="text-preset-3 text-foreground">{value}</p>
              </Card>
            );
          }}
        />
      </section>

      <DailyForecast />

      <HourlyForecast />
    </Container>
  );
};

export default Main;
