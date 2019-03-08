import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list'
import PortfolioForm from '../portfolio/portfolio-form'


export default class PortfolioManager extends Component {
    constructor(props) {
        super(props)

        this.state = {
            portfolioItems: []
        }
        this.handleSuccessfullFormSubmition = this.handleSuccessfullFormSubmition.bind(this) 
        this.handleFormSubmitionError = this.handleFormSubmitionError.bind(this)
    }

    handleSuccessfullFormSubmition(portfolioItem) {
        // TODO
        // update the portfolioItems state
        // and add the portfolioItem to the list 
    }

    handleFormSubmitionError(error) {
        console.log("handleFormSubmitionError", error)
    }

    getPortfolioItems = () => {
        axios.get("https://hannahdonaldson.devcamp.space/portfolio/portfolio_items", {
            withCredentials: true
    })
    .then(response => {
            this.setState({
                portfolioItems: [...response.data.portfolio_items]
            })
        }).catch(error => {
            console.log("error in PortfolioItems", error)
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        return(
            <div className = "portfolio-manager-wrapper">
                <div className = "left-colunm">
                    <PortfolioForm 
                    handleSuccessfullFormSubmition = {this.handleSuccessfullFormSubmition}
                    handleFormSubmitionError = {this.handleFormSubmitionError}
                    />
                </div>

                <div className = "right-colunm">
                    <PortfolioSidebarList data = {this.state.portfolioItems}/>
                </div>
            </div>
        )
    }
}




















// import React, { Component } from 'react';


// export default class PortfolioManager extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         value: 'eCommerce'
    //     }
    //     this.Change = this.Change.bind(this)
    //     this.Submit = this.Submit.bind(this)
    // }

    // Change(event) {
    //     this.setState({
    //         value: event.target.value
    //     });
    // }

    // Submit(event) {
    //     event.preventDefault();
    // }

//     render() {
//         return(
//             <div className = "portfolio-manager-wrapper">
                // <div className = "left-colunm">
                // <form>
                //     <label>
                //         <input type="text" name="name" placeholder = "Portfolio Item Name"/>
                //         <input type="number" placeholder = "Position"/>
                //         <input type="text" placeholder = "URL"/>
                //         <input type="message" placeholder = "Description"/>

                //         <select value={this.state.value} onChange={this.Change}>
                //             <option value="Enterprise">Enterprise</option>
                //             <option value="Scheduling">Scheduling</option>
                //             <option value="eCommerce">eCommerce</option>
                //         </select>

                //         <div className = 'Images'>
                //         Thumbnail <input type="file" placeholder = "Thumbnail" />
                //            Banner <input type="file" placeholder = "Banner"/>
                //             Logo <input type="file" placeholder = "Logo"/>
                //         </div>
                //     </label>
                //     <input type="submit" value="Save" />
                // </form>
                // </div>

//                 <div className = "right-colunm">
//                     <h1>Portfolio form...</h1>
//                 </div>
//             </div>
//         )
//     }
// }