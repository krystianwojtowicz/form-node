import { ChangeEvent, FocusEvent } from "react";

export interface FormData {
    customers: string;
    requirements: string;
    typeOfCustomers: string;
    positionsOfProspects: string;
  }

 export interface InputProps {
    id: string;
    name: string;
    type: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: FocusEvent<HTMLInputElement>) => void;
    value: string;
    error: string;
    label: string;
  }