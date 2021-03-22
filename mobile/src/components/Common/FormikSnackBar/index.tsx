import { useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import { Snackbar } from "react-native-paper";

// import { Container } from './styles';

interface FormikSnackBarProps {
  message: string;
}

export const FormikSnackBar: React.FC<FormikSnackBarProps> = ({ message }) => {
  const [visible, setVisible] = useState(false);

  const { isSubmitting, isValid } = useFormikContext();

  useEffect(() => {
    if (isSubmitting && !isValid) {
      setVisible(true);
    }
  }, [isSubmitting]);

  return (
    <Snackbar
      visible={visible}
      onDismiss={() => setVisible(false)}
      duration={5000}
      action={{
        label: "Ok",
        onPress: () => {
          setVisible(false);
        },
      }}
      wrapperStyle={{
        marginBottom: 50,
      }}
    >
      {message}
    </Snackbar>
  );
};
