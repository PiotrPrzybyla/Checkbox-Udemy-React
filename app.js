// const PositiveMessage = () => <p> Enjoy your tasty beer!</p>;
// const NegativeMessage = ()=> <p>You are too young, better drink water! </p>;
const ValidationMessage = (props)=> <p>{props.txt}</p>;


class Checkbox extends React.Component {
  state = {
      isConfirmed: false,
      isFormSubmitted: false,
  };
  handleCheckboxChange =() =>{
      this.setState({
          isConfirmed: !this.state.isConfirmed,
          isFormSubmitted: false,

      })
}
    displayMessage = ()=> {
        if (this.state.isFormSubmitted) {
            if (this.state.isConfirmed) {
                return <ValidationMessage txt="Enjoy your tasty beer!"/>;
            } else {
                return <ValidationMessage txt="You are too young, better drink water!"/>;
            }
        }
    }
    handleFormSubmit = (e)=>{
        e.preventDefault();
        if(!this.state.isFormSubmitted) {
            this.setState({
                isFormSubmitted: true
            })
        }


    }
  render() {
      const{isConfirmed} = this.state;
    return (
      <>
          <form onSubmit={this.handleFormSubmit}>
          <h1>New tasty beer! You must try it</h1>
          <input type="checkbox" id="age" onChange={this.handleCheckboxChange} checked={isConfirmed}/>
          <label htmlFor="age">Yes, I am an adult</label>
          <br/>
          <button type="submit">Buy one bottle!</button>
          </form>
         {this.displayMessage()}
      </>
    )
  }
}

ReactDOM.render(<Checkbox />, document.getElementById("root"));
