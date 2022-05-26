import React, { useEffect, useState } from "react";
import styled from "styled-components"; 
import { Link } from "react-router-dom";    

const Friend = ({ friend}) => {
    const [currentFriend, setCurrentFriend] = useState([]);

    useEffect(() => {
        fetch(`/api/users/${friend}`).then((response) =>
        response.json().then((json) => {
            setCurrentFriend(json.data);
        })
        );
    }, [friend]);
    console.log(currentFriend)
    return (
        <Wrapper>
            <Link to={`/profile/${currentFriend.id}`}>
                <Name>
                    <Image src={currentFriend.avatarUrl}></Image>
                <Para>{currentFriend.name}</Para>
                </Name>
            </Link>
        </Wrapper>
    );
}
const Para= styled.p`
margin-bottom:10px;
`;
const Name= styled.div`
margin: 20px 10px 0 0;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  position: relative;
  width: 140px;
  height: 170px;
  border-radius: 10%;
  background-color: rgba(41, 41, 41, 1);
 color: #fff;
 `;

const Image= styled.img`
position: absolute;
  margin-bottom: 30px;
  height: 140px;
  `;

const Wrapper = styled.div` 
display: flex;
flex-direction: column;
align-items: center;`
;

export default Friend;