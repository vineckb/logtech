import { Controller } from "react-hook-form";
import { SingleDatepicker } from "chakra-dayzed-datepicker";

export interface DateInputProps {
  control: any;
  name: string;
}

export function DateInput({ control, name }: DateInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ...field } }) => (
        <SingleDatepicker
          {...field}
          configs={{ dateFormat: "dd/MM/yyyy" }}
          date={value}
          onDateChange={onChange}
          name="date-input"
        />
      )}
    />
  );
}
