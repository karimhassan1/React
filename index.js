import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/header';
import { resturantList } from './components/config';
import {useState} from 'react';

// const heading = React.createElement("h1",{},"This is the made through react and react dom");

// const reactElement = ReactDOM.createRoot(document.getElementById("papa"))
// const reactFunctionalComponent = ReactDOM.createRoot(document.getElementById("root"))

// const heading =(<h1>
//     This is the heading through jsx element
//     </h1>)

// const FunctionalComponent = () =>{
//     return <h1>This is heading of the funcitonal component</h1>
// }

// reactFunctionalComponent.render(<FunctionalComponent />)
// reactElement.render(heading)


const Resturant = ({resturantList}) =>{
        return (
        <div className='resturantCart'>
            <img src={resturantList.cdn_img} className='resturantCartImg' alt='resturant-image' />
            <h1>{resturantList.name}</h1>

        </div>
        )

}

// function filterAlgo(searchText,listData){
//     return listData.filter((list)=> list.name.includes(searchText) )
// }
console.log("check")
const Body = () =>{
    const [inputText,setInputText] = useState("");
    const [listData,setListData] = useState(resturantList)
    return <>
    <input className='SearchArea' 
        value={inputText}
        onChange={(e)=> {
            setInputText(e.target.value)
            setListData(resturantList.filter((list)=>list.name.includes(inputText)))
            console.log(e.target.value)
            if(inputText.length == 1){
                setListData(resturantList)
            }
            else if(e.target.vlaue == "backspace"){
                setListData(resturantList.filter((filt)=>filt.name.includes(inputText)))
                console.log("yes this is backspace")
            }
        }
            
                  
        }
        ></input> 
        <button
        className='btn-click'
        onClick={()=>{
            let data = listData.filter((filt)=>filt.name.includes(inputText))
            setListData(data)
        }
    }
                
        >Search</button>
        <div className='body'> 
           {
            listData.map((resturantone)=>{
                return <Resturant resturantList={resturantone} key={resturantone.key}/>
            })
           } 
        </div>
    </>
}
const Footer = () =>{
    return <>
        <h1>
            Footer
        </h1>
    </>
}

const TotalRender = () =>{
    return <>
    <Header />
    <Body />
    <Footer />

    </>

}
const totalArea = ReactDOM.createRoot(document.getElementById("totalArea"))
totalArea.render(<TotalRender />)

