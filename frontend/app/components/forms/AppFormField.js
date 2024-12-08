import { useFormikContext } from 'formik';
import React from 'react'

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
function AppFormField({ name, width, ...otherProps }) {
    const {errors, setFieldValue, values, setFieldTouched, touched} = useFormikContext()
  return (
    <>
      <AppTextInput
        width={width}
        onBlur={() => setFieldTouched(name)}
              onChangeText={text =>setFieldValue(name, text)}
              value={values[name]}
              {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField
