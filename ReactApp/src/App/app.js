import React        from "react";
//import {Component, useState }  from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import "../App.css";

import Header, * as all from "./CommonComponents/HeaderComponent";
import Footer from "./CommonComponents/FooterComponent";
import Home from "./CommonComponents/HomeComponent";
import NotFound from "./CommonComponents/NotFound";
import {About} from "./CommonComponents/AboutComponent";
import {AtmDispenser} from "./CommonComponents/ATMDispenser";
import FunctionState from "./CommonComponents/ReactHooks";
import User from "./ApplicationComponents/Container/User/UserContainer";
import Cart from "./ApplicationComponents/Container/Cart/CartContainer";
import Product from "./ApplicationComponents/Container/Product/ProductContainer";
import DisplayProduct from "./ApplicationComponents/Container/Product/DisplayProductsContainer";
import Checkout from "./ApplicationComponents/Container/Checkout/CheckoutContainer";
import Coupon from "./ApplicationComponents/Container/Coupon/CouponContainer";

import Loadable from "react-loadable"; //allows lazy loading
// functional component, used as placeholder
//when lazy loaded modules delayed
function Loading() {
    return (
        <div>
            Loading Project...
        </div>
    )
}

// const User = Loadable({
//     loader: () => import('./ApplicationComponents/Container/User/UserContainer'),
//     loading: Loading,
// });

// const Cart = Loadable({
//     loader: () => import('./ApplicationComponents/Container/Cart/CartContainer'),
//     loading: Loading,
// });

// const Product = Loadable({
//     loader: () => import('./ApplicationComponents/Container/Product/ProductContainer'),
//     loading: Loading,
// });

// const DisplayProduct = Loadable({
//     loader: () => import('./ApplicationComponents/Container/Product/DisplayProductsContainer'),
//     loading: Loading,
// });

//export default class App extends Component{
export default class App extends React.Component{    

    render(){//virtual dom
        let decide = 2;
        return(//JSX
            <Router>
                <Header/>
                <Switch>
                    {/* <Route path="/home" render={()=>
                                (decide == 1 ? 
                                    (<Redirect to="/about/" />)
                                        :(<Home/>)
                                        )} />                    */}
                    <Route path="/home" exact component={Home} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/product" exact component={Product} />
                    <Route path="/show" exact component={DisplayProduct} />
                    <Route path="/checkout" exact component={Checkout} />                                        
                    <Route path="/about" exact component={About} />
                    <Route path="/coupon" exact component={Coupon} />
                    <Route path="/about/:id" component={About} />
                    <Route path="/user" exact component={User} />
                    <Route path="/atm" exact component={AtmDispenser} />
                    <Route path="/hooks" exact component={FunctionState} />
                    <Route path="/" exact component={Home} />
                    <Route path="*" component={NotFound} />                    
                </Switch>
                <Footer/>               
            </Router>
        )
    }
}


// export default class App_Old extends React.Component{
//     //export default class App extends Component{

    // constructor(props, context){
    //     super(props, context);
    //     this.state = {//initialized the state //comes from props or created here and mutable
    //         homeMsg:"1. This is Applications Home Component",
    //         footerMsg:"Thanks Your For Shopping",
    //         year:2020,
    //         childMsg: "No Message"
    //     },
    //     this.title = "Shopping Cart Header";//Global variable/ expression
    // }

    // getDataFromChild =(childMsg ) => {
    //     //alert(childMsg);
    //     this.setState({
    //         childMsg:childMsg
    //     })
    // }
//         render(){//virtual dom
//             let a = 25, b = 26, framework = "React", version = "16.4";
//             let title = `We are going to learn ${framework} Framework with version ${version}`;
//             let names = ["Andrew","Himavan","Richard","Linh"];
//             return(//JSX
//                 <div>
//                     <b>This should load from react page</b>
//                     <p>{'Addition '+ a + b}{'Multi - '+ a * b}</p>
//                     <div>
//                         <b>{title}</b>
//                         <ul>{
//                             names.map((item)=>{
//                                 return <li>{item}</li>;
//                             })
//                         }</ul>
//                     </div>
//                     <Header>
//                         <all.GetName />    
//                         <all.GetAge />
//                     </Header>
                {/* <Home msg={this.state.homeMsg} sendToChild={this.getDataFromChild} returnMsg={this.state.childMsg}>
                    <p>{"2. Home Component Data"}</p>
                    <all.GetBody />
                </Home> */}    
                    
//                 </div>
//             )
//         }
//     }