import { useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import { Input } from "react-native-elements";

import api from "../../../../services/api";

import {
  Container,
  Form,
  FormContent,
  Picker,
  PickerItem,
  RowView,
} from "../../../../components/Common";
import MaskedInput from "../../../../components/MaskedInput";

import { CityAPIResponse, states } from "../../../../types/address";
import { ClientValues } from "../types";

const stateOptions: PickerItem[] = states.map((state) => ({
  label: state,
  value: state,
}));

const ClientFormAddress: React.FC = () => {
  const [cityOptions, setCityOptions] = useState<PickerItem[]>([]);

  const {
    values,
    setFieldValue,
    handleChange,
    touched,
    errors,
  } = useFormikContext<ClientValues>();

  const getCityOptions = async (uf: string) => {
    const { data } = await api.get<CityAPIResponse[]>("/cidades", {
      params: { uf: uf },
    });

    const cities: PickerItem[] = [];

    data.forEach((city) => {
      if (city.Cidade) {
        cities.push({
          label: city.Cidade,
          value: city.Cidade,
        });
      }
    });

    setCityOptions(cities);

    return cities[0].value ?? "";
  };

  useEffect(() => {
    getCityOptions(values.state);
  }, []);

  return (
    <Container scroll>
      <Form>
        <FormContent title="Endereço">
          <RowView>
            <Picker
              title="Estado"
              selectedValue={values.state}
              onValueChange={async (itemValue) => {
                const city = await getCityOptions(itemValue);
                setFieldValue("state", itemValue);
                setFieldValue("city", city);
              }}
              items={stateOptions}
              errorMessage={touched.state && errors.state ? errors.state : ""}
            />
            <Picker
              title="Cidade"
              selectedValue={values.city}
              onValueChange={(itemValue) => setFieldValue("city", itemValue)}
              items={cityOptions}
              errorMessage={touched.city && errors.city ? errors.city : ""}
            />
          </RowView>

          <Input
            label="Endereço"
            placeholder="Endereço"
            value={values.address}
            onChangeText={handleChange("address")}
            errorMessage={
              touched.address && errors.address ? errors.address : ""
            }
          />
          <RowView>
            <Input
              label="Região"
              placeholder="Nome da Região"
              value={values.region}
              onChangeText={handleChange("region")}
              errorMessage={
                touched.region && errors.region ? errors.region : ""
              }
            />
            <Input
              label="Complemento"
              placeholder="Complemento"
              value={values.address2}
              onChangeText={handleChange("address2")}
              errorMessage={
                touched.address2 && errors.address2 ? errors.address2 : ""
              }
            />
          </RowView>

          <RowView>
            <Input
              label="Bairro"
              placeholder="Bairro"
              value={values.district}
              onChangeText={handleChange("district")}
              errorMessage={
                touched.district && errors.district ? errors.district : ""
              }
            />
            <MaskedInput
              label="CEP"
              placeholder="CEP"
              value={values.zipcode}
              onChangeText={handleChange("zipcode")}
              mask="#####-###"
              errorMessage={
                touched.zipcode && errors.zipcode ? errors.zipcode : ""
              }
            />
          </RowView>
        </FormContent>
      </Form>
    </Container>
  );
};

export default ClientFormAddress;
