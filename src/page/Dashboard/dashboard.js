import React from 'react'
import { Container, Row, Col, Button} from "react-bootstrap";
import { TicketTable } from '../../components/ticket-table/TicketTable';
import tickets from '../../assests/data/dummy-tickets.json';
import { PageBreadcrumb } from "../../components/breadcrumbs/breadcrumb";

export const Dashboard = () => {
	return (
		<Container>
		<Row>
			<Col>
				<PageBreadcrumb page="Dashboard"/>
			</Col>
		</Row>
		<Row>
			<Col className="text-center mt-5 mb-2">
				<Button  
				style={{fontSize:"2rem",
				padding:"10px 30px",
				background:"brown",
				border:"none"
				}}>Add New Ticket</Button>
			</Col>
		</Row>
		<Row>
			<Col className="text-center mb-2">
				<div>Total Tickets</div>
				<div>Pending Tickets:5</div>
			</Col>
		</Row>
		<hr/>
		<Row>
			<Col className="mt-2">
				Recentky Added Tickets
			</Col>
		</Row>
		<hr/>

		<Row>
			<Col className="recent-ticket">
		<TicketTable tickets={tickets}/>	
			</Col>
		</Row>
			
		</Container>
	)
}
