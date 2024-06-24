import './App.css';
import { useEffect, useState } from 'react';
import ButtonComponent from './widget-component/button';
import InputBox from './widget-component/inputBox';
import TextBox from './widget-component/textBox';
import { useSelector,useDispatch } from 'react-redux'
import { removeInputList, setInputList } from './store/inputSlice';
import { editListValue, removeListValue, setListValue } from './store/listValueSlice';
import { setShowText } from './store/showTextList';

function App() {
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
  const [currentItem, setCurrentItem] = useState()
  const [isEditing, setEditing] = useState(false)
  const [currentItemIndex,setCurrentItemIndex] = useState(null)
  const [action, setAction] = useState("Add")

  const addNewList = () => {
    if(isEditing) {
      setEditing(false)
      const temp = [...listValue]
      temp[currentItemIndex] = currentItem
      dispatch(editListValue(temp))
      setAction("Add")
      const sText = [...showText]
      sText[currentItemIndex] = false;
      dispatch(setShowText(sText))
    }
    else {
        dispatch(setInputList({}))
        dispatch(setListValue(currentItem))
        const sText = [...showText]
        sText.push(false);
        dispatch(setShowText(sText))
        setShowAdd(false);  
    }
    setCurrentItem('');
  }

  const removeList = (i) => {
    const temp = [...inputSelector]
    temp.splice(i,1)
    dispatch(removeInputList(inputSelector,i))
    dispatch(removeListValue(i))

    const sText = [...showText]
    sText.splice(i,1)
    dispatch(setShowText(sText))
  }

  // const showTextList = (i) => {
  //   setShowAdd(true);
  //   const temp = [...showText]
  //   temp[i] = true;
  //   dispatch(setShowText(temp))
  // }

  const changedValue = (e) => {
    setCurrentItem (e?.target?.value);
  }

  const editList = (i) => {
    setAction("Update")
    setCurrentItem(listValue[i])
    setEditing(true)
    setCurrentItemIndex(i)
    const sText = [...showText]
    sText[i] = true;
    dispatch(setShowText(sText))
  }

  return (
    <>
    <div className="App">
      <h1>Check List</h1>
      <InputBox changedValue = {changedValue}  enteredValue ={currentItem}></InputBox>
      <ButtonComponent addNewList ={addNewList} action ={action}/>
      {inputSelector.map((e,i) => {
       return <div>
        <TextBox listValue =  {listValue} index ={i}></TextBox>
        <button onClick={() => removeList(i)}>Remove</button>
        <button disabled={showText[i]} onClick={() => editList(i)}>Edit</button>
       </div>
      })}
    </div>
    </>
  );
}

export default App;