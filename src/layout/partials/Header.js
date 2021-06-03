import React from 'react'
import {Navbar, Nav } from 'react-bootstrap';
import logo from "../../assests/img/logo.png"

export const Header = () => {
	return (
		<Navbar
		collapseOnSelect variant="dark" expand="md"
		>
		<Navbar.Brand>
			<img src={logo} alt="logo" width="50px"/>
		</Navbar.Brand>
		<Navbar.Toggle
		aria-control = "basic-navbar-nav"/>
		<Navbar.Collapse id="basic-navbar-nav">
		<Nav className="ml-auto">
			<Nav.Link href="/dashboard">Dashboard</Nav.Link>
			<Nav.Link href="/tickets">Tickets</Nav.Link>
			<Nav.Link href="/login">Logout</Nav.Link>
		</Nav>
		</Navbar.Collapse>	
		</Navbar>
	)
}
