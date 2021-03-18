import { PickerItem } from "../../../components/Common";

export interface ClientValues {
  clientType: string;
  name: string;
  fantasyName: string;
  cnpjCPF: string;
  ieRG: string;
  phone: string;
  phone2: string;
  cellphone: string;
  email: string;
  email2: string;
  region: string;
  city: string;
  state: string;
  zipcode: string;
  district: string;
  address: string;
  address2: string;
  priceList: string;
}

export const clientTypes: PickerItem[] = [
  {
    label: "Jurídica",
    value: "Jurídica",
  },
  {
    label: "Física",
    value: "Física",
  },
];
