import { IconButton, useColorMode } from '@chakra-ui/react';
import { BiSun, BiMoon } from 'react-icons/bi';

const SwitchTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="theme-icon"
      icon={ colorMode === 'light' ? <BiSun size="20px" /> : <BiMoon size="20px" /> }
      onClick={ toggleColorMode }
      variant="solid"
    />
  );
};

export default SwitchTheme;
