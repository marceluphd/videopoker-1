import React, { Component } from "react";
export default (props) => (
    <div onClick={() => props.onClick(props.id)}>
        {props.card.value} of {props.card.suit}s {props.card.hold && "SELECTED"}
    </div>
);