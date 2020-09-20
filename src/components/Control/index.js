import React, { useState } from 'react'
import MagnifySVG from '../../global/assets/magnify.svg';

const Control = () => {
  const [isPristine, setPristine] = useState(true);
  const onKeyDown = (evt) => {
    if (evt.target.value.length > 0) {
      setPristine(false);
    } else {
      setPristine(true);
    }
  }
  return (
    <div className="control flex-fill b-left-1 b-fainter_gray_color">
      <div className="control__icon">
        <img src={MagnifySVG} alt="Search" />
      </div>
      <div className="control__field flex-fill">
        <input className="control__input" type="text" onKeyUp={onKeyDown} />
        {isPristine && <span className="control__placeholder">Search for ..</span>}
      </div>
    </div>
  )
}

export default Control;