import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatUSNumber = (input: string) => {
  const replacedNumber = input.replace(/\D/g, "");

  const formattedPhoneNumber = replacedNumber.replace(
    /(\d{3})(\d{3})(\d{4})/,
    "($1)-$2-$3"
  );
  return formattedPhoneNumber;
};

export const generateColumnSpan = (index: number) => {
  const normalizedIndex = index % 4;
  switch (normalizedIndex) {
    case 0:
    case 2:
    case 5:
    case 6:
      return "col-span-1";
    case 1:
    case 3:
    case 4:
    case 7:
      return "col-span-2";
    default:
      return "col-span-1";
  }
};
