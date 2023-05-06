import React from "react";

interface PanelInterface {
    component: (props: any) => JSX.Element,
}

export default class CustomPanel extends React.Component<PanelInterface> {
    componentDidMount(): void {
        console.log(this.props.component.toString())
    }

    render() {
        return this.props.component({ w: 20, h: 30 })
    }
}