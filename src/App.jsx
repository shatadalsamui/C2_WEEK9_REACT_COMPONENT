//structuring your app into components
//defining a state of our application
import {useState} from "react";

function App() {
    return (<div>
            <div style={{background: "#dfe6e9", height: "100vh"}}>
                <div style={{display: "flex", justifyContent: "center", padding: 20}}>
                    <div>
                        <div style={{padding: 10}}><PostComponent/></div>
                        <div style={{padding: 10}}><PostComponent/></div>
                        <div style={{padding: 10}}><PostComponent/></div>
                    </div>
                </div>
                <ToggleMessage/>
            </div>
        </div>

    )
}

const style = {
    width: 400,
    height :140,
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 1,
    padding: 20
}

function PostComponent() {
    return <div style={style}>
        <div style={{display: "flex"}}>
            <img src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} style={{
                width: 70,
                height: 70,
                borderRadius: 20
            }}/>
            <div style={{fontSize: 14, marginLeft: 10}}>
                <b>100xDev</b>
                <div>23,888 followers</div>
                <div>12 m</div>
            </div>

        </div>
        <div style={{fontSize: 24}}>
            Want to know how to win big ? check out how these folks won 6000 in bounties
        </div>
    </div>
}
function ProfileCard(){
    return <div style ={style}>

    </div>
}

const ToggleMessage = () =>{
    let [isVisible,setIsVisible] = useState(true)  ;

    console.log("re-render");

    function toggle(){
        setIsVisible(!isVisible);
    }

    return (
        <div>
            <button onClick={toggle}>
                Toggle message
            </button>
            {isVisible && <p>This message is conditionally rendered</p>}
        </div>
    )
}

export default App





























