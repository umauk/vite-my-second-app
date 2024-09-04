import { Component } from "react";
import { FirstComponent } from "../bootstrap/firstcomponent";
import Counter from "../counter/counter";
class YotubeButton extends Component{
    state={
        isSubsribe:false,
        text1:"subscribe",
        text2:"subscribed"
    }
    clickHandler=()=>{
        this.setState(
            {
                isSubscribe:!this.state.isSubscribe
            }
        )
    }
      render (){
        return(
            <>
            <button onClick={ this.clickHandler }>{this.state.isSubscribe?this.state.text2:this.state.text1}</button>
            {
                this.state.isSubscribe?
                <div>
                    <Counter/>
                    <FirstComponent/>
                    </div>:<div><h2>please subscribe to this</h2></div>

            }

            </>
        )
      }
}

export default YotubeButton