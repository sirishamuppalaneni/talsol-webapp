import React from 'react';

class About extends React.Component{
    // constructor(props) {
    //     super(props);
        
    // }
    render() {
        return (
            <React.Fragment>
                <div className='d-flex flex-row justify-content-center p-3 m-3'>
                    <div className='d-flex flex-column justify-content-center'>
                    <h2 className='color3'>About Talsol</h2>
                    <p className='param'>We are a global IT engineering and consulting platform driving value to our clients with custom software solutions.</p>
                    </div>
                 
                <div className='landing-page2'>
                <div className='pl-5'>

                </div>

                </div>
                </div>
                <hr></hr>
                <div className="container bg-warning ">
                    <div className="row">
                        <div className="col">
                            <div className='d-flex flex-row justify-content-center '>
                           <div className='pl-5 pr-5 mt-3'>
                            <h1 >4300+</h1>
                            <p>professionals</p>
                           </div>
                           <div className='pl-5 pr-5 mt-3'>
                            <h1>4300+</h1>
                            <p>happy clients</p>
                           </div>
                           <div className='pl-5 pr-5 mt-3 '>
                            <h1>4300+</h1>
                            <p>years of experience</p>
                           </div>
                           </div>

                        </div>
                    </div>
                </div>
                
                <hr></hr>
                <div>

                    <h1 className='fsize'>Our mission is to disrupt the outdated and conventional IT market with new imaginative solutions</h1>
                </div>
                
                

            </React.Fragment>
        );
    }
    
}
export default About;

