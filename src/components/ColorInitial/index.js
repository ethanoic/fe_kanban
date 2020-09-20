import React from 'react';

const ColorInitial = (props) => {
  const { initials, color } = props;
  
  var c = color.substring(1);      // strip #
  var rgb = parseInt(c, 16);   // convert rrggbb to decimal
  var r = (rgb >> 16) & 0xff;  // extract red
  var g = (rgb >>  8) & 0xff;  // extract green
  var b = (rgb >>  0) & 0xff;  // extract blue

  var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  const fgColorCode = luma < 40 ? '#000' : '#FFF';

  return (
    <div className="color-initial" 
      style={{backgroundColor:color
    }} >
      <div style={{color: fgColorCode}}>{initials}</div>
    </div>
  )
}

export default ColorInitial;