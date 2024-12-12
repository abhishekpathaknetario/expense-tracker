import React from "react";

import "./DatePicker.css";

function DatePicker() {
  return (
    <div>
      <span class="datepicker-container">
        <input type="text" class="datepicker-input" name="send" value="Today" />
      </span>
    </div>
  );
}

export default DatePicker;
