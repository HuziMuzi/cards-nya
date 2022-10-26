import React from 'react';
import SuperCheckbox from "../../n1-main/m1-ui/common/components/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../../n1-main/m1-ui/common/components/c2-SuperButton/SuperButton";
import SuperInputText from "../../n1-main/m1-ui/common/components/c1-SuperInputText/SuperInputText";

const Test = () => {
    return (
        <div>
            <SuperCheckbox>Check me</SuperCheckbox>
            <SuperInputText placeholder='Сколько см?'/>
            <SuperButton>Click</SuperButton>

        </div>
    );
};

export default Test;