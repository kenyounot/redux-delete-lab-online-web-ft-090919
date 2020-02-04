import React, { Component } from 'react';

class Band extends Component {
	render() {
		console.log(this.props.band.id);

		return (
			<div>
				Bands:
				<li>
					Name: {this.props.band.name}
					<button onClick={() => this.props.delete(this.props.band)}>DELETE</button>
				</li>
			</div>
		);
	}
}

export default Band;
