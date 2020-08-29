import React, { Component } from 'react'
import axios from  'axios'
import pic from './cc.jpg'
export default class Dasboard extends Component {
  state={
      post:[]
  }
  componentDidMount(){
       axios.get('https://api.covid19api.com/summary' )
        .then(res=>{
            // console.log(res.data)
            const post=res.data.Countries
            
            this.setState({
                post
            })
        })
    
    }
    
    render() {
       
        return (
          
            <div>
               
               <img src={pic} alt="Covid-19" style={{backgroundSize:'cover'}}></img>
               <h1 className="center">Covid-19 Stats</h1> 
               <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Total</th>
              <th>Recovered</th>
              <th>Deaths</th>
              
          </tr>
        </thead>
       
        <tbody>
          {
            
              this.state.post.map((row)=>(
              <tr key={row.Country}>
                <td>{row.Country}</td>
                <td>{row.TotalConfirmed}  +({row.NewConfirmed})</td>
                <td>{row.TotalRecovered}  +({row.NewDeaths})</td>
                <td>{row.TotalDeaths}</td>
              </tr>
          ))}
        </tbody>
      </table>
            </div>
        )
    }
}

