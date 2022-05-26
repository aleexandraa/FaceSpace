import React, { useState, useEffect, createContext, useRef } from "react";
import styled, {keyframes} from "styled-components";
import { Link } from "react-router-dom";

function Section({ allUsers, userFriends, currentUser }) {
  console.log(userFriends);
  return (
    <Wrapper>
      <Members>Lucifer's members</Members>
      <AllImages>
        {allUsers.map((user) => (
          <Picture key={`users-${user.id}`} to={`/profile/${user.id}`}>
          {userFriends.includes(user.id) ? (
            <div>
              <CurrentUserImage src={user.avatarUrl}></CurrentUserImage>
            <FriendTag className={userFriends.includes(user.id)}>Friends
            </FriendTag>
            </div>
            ) : (
              <div>
              <Image src={user.avatarUrl}></Image>
            </div>
            )}     
          </Picture>
        ))}
      </AllImages>
    </Wrapper>
  );
  
}

const Picture = styled(Link)`
position: relative;
`;
const FriendTag = styled.div`
  z-index: 1000;
text-decoration: none;
position:absolute;
  transform: translateY(10px);
  background-color: yellow;
  top: 0px;
  right: 0px;

`;

const AllImages = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70vw;
  margin-top: 20px;
`;

const CurrentUserImage = styled.img`
  height: 120px;
  margin: 4px;
  border-radius: 10px;
  opacity: 0.6;
  &:hover {
    border: 3px solid #292929;
  }
`;

const Image = styled.img`
  height: 120px;
  margin: 4px;
  border: 1px solid #292929;
  border-radius: 10px;
  &:hover {
    border: 4px solid #292929;
    transition: 0.3s ease-in-out;
  }
`;

const Members = styled.h2`
  color: #292929;
  width: 70vw;
  margin-top: 30px;
`;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default Section;