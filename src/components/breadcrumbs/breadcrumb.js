import React from 'react'
import {Breadcrumb} from "react-bootstrap";
import './breadStyle.css'

export const PageBreadcrumb = ({page}) => {
	return (
		<div>
		<Breadcrumb className="mt breadStyle ">
			<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
			<Breadcrumb.Item active >{page}</Breadcrumb.Item>
		</Breadcrumb>	
		</div>
	)
}