import React from 'react';
import './testlist.css';

export default function TestList() {

    return(
        <div className='list_body'>
        <br/>

{/* -------------------------------------EMPLOYEE LOGIN-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>node login_TEST.js</div>
                <div className='test_desc'>Tests the main login page</div>
            </div>

{/* -------------------------------------ADD EMPLOYEE-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>node add_employee_TEST.js</div>
                <div className='test_desc'>Adds a new employee to invite to an existing company</div>
            </div>

{/* -------------------------------------FORGOT PASSWORD-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>node forgot_password_TEST.js</div>
                <div className='test_desc'>Sends an email to the eployee that forgot their password</div>
            </div>

        </div>
    )
}