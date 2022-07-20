type Props = {
  description?: string;
  type?: any;
  options?: any;
  defaultValue?: any;
  control?:
    | "boolean"
    | "number"
    | "range"
    | "object"
    | "file"
    | "radio"
    | "inline-radio"
    | "check"
    | "inline-check"
    | "select"
    | "multi-select"
    | "text"
    | "color"
    | "date";
};

export const setPropDocumentation = ({
  description,
  type,
  options,
  defaultValue,
  control,
}: Props) => ({
  ...(description && { ["description"]: description }),
  table: {
    ...(type && { ["type"]: { summary: type } }),
    ...(defaultValue && { ["defaultValue"]: { summary: defaultValue } }),
  },
  ...(options && { ["options"]: options }),
  ...(control && { ["control"]: { type: control } }),
});
