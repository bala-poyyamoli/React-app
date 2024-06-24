import './App.css';
import { useState } from 'react';
import ButtonComponent from './widget-component/button';
import InputBox from './widget-component/inputBox';
import TextBox from './widget-component/textBox';
import { useSelector,useDispatch } from 'react-redux'
import { removeInputList, setInputList } from './store/inputSlice';
import { setListValue } from './store/listValueSlice';
import { setShowText } from './store/showTextList';

function App() {
  let enteredValue;
  //Redux usage
  //To create new empty list dynamically
  const inputSelector = useSelector((val) => val.inputList.value)
  //To get value entered in each list
  const listValue = useSelector((val) => val.listValue.value)
  //To show each list as Text
  const showText = useSelector((val) => val.showText.value)
  const dispatch = useDispatch()


  //UseState Usage
  // const [inputList ,setInputList] = useState([{checkList1:""}]
  // const [listValue ,setlistValue] = useState([""])
  // const [showText ,setShowText] = useState([false])
  const [showAdd, setShowAdd] = useState(false)

  const addNewList = () => {
    dispatch(setInputList({}))
    dispatch(setListValue(enteredValue))
    enteredValue = '';
    const sText = [...showText]
    sText.push(false);
    dispatch(setShowText(sText))
    setShowAdd(false);
  }

  const removeList = (i) => {
    const temp = [...inputSelector]
    temp.splice(i,1)
    dispatch(removeInputList(inputSelector,i))
    const remp = [...listValue]
    remp.splice(i,1);
    dispatch(setListValue(remp))

    const sText = [...showText]
    sText.splice(i,1)
    dispatch(setShowText(sText))
  }

  const showTextList = (i) => {
    setShowAdd(true);
    const temp = [...showText]
    temp[i] = true;
    dispatch(setShowText(temp))
  }

  const changedValue = (e) => {
    enteredValue = e?.target?.value
  }

  return (
    <>
    <div className="App">
      <h1>Check List</h1>
      <div>
      <InputBox changedValue = {changedValue} enteredValue={enteredValue}></InputBox>     
      <ButtonComponent addNewList ={addNewList}/>
      </div>


      {inputSelector.map((e,i) => {
       return <div>
        <div>
        <TextBox listValue = {listValue} index ={i}></TextBox>
        <button onClick={() => removeList(i)}>Remove</button>
        </div>
        {/* { !showText[i] ? 
        <InputBox changedValue = {changedValue} index ={i}></InputBox>
        :
        <TextBox listValue = {listValue} index ={i}></TextBox>
      } */}

       {/* {showText[i] ? <button onClick={() => removeList(i)}>Remove</button> : <button onClick={() => showTextList(i)}>OK</button>} */}
       </div>
      })}
    </div>
    </>
  );
}

export default App;
