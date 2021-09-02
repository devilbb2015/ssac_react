import { useState, useRef } from "react";
import HookArray from "./HookArray";
import HookArrayCreate from "./HookArrayCreate";

function AppArray() {

    const [carArray, setCarArray] = useState([
        {
            id: 1,
            name: 'Fiat',
            color: 'white'
        },
        {
            id: 2,
            name: 'Kia',
            color: 'red'
        },
        {
            id: 3,
            name: 'Hyundai',
            color: 'gray'
        }
    ]);

    const [carInput, setCarInput] = useState({
        name:'',
        color:''
    });

    const {name, color} = carInput;

    const changeText = (e) => {
        const { property, value } = e.target;

        setCarInput({
            [property]: value
        });

    };

    // userRef() : 상태값 관리
    const nextId = useRef(4);

    return(
        // 배열 내용을 표시
        <>
            <HookArrayCreate name={name} color={color} changeText={changeText} />
            <HookArray carArray={carArray} />
        </>
    );

}

export default AppArray;