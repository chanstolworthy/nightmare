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

{/* -------------------------------------COMPANY ENROLLMENT-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>node company_enrollment_TEST.js</div>
                <div className='test_desc'>Creates and Enrolls a new Company</div>
            </div>

{/* -------------------------------------EMPLOYEE ENROLLMENT ATTEMPT-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>node create_employee_account_attempt_TEST.js</div>
                <div className='test_desc'>Attempts to create an Employee Account from the login page</div>
            </div>

{/* -------------------------------------ADMIN EDIT SELF-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>node admin_edit_self_TEST.js</div>
                <div className='test_desc'>Logs Admin in, then edits Employee Information</div>
            </div>
{/* -------------------------------------ADMIN PERMISSIONS SELF-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>node admin_permissions_TEST.js</div>
                <div className='test_desc'>Checks the permissions for an Admin</div>
            </div>
            <div className='app_intro basic_titles'>Permissions</div>
            {/* -------------------------------------EMPLOYEE - EMPLOYEE PERMISSIONS-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>node employee_employee_permissions_TEST.js</div>
                <div className='test_desc'>Checks the permissions for an Employee viewing another Employee</div>
            </div>
            {/* -------------------------------------EMPLOYEE - SELF PERMISSIONS-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>node employee_self_permissions_TEST.js</div>
                <div className='test_desc'>Checks the permissions for an Employee viewing their self</div>
            </div>
            {/* -------------------------------------MANAGER - EMPLOYEE PERMISSIONS-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>node manager_employee_permissions_TEST.js</div>
                <div className='test_desc'>Checks the permissions for a Manager viewing their Direct Reports</div>
            </div>
            {/* -------------------------------------ADMIN - EMPLOYEE PERMISSIONS-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>node admin_employee_permissions_TEST.js</div>
                <div className='test_desc'>Checks the permissions for an Admin viewing an Employee</div>
            </div>
            {/* -------------------------------------ADMIN - SELF PERMISSIONS-------------------------------------*/}
            <div className='test_list_cont'>
                <div className='test_command'>node admin_self_permissions_TEST.js</div>
                <div className='test_desc'>Checks the permissions for an Admin viewing their self</div>
            </div>
            

        </div>
    )
}