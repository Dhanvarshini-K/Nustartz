import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}


export const formatUSNumber = (input: string) => {
    const replacedNumber = input.replace(/\D/g, '');
  
    const formattedPhoneNumber = replacedNumber.replace(
      /(\d{3})(\d{3})(\d{4})/,
      '($1)-$2-$3',
    );
    return formattedPhoneNumber;
  }