import React from "react";

import { Switch, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector} from 'react-redux'
import { getTheme } from "../reducers/theme";
import { setTheme } from "../reducers/theme";

const ThemeSwitch = () => {
 const theme = useSelector(getTheme);
  const dispatch = useDispatch();

  const handleClick = () => {

    const newTheme = theme ==="dark-mode"? "light-mode":"dark-mode";

    dispatch(setTheme(newTheme));
  }

const title = React.useMemo(() => {return theme ==='dark-mode'?"Dark theme": "Light theme"}, [theme])


  return (
    <VStack>
      <p>{title}</p>
      <Switch colorScheme="teal" size="lg" onChange ={handleClick}/>
    </VStack>
  );
};

export default ThemeSwitch;
