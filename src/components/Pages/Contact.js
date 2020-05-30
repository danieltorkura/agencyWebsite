import React, { Component } from 'react';
import Field from '../Common/Field'
import {withFormik} from 'formik'
import * as Yup from 'yup'


const fields = {
    sections: [[
        {name: 'name', elementName: 'input', type: 'text', placeholder:'Your name'},
        {name: 'email', elementName: 'input', type: 'email', placeholder:'Your email'},
        {name: 'phone', elementName: 'input', type: 'text', placeholder:'Your phone number'},
    ],
    [
        {name: 'message', elementName: 'textarea', type: 'text', placeholder:'Your message'}
    ]]
}
class Contact extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         name: '',
    //         email: '',
    //         phone: '',
    //         message: ''
    //     } 
            /*We are using formik*/
    // }

    // handleSubmit = (e) => {
    //     alert('Form Submitted. Thank you')
    // }
    render() {
        return (
            <div>
                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Contact Us</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <form  onSubmit={this.props.handleSubmit} id="contactForm" name="sentMessage" novalidate="novalidate">
                            <div className="row align-items-stretch mb-5">
                               {fields.sections.map((section, sectionIndex) => {
                                   return (
                                       <div className='col-md-6' key={sectionIndex}>
                                           {section.map((field, i) => {
                                               return  <Field 
                                               {...field}
                                                key={i}
                                                value={this.props.values[field.name]}
                                                name={field.name}
                                                onChange={this.props.handleChange}
                                                onBlur={this.props.handleBlur}
                                                touched={(this.props.touched[field.name])}
                                                errors={this.props.errors[field.name]}
                                                // onChange={(e) => this.setState({[field.name]: e.target.value})}
                                                // Helped us passs state
                                                />
                                           })}
                                           </div>
                                   )
                               })}
                            </div>
                            <div className="text-center">
                                <div id="success"></div>
                                <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit"
                               
                                >Send Message</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}


export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: ''
    }),
//     validate: values => {
//         const errors = {}
//         Object.keys(values).map(v => {
//             if(!values[v]){
//                 errors[v] = 'Required'
//             }
//     })
//     return errors
        
// },   
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'Name must be longer').required('You must give us a name'),
        email: Yup.string().email('Not valid email').required('Email required'),
        phone: Yup.string().min(10, 'Not real')
        .max(15, 'Too long')
        .required('We need your phone number'),
        message: Yup.string().min(500, 'We need detailed information')
        .required('This is required')
    }),

    handleSubmit: (values, {setSubmitting}) => {
            alert('You have submitted the form')
    }
})(Contact)