import './Feed.css';
import React from 'react';
import {  Card,CardHeader, CardBody } from 'reactstrap';
import { Grid, HddStack } from 'react-bootstrap-icons';

import  Post  from 'components/post/Post';
import {getData} from './FeedFunctionality';

function Feed(props){

    const posts =  getData();
    return (
        <Card key={props.id}>
            <CardHeader>
                <h2>{props.title}</h2>
                <span>
                    <Grid/>
                    <HddStack/>
                </span>
            </CardHeader>
            <CardBody>
                <ul>
                  {  [...posts].map(function(element) {
                      return (
                          <li>
                              <Post info = {element}></Post>
                          </li>
                      )
                    })
                  }
                </ul>
            </CardBody>
        </Card>
    );
}

export default Feed;