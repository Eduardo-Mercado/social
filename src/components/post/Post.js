import './Post.css';
import React, { useState } from "react";
import { CaretUp, CaretDown, ThreeDotsVertical } from 'react-bootstrap-icons';
import moment from 'moment';
import Moment from 'react-moment';

import { Media  } from 'reactstrap';
import {abreviateNumber} from '../../utilitary/AbreviationNumber'
  

function Post(props){

    const [likes, setLikes] = useState(parseFloat(props.info.iterations));
    const time = moment(props.info.datePublish);
    return (
        <Media key={props.info.id}>
            <Media left>
                <div className='iterationUsers'>
                    <button onClick={()=> setLikes( likes + 1 )}> 
                        <CaretUp />
                    </button> 
                    <span>{abreviateNumber(likes)}</span>
                    <button onClick={()=> setLikes( likes - 1)}>
                        <CaretDown/>
                    </button>
                </div>
            </Media>
            <Media body>
                <div className='contentMediaBody'>
                    <p className='bodyText'>{props.info.title}</p>
                    <p>
                        <img src={require('assets/img/'+props.info.avatar)} alt='avatar'/>
                        <span className='autor'> {props.info.autor} </span> 
                        <span className='timepublish'>
                            <Moment fromNow>{time}</Moment>
                        </span>
                    </p>
                </div>
            </Media>
            <Media right>
                <div className='contentDotVertical'>
                    <ThreeDotsVertical/>
                </div>
            </Media>
        </Media>
    );
}

export default Post;