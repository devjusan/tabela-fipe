import React from 'react';
import { SelectProps, Select as Container } from '@mui/material';

export default function Input({ children, ...props }: SelectProps) {
  return (
    <Container
      {...props}
      classes={{
        root: 'MuitSelect'
      }}
    >
      {children}
    </Container>
  );
}
