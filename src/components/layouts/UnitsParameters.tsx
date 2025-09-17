import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Settings } from "lucide-react";

const UnitsParameters = () => {
  return (
    <Select>
      <SelectTrigger className="min-w-[90px] min-h-[43px] border-none text-neutral-0 lg:min-w-[120px]">
        <Settings className="text-neutral-0" />
        <SelectValue
          placeholder="Units"
          className="text-fs-preset-8 font-medium text-neutral-0"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="imperials">Switch to Imperial/Metric</SelectItem>

        <SelectGroup>
          <SelectLabel>Temperature</SelectLabel>
          <SelectItem value="celsius">Celsius (°C)</SelectItem>
          <SelectItem value="fahrenheit">Fahrenheit (°F)</SelectItem>
        </SelectGroup>

        <SelectGroup>
          <SelectLabel>Wind Speed</SelectLabel>
          <SelectItem value="km">km/h</SelectItem>
          <SelectItem value="mph">mph</SelectItem>
        </SelectGroup>

        <SelectGroup>
          <SelectLabel>Precipitation</SelectLabel>
          <SelectItem value="mm">Millimeters (mm)</SelectItem>
          <SelectItem value="in">Inches (in)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default UnitsParameters;
