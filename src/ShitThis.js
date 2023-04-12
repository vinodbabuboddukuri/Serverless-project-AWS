import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { redirect } from "react-router-dom";



class persondata extends Component {
  state = {
    loading: false,
    EmailID: "",
    Gender: "",
    branch: "",
    designation: "",
    phno: "",
    FirstName: "",
    LastName: "",
    batch: "",
    value: '',
    rows:[]
  };

  search = async val => {
    this.setState({ loading: true });
    const res = await axios(
      `https://2oro97ky0l.execute-api.us-east-1.amazonaws.com/getcustomerdetailsbyemail/getcustomerdetailsbyemail?EmailID=${val}`
    );
    const persondata = await res.data;
    console.log(persondata.Item);
    this.setState({EmailID:persondata.Item.EmailID});
    this.setState({designation:persondata.Item.designation});
    this.setState({phno:persondata.Item.phno});
    this.setState({FirstName:persondata.Item.FirstName});
    this.setState({LastName:persondata.Item.LastName});
    this.setState({batch:persondata.Item.batch});
    this.setState({Gender:persondata.Item.Gender});
    this.setState({Nameofcert:persondata.Item.Nameofcert});
    this.setState({certurl:persondata.Item.certurl});
    this.setState({rows:persondata.Item.rows});
  };

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };
  render() {
    // const nameofcert = this.state.Nameofcert.map(cert =>
    //     <li>{cert}</li>
    //   );
    // const certurl = this.state.certurl.map(url => <li>{url}</li>);
    
    return (
      // <div>
      //   <input
      //     value={this.state.value}
      //     onChange={e => this.onChangeHandler(e)}
      //     placeholder="Type something to search"
      //   />
      //   {/* <button onClick={this.search(this.state.value)} >Search</button> */}
      //   <h2>Email id = {this.state.EmailID}</h2>
      //   <h2>first Name = {this.state.FirstName}</h2>
      //   <h2>last Name = {this.state.LastName}</h2>
      //   <h2>Gender  = {this.state.Gender}</h2>
      //   <h2>phone Number = {this.state.phno}</h2>
      //   <h2>Designation = {this.state.designation}</h2>
      //   <h2>batch = {this.state.batch}</h2>
   
      //   <table className="table">
      //       <thead>
      //           <tr>
      //               <th>S.N</th>
      //               <th>cert Name</th>
      //               <th>cert Address</th>
      //           </tr>
      //       </thead>
      //       <tbody>
      //       {
      //           this.state.rows.map((data, index)=>{
      //             //console.log(data);
      //               return(
      //                   <tr key={index}>
      //                       <td>{index+1}</td>
      //                       <td>{data.certName}</td>
      //                       <a href={data.certLink}>certificate link</a>
      //                   </tr>
      //               )
      //           })
      //       }
      //       </tbody>
      //   </table>
      // </div>
      <div>
  <input
    value={this.state.value}
    onChange={(e) => this.onChangeHandler(e)}
    placeholder="Type something to search"
    style={{ marginBottom: '1rem', padding: '0.5rem' }}
  />
  <h3 style={{ marginBottom: '0.5rem' }}>Email ID = {this.state.EmailID}</h3>
  <h3 style={{ marginBottom: '0.5rem' }}>First Name = {this.state.FirstName}</h3>
  <h3 style={{ marginBottom: '0.5rem' }}>Last Name = {this.state.LastName}</h3>
  <h3 style={{ marginBottom: '0.5rem' }}>Gender = {this.state.Gender}</h3>
  <h3 style={{ marginBottom: '0.5rem' }}>phone Number = {this.state.phno}</h3>
  <h3 style={{ marginBottom: '0.5rem' }}>Designation = {this.state.designation}</h3>
  <h3 style={{ marginBottom: '0.5rem' }}>Batch = {this.state.batch}</h3>

  <table className="table" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
    <thead>
      <tr>
        <th style={{ border: '1px solid black', padding: '0.5rem' }}>S.No</th>
        <th style={{ border: '1px solid black', padding: '0.5rem' }}>Cert Name</th>
        <th style={{ border: '1px solid black', padding: '0.5rem' }}>Cert Address</th>
      </tr>
    </thead>
    <tbody>
      {this.state.rows.map((data, index) => {
        return (
          <tr key={index}>
            <td style={{ border: '1px solid black', padding: '0.5rem' }}>{index + 1}</td>
            <td style={{ border: '1px solid black', padding: '0.5rem' }}>{data.certName}</td>
            <td style={{ border: '1px solid black', padding: '0.5rem' }}>
              <a href={data.certLink}>certificate link</a>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>

    );
  }
}

export default persondata;