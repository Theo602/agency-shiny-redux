import { useState } from "react";
import { InputWrapper, StyledLabel, StyledInput } from './EmailImputStyle';
import { useSelector } from "react-redux";
import { selectTheme } from "../../utils/selectors";

function EmailInput(){

    const [inputValue, setInputValue] = useState('');
    const theme = useSelector(selectTheme);

    const updateInputValue = (inputValue) => {
        setInputValue(inputValue);
    }

    return(

        <InputWrapper theme={theme}>
            <StyledLabel theme={theme}>Adresse Email</StyledLabel>
            <StyledInput
                theme={theme}
                onChange={(e) => updateInputValue(e.target.value)}
                value = {inputValue}
            />
            {/* {inputValue} */}
        </InputWrapper>

    )
    
    
}

export default EmailInput;