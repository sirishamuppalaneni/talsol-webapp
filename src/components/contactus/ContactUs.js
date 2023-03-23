import React from 'react';

class ContactUs extends React.Component {
   constructor(props){
    super(props);
    this.state = {
        user :{
            username :"",
            phonenumber : "",
            email : ""
        }
    }
   }
   updateInput = (event) => {
    this.setState({
        user :{
            ...this.state.user,
            [event.target.name] : event.target.value
        }
    })

   }
   submitLogin = (Event) => {
    Event.preventDefault(); 
    console.log(this.state.user);
   };

render () {
    return (
        <React.Fragment>
            <section className='mt-5 design'>
                <div className=" bg-primary p-5 ">
                    <div className="row">
                        <div className="col">
                            <h1 className='color1 pl-5'>Let’s make  </h1>
                            <h1 className='color1 pl-5'>your project  a lasting success</h1>
                            <p className='color pl-5'>Avenga - your competitive advantage</p>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </section>
            <div className='pt-3'>
            <div className='pl-5 pt-5 '>
            <h1 className='color2'>Start a conversation</h1>
            <div>
            <p className=' para pl-3 '>We’d like to hear from you. Use the contact form below and we’ll get back to you shortly.</p>
            </div>
            </div>
            </div>
            <hr></hr>
            
         
         <section className='m-5 '>
         <div className=' d-flex flex-column justify-content-center'>
            <div className="container marg">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card ">
                            <div className="card-header bg-primary text-white ">
                                <p className="h4">Contact </p>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={this.submitLogin}>
                                    <div className="form-group">
                                        <input
                                        name="username"
                                        value={this.state.user.username}
                                        onChange={this.updateInput}
                                        type="text" className='form-control' placeholder='Username'/>
                                    </div>
                                    <div className="form-group">
                                        <input 
                                        name="password"
                                        value={this.state.user.password}
                                        onChange={this.updateInput}
                                        type="phonenumber" className='form-control' placeholder='Phonenumber'/>
                                    </div>
                                    <div className="form-group">
                                        <input 
                                        name="email"
                                        value={this.state.user.email}
                                        onChange={this.updateInput}
                                        type="email" className='form-control' placeholder='email'/>
                                    </div>

                                    <div className='d-flex flex-row justify-content-center'>
                                        <input type="submit" value="Submit" className='btn btn-primary btn-sm'/>
                                    </div>
                                </form>

                            </div>

                        </div>

                    </div>
                    <div>
                    <div className='landing-page3 ml-5'>
                <div className='pl-5'>
                    </div></div>
                    </div> </div>
                </div>
            </div>
            </section> 
            <hr></hr>

            <div className="container ">
                <div className="row">
                    <div className="col">
                        <h1 className='con'>Overview</h1>
                    </div>
                    <div className="col">
                        <h1 className='con'> Data and AI</h1>
                    </div>
                    <div className="col">
                        <h1 className='con'> Global</h1>
                    </div>
                    <div className="col">
                        <h1 className='con'>Follow Us</h1>
                    </div>
                    </div>
               </div>
               <hr></hr>
               <html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/20c5629a29.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="follow-us-section pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="follow-us-section-heading">Follow Us</h1>
          </div>
          <div class="col-12">
            <div class="d-flex flex-row justify-content-center">
              <div class="follow-us-icon-container">
                <i class="fab fa-twitter icon"></i>
              </div>
              <div class="follow-us-icon-container">
                <i class="fab fa-instagram icon"></i>
              </div>
              <div class="follow-us-icon-container">
                <i class="fab fa-facebook icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>       
          
        </React.Fragment>
    )
}
}
export default ContactUs;