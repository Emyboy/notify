import React from 'react'
import { Button } from 'primereact/button'
import FloatingBtn from '../components/FloatingBtn'
import Header from '../components/Header'
import Layout from '../components/Layout'
import EachNote from '../components/EachNote'

export default function index() {
	// console.log(process.env)
	return (
		<Layout>
			<FloatingBtn />
			<h1>lorem</h1>
			<Button>Click Me</Button>
			<Button>+</Button>
			<div class="container">
				<div class="row" style={{ justifyContent: 'center' }}>
					<EachNote />
					<EachNote />
					<EachNote />
					<EachNote />
					<EachNote />
					<EachNote />
					<EachNote />
					<EachNote />
					<EachNote />
				</div>
			</div>

		</Layout>
		// <div>
		// 	<Header />
		// </div>
	)
}
