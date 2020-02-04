import React, { Component } from 'react';
import BandInput from './BandInput';
import Band from './Band';
import { connect } from 'react-redux';

class BandsContainer extends Component {
	render() {
		return (
			<div>
				<BandInput addBand={this.props.addBand} />
				{this.props.bands.map(band => {
					return <Band delete={this.props.deleteBand} key={band.id} band={band} />;
				})}
			</div>
		);
	}
}

const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = dispatch => ({
	addBand: name => dispatch({ type: 'ADD_BAND', name }),
	deleteBand: band => dispatch({ type: 'DELETE_BAND', id: band.id })
});

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
