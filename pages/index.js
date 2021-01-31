import React from 'react'
import { Button } from 'rsuite'
import FloatingBtn from '../components/FloatingBtn'
import Header from '../components/Header'

export default function index() {
	// console.log(process.env)
	return (
		<div>
			<Header />
			<FloatingBtn />
			<h1>Hi</h1>
			<Button>Click Me</Button>
		</div>
	)
}
