import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

function Todoapp() {
    let [items, setItems] = useState([
        { id: 1, label: "Html & CSS", checked: true },
        { id: 2, label: "JavaScript", checked: true },
        { id: 3, label: "React JS", checked: false },
      ]);
    
      let [value, setValue] = useState("");
    
      let [isEdited, setIsEdited] = useState(false);
    
      let [currentEle, setCurrentEle] = useState(null);
    
      let handleVal = (id) => {
        let handleChecked = items.map((item) => {
          return item.id === id ? { ...item, checked: !item.checked } : item;
        });
    
        setItems(handleChecked);
      };
    
      let handleDelete = (id) => {
        let handleIdDelete = items
          .filter((item) => item.id !== id)
          .map((item, index) => {
            return { ...item, id: index + 1 };
          });
        // console.log( handleIdDelete )
        setItems(handleIdDelete);
      };
    
      let handleAddOrSave = () => {
        if (isEdited) {
          let newListItems = items.map((item) => {
            return item.id === currentEle ? { ...item, label: value } : item;
          });
          setItems(newListItems);
        } else {
          setItems([
            ...items,
            { id: items.length + 1, label: value, checked: false },
          ]);
          setValue("");
        }
      };
    
      let handleUpdate = (id) => {
        let newlistitem = items.find((item) => {
          return item.id === id;
        });
        setValue(newlistitem.label);
        setIsEdited(true);
        setCurrentEle(id);
    
        // console.log( currentEle )
        // console.log( newlistitem )
      };
    
      return (
        <main>
          <div>
            <input
              type="text"
              value={value}
              placeholder="Add New Items"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <button onClick={handleAddOrSave}> {isEdited ? "Save" : "Add"} </button>
          </div>
    
          <ul>
            {items.map((item) => {
              return (
                <li key={item.id} className="item">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => {
                      handleVal(item.id);
                    }}
                  />
                  <label> {item.label} </label>
                  <FaEdit
                    role="button"
                    tabIndex={0}
                    onClick={() => handleUpdate(item.id)}
                  />
                  <FaTrashAlt
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  />
                </li>
              );
            })}
          </ul>
        </main>
      );
    }
    
export default Todoapp;
