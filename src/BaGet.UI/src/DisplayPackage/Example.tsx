import * as React from 'react';

// const hljs = require('highlightjs');
// @ts-ignore
import hljs from "highlightjs";
import 'highlightjs/styles/vs.css'

// import './Examples.css';

interface IExampleProps {
    title: string;
    text: string;
    language: string;
    key: number;
}


interface IExampleState {
    n: boolean;
}

class Example extends React.Component<IExampleProps, IExampleState> {

    private node: HTMLPreElement | null;

    constructor(props: IExampleProps) {
        super(props);
    }

    public componentDidMount() {
        hljs.highlightBlock(this.node)
    }

    public render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.title}</h3>
                </div>

                <div className="panel-body">
                    <pre className={this.props.language} ref={(node) => this.node = node}>
                        {this.props.text}
                    </pre>
                </div>
            </div>
        );
    }

}

export default Example;
