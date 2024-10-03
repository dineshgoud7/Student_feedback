// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AdminDashboard from './components/admin/admindashboard'; // Make sure the file name matches
import AddStudent from './components/admin/addStudent';
import AddFaculty from './components/admin/addFaculty';
import AddCourse from './components/admin/addCourse';
import Login from './components/login';
import Register from './components/register';
import Contact from './components/contact';
import Home from './components/home';
import FacultyDashboard from './components/faculty/facultyDashboard';
import ViewFeedback from './components/faculty/viewFeedback';
import StudentDashboard from './components/student/studentDashboard';
import GiveFeedback from './components/student/giveFeedback';
import ViewFaculty from './components/admin/ViewFaculty';
import ViewStudents from './components/admin/ViewStudents';
import './App.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                {/* Home */}
                <Route path="/" element={<Home />} />  {/* Home Page */}
                <Route path="/login" element={<Login />} />  {/* Login Page */}
                <Route path="/register" element={<Register />} />  {/* Register Page */}
                <Route path="/contact" element={<Contact />} />  {/* Contact Page */}
                 
                {/* Admin Routes */}
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/add-student" element={<AddStudent />} />
                <Route path="/admin/add-faculty" element={<AddFaculty />} />
                <Route path="/admin/add-course" element={<AddCourse />} />
                <Route path="/admin/view-students" element={<ViewStudents />} /> {/* Use element here */}
                <Route path="/admin/view-faculty" element={<ViewFaculty />} />   {/* Use element here */}

                {/* Faculty Routes */}
                <Route path="/faculty" element={<FacultyDashboard />} />
                <Route path="/faculty/view-feedback" element={<ViewFeedback />} />

                {/* Student Routes */}
                <Route path="/student" element={<StudentDashboard />} />
                <Route path="/student/give-feedback" element={<GiveFeedback />} />
            </Routes>
        </Router>
    );
}

export default App;
