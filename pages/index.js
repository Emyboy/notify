import React from 'react'
import { Button } from 'primereact/button'
import FloatingBtn from '../components/FloatingBtn'
import Header from '../components/Header'
import Layout from '../components/Layout'
import EachNote from '../components/EachNote'
import EachCategory from '../components/EachCategory'
import { connect } from 'react-redux'
import {  createNote } from '../redux/action/note.action';

const mapStateToProps = state => ({
	note: state.note
})

const mapDispatchToPrpos = {
}

export default connect(
	mapStateToProps,
	mapDispatchToPrpos
)(props =>{
	// console.log('PROPS --', props);
	// console.log(process.env)
	return (
		<Layout>
			<FloatingBtn />
			<EachCategory category='Important' />
			<div class="container">
				<div class="row" style={{ justifyContent: 'center' }}>
					{
						props.note.notes.map((val, i) => {
							return <EachNote data={val} key={i} />
						})
					}
				</div>
			</div>
			{/* <EachCategory category='Things To Learn' />
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
				</div>
			</div> */}

		</Layout>
		// <div>
		// 	<Header />
		// </div>
	)
});
