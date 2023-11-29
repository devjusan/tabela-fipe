import React from 'react';
import { SelectProps, Select as Container } from '@mui/material';

export default function Input({ ...props }: SelectProps) {
  return (
    <Container
      {...props}
      sx={{
        width: '340px',
        ...props.sx
      }}
    />
  );
}
