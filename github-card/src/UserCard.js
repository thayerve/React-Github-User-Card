import React from 'react';
import { Grid, Image, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

export default function UserCard(props) {

    return (
        <Grid celled container columns={3}>
            <Grid.Row>
                <Grid.Column width={4}>
                    <Image src={props.data.avatar_url} alt="user avatar" />
                </Grid.Column>
                <Grid.Column width={8}>
                    <h2>{props.data.name}</h2>
                    <a href={props.data.html_url}>{props.data.login}</a>
                    <h4>Location:</h4>
                    <p>{props.data.location}</p>
                    <h4>Whole Deal:</h4>
                    <p>{props.data.bio}</p>
                </Grid.Column>
                <Grid.Column width={4}>
                    <h4>Followers:</h4>
                    <List as='ul'>
                        {props.followers.map(follower => {
                            return (
                                <List.Item
                                    as='li'
                                    key={follower.login}>
                                    <a href={follower.html_url}>{follower.login}
                                    </a>
                                </List.Item>
                            )
                        })}
                    </List>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column width={16}>
                <h2>Repositories</h2>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                
                    {props.repos.map(repo => {
                        return (
                        <Grid.Column key={repo.id}>
                            <h3>{repo.name} </h3>                      <a href={repo.html_url}>{repo.full_name}</a>
                        </Grid.Column>
                        )
                    })}
            </Grid.Row>
        </Grid>
    )
}