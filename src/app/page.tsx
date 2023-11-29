'use client';
import { Box, Button, Container, Typography } from '@mui/material';
import { useColorMode } from './contexts/color-mode';

export default function Home() {
  const { toggleColorMode } = useColorMode();

  const onClick = () => {
    toggleColorMode();
  };

  return (
    <Container typeof='primary'>
      <Box>
        <Typography variant='h1'>Hello World</Typography>
        <Button variant='contained' onClick={onClick}>
          Click me
        </Button>
      </Box>
    </Container>
  );
}
