import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button,Card,CardBody,CardHeader } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import {PostRoutPublic, GetRoute} from "../src/Services/ServicesFetch"
import Index from '../src/view/index';



const App = () => {
    return <div><Index/></div>
}

export default App;
