import React from "react";

function ConnectBtn(props) {
  return (
    <div class="m-4">
      <a href={props.url}>
        <div class=" text-center connect-btn">
          <div class="card-body">
            <i class={"fab " + props.icon + " connect-icon"}></i>
            <br />
            <span>{props.name}</span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ConnectBtn;
