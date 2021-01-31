import React from 'react'
import { Button } from 'primereact/button'
import FloatingBtn from '../components/FloatingBtn'
import Header from '../components/Header'
import Layout from '../components/Layout'

export default function index() {
	// console.log(process.env)
	return (
		<Layout>
			<FloatingBtn />
			<h1>lorem</h1>
			<Button>Click Me</Button>
			<Button>+</Button>
		</Layout>
		// <div>
		// 	<Header />
		// </div>
	)
}
