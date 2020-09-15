import React from 'react';
const Dropdown = function(props){
    //var list=["kiran","mahitha","rishika"]
return <select>
    {props.list.map(function(item,index){
        return <option value={index}>{item}</option>
    })}
</select>
};
export default Dropdown;

/* <option value="1">ONE</option>
    <option value="2">TWO</option>
    <option value="3">THREE</option>*/