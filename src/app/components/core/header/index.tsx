'use client';
import { Switch, Typography } from '@mui/material';
import { Container } from './index.styled';
import { useColorMode } from '@/src/app/contexts/color-mode';

function Header() {
  const { toggleColorMode } = useColorMode();

  return (
    <Container>
      <Switch onChange={toggleColorMode} />
      <Typography variant='caption'>Dark mode</Typography>
    </Container>
  );
}

export default Header;
