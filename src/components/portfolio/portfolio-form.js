import React, { Component } from 'react';


export default class PortfolioForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            category: "",
            position: "",
            url: "",
            thumb_image: "",
            banner_image: "",
            logo: "",
            // value: 'eCommerce'
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        // this.setState({
        //     value: event.target.value
        // });
        console.log("handle change", event)
    }


    render() {
        return(
            <div className = "left-colunm">
            <form>
                    <div>
                        <input type="text" name="name" placeholder = "Portfolio Item Name" value = {this.state.name} onChange = {this.handleChange}/>
                        <input type="text" name = "url"placeholder = "URL" value = {this.state.url} onChange = {this.handleChange}/>
                    </div>

                    <div>
                        <input type="text" name = "position" placeholder = "Position" value = {this.state.position} onChange = {this.handleChange}/>
                        <select value={this.state.value} onChange={this.Change}>
                            <option value="Enterprise">Enterprise</option>
                            <option value="Scheduling">Scheduling</option>
                            <option value="eCommerce">eCommerce</option>
                        </select>
                    </div>

                    <div>
                        <input type="text" name = "description" placeholder = "Description" value = {this.state.description} onChange = {this.handleChange}/>
                    </div>

                    <div className = 'Images'>
                        Thumbnail <input type="file" placeholder = "Thumbnail" />
                        Banner <input type="file" placeholder = "Banner"/>
                        Logo <input type="file" placeholder = "Logo"/>
                    </div>

                    <div>
                        <button type = "submit">Save</button>
                    </div>
            </form>
            </div>
        )
    }
}