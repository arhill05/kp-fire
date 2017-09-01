import React, {Component} from "react";
import 'whatwg-fetch';

class Team extends Component {
    constructor(props, match) {
        super(props);
        this.state = {
            players: []
        };
    }

    async setPlayers(teamId) {
        const players = await fetch(`http://dev.andrewhill.io/wordpress/wp-json/wp/v2/team_${teamId}_players/`)
        const playersJson = await players.json();
        this.setState({players: playersJson})
    }

    componentDidMount() {
        const teamId = this.props.match.params.teamId;
        this.setPlayers(teamId);
    }

    componentWillReceiveProps(newProps) {
        this.setPlayers(newProps.match.params.teamId);
    }


    render() {
        const players = this
            .state
            .players
            .map((player, index) => {
                return (
                    <li key={index}>{player.title.rendered}</li>
                )
            })
        return (
            <div>
                <h3>Team {this.props.match.params.teamId} Roster</h3>
                <ul>
                    {players}
                </ul>
            </div>
        );
    }

}

export default Team;
