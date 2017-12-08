import React from 'react';
import './testlist.css';

export default function TestList() {

    return(
        <div className='list_body'>
        <br/>

{/* -------------------------------------EMPLOYEE LOGIN-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>yarn login-user</div>
                <div className='test_desc'>Tests the main login page</div>
            </div>

{/* -------------------------------------ADD EMPLOYEE-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>yarn add-employee</div>
                <div className='test_desc'>Adds a new employee to invite to an existing company</div>
            </div>

{/* -------------------------------------FORGOT PASSWORD-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>yarn forgot-password</div>
                <div className='test_desc'>Sends an email to the eployee that forgot their password</div>
            </div>

{/* -------------------------------------COMPANY ENROLLMENT-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>yarn enroll-company</div>
                <div className='test_desc'>Creates and Enrolls a new Company</div>
            </div>

{/* -------------------------------------EMPLOYEE ENROLLMENT ATTEMPT-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>yarn create-employee-attempt</div>
                <div className='test_desc'>Attempts to create an Employee Account from the login page</div>
            </div>

{/* -------------------------------------ADMIN EDIT SELF-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>yarn edit-self-admin</div>
                <div className='test_desc'>Logs Admin in, then edits Employee Information</div>
            </div>
{/* -------------------------------------ADMIN PERMISSIONS SELF-------------------------------------*/}
            {/* <div className='test_list_cont'>
                <div className='test_command'>node admin_permissions_TEST.js</div>
                <div className='test_desc'>Checks the permissions for an Admin</div>
            </div> */}
            <div className='app_intro basic_titles'>Permissions</div>
            {/* -------------------------------------EMPLOYEE - EMPLOYEE PERMISSIONS-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>yarn all</div>
                <div className='test_desc'>Checks the permissions for all access levels</div>
            </div>
            {/* -------------------------------------EMPLOYEE - EMPLOYEE PERMISSIONS-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>yarn employee-employee</div>
                <div className='test_desc'>Checks the permissions for an Employee viewing another Employee</div>
            </div>
            {/* -------------------------------------EMPLOYEE - SELF PERMISSIONS-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>yarn employee-self</div>
                <div className='test_desc'>Checks the permissions for an Employee viewing their self</div>
            </div>
            {/* -------------------------------------MANAGER - EMPLOYEE PERMISSIONS-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>yarn manager-employee</div>
                <div className='test_desc'>Checks the permissions for a Manager viewing their Direct Reports</div>
            </div>
            {/* -------------------------------------MANAGER - SELF PERMISSIONS-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>yarn manager-self</div>
                <div className='test_desc'>Checks the permissions for a Manager viewing their self</div>
            </div>
            {/* -------------------------------------ADMIN - EMPLOYEE PERMISSIONS-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>yarn admin-employee</div>
                <div className='test_desc'>Checks the permissions for an Admin viewing an Employee</div>
            </div>
            {/* -------------------------------------ADMIN - SELF PERMISSIONS-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>yarn admin-self</div>
                <div className='test_desc'>Checks the permissions for an Admin viewing their self</div>
            </div>
            

        </div>
    )
}