import { Component } from 'react'
import OtherComponent from './OtherComponent';

class HockeyTeam extends Component {
    render() {
        const { teamName, homeTown, wins, losses, otl, playoffs } = this.props;

        return (
            <div>
                <h3>{ teamName }</h3>
                <p>Hometown: { homeTown }</p>
                <h4>Record</h4>
                <p>{ wins }-{ losses }-{ otl }</p>
                <h5>Playoff bound: { playoffs }</h5>
                <OtherComponent/>
            </div>
        )
    }
}

export default HockeyTeam;