import React from "react";
import { Formik } from "formik";
import { Button, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";

import {
  Container,
  Form,
  Picker,
  PickerItem,
  DateTimePicker,
  FormContent,
} from "../../../components/Common";

const typeItems: PickerItem[] = [
  {
    label: "Técnica",
    value: "Técnica",
  },
  {
    label: "Comércio",
    value: "Comércio",
  },
  {
    label: "SAC",
    value: "SAC",
  },
];

const activityItems: PickerItem[] = [
  {
    label: "Aves",
    value: "Aves",
  },
  {
    label: "Suíno",
    value: "Suíno",
  },
  {
    label: "Leite",
    value: "Leite",
  },
  {
    label: "Corte",
    value: "Corte",
  },
];

interface TaskValues {
  date: Date;
  client: string;
  type: string;
  description: string;
  activity: string;
}

const taskInitialValues = {
  date: new Date(),
  client: "",
  type: typeItems[0].value,
  description: "",
  activity: activityItems[0].value,
};

const taskSchema = yup.object().shape({
  date: yup.date().required("* Campo obrigatório"),
  // client: yup.string().required("* Campo obrigatório"),
  type: yup.string().required("* Campo obrigatório"),
  description: yup.string(),
  activity: yup.string().required("* Campo obrigatório"),
});

const TaskForm: React.FC = () => {
  const navigation = useNavigation();

  const handleFormSubmit = (values: TaskValues) => {
    // console.log(values);
  };

  return (
    <Container
      header={{
        title: "Nova Atividade",
        rightComponent: {
          icon: "close",
          onPress: () => navigation.goBack(),
        },
      }}
    >
      <Form>
        <Formik
          initialValues={taskInitialValues}
          onSubmit={(values) => handleFormSubmit(values)}
          validationSchema={taskSchema}
        >
          {({
            handleChange,
            handleSubmit,
            setFieldValue,
            values,
            touched,
            errors,
          }) => (
            <>
              <FormContent>
                <DateTimePicker
                  title="Data da Visita"
                  value={values.date}
                  onDateChange={(date) => setFieldValue("date", date)}
                />
                <Picker
                  title="Tipo de Visita"
                  items={typeItems}
                  selectedValue={values.type}
                  onValueChange={(itemValue) =>
                    setFieldValue("type", itemValue)
                  }
                  errorMessage={touched.type && errors.type ? errors.type : ""}
                />
                <Input
                  label="Descrição da Visita"
                  placeholder="Descrição"
                  value={values.description}
                  onChangeText={handleChange("description")}
                  errorMessage={
                    touched.description && errors.description
                      ? errors.description
                      : ""
                  }
                />
                <Picker
                  title="Atividade do Cliente"
                  items={activityItems}
                  selectedValue={values.activity}
                  onValueChange={(itemValue) =>
                    setFieldValue("activity", itemValue)
                  }
                  errorMessage={
                    touched.activity && errors.activity ? errors.activity : ""
                  }
                />
              </FormContent>
              <Button title="Criar" onPress={() => handleSubmit()} />
            </>
          )}
        </Formik>
      </Form>
    </Container>
  );
};

export default TaskForm;
