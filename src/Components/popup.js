import React from 'react';
import '../App.css';

class Popup extends React.Component {
  render() {
return (
<div className='popup'>
<div className='popup\_inner'>
<h1 className="popupTextStyle">{this.props.text}</h1>
<button className="submitStyle" onClick={this.props.closePopup}>Close</button>
</div>
</div>
);
}
}

export default Popup;
