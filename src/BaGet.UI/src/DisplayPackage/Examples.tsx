import * as React from 'react';

import Example from './Example';

// import './Examples.css';

interface IExamplesProps {
    content: string;
    packageName: string;
    packageVersion: string;
    serviceUrl: string;
}


interface IExamplesState {
    shown: boolean;
    examples: any[];
}

class Examples extends React.Component<IExamplesProps, IExamplesState> {

    constructor(props: IExamplesProps) {
        super(props);

        // tslint:disable-next-line:no-console
        console.log(props);
        this.state = {
            examples: [],
            shown: false

        };

    }

    public render() {
        const packageUrl = this.props.serviceUrl + "/Package/" + this.props.packageName + "/" + this.props.packageVersion;

        const moreExamples = this.state.examples.length > 0
            ? (
                <div>
                    <a href={packageUrl} target="_blank">More examples</a>
                </div>
            )
            : (
                <div>No examples found</div>
            );

        return (
            <div>
                <h3>Examples</h3>
                {!this.state.shown &&
                    <div>
                        <a onClick={this.loadData}>Load</a>
                    </div>
                }
                {this.state.examples.map((example, index) => (
                    <Example title={example.title} text={example.text} language={example.language} key={index} />
                ))}

                {this.state.shown &&
                    moreExamples
                }

            </div>
        );
    }


    private loadData = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const apiUrl = this.props.serviceUrl + "/api/" + this.props.packageName + "/" + this.props.packageVersion;

        fetch(apiUrl, {
            credentials: 'include'
        }).then(response => response.json())
            .then(data => data.examples)
            .then(data => this.setState({ shown: true, examples: data }));
    }

}


export default Examples;
