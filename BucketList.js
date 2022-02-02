import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const BucketList = (props) => {
    const history = useHistory();
    const my_word = useSelector((state) => state.word.word)
    console.log(my_word)
    const my_desc = useSelector((state) => state.desc.desc)
    console.log(my_desc)
    const my_example = useSelector((state) => state.example.example)
    console.log(my_example)
   
    return (<ListStyle>
        {my_word.map((word, index) => {
            return (
                <ItemStyle className="list_item" key={index} onClick={() => {
                    history.push("/detail/" + index);
                }}>
                    {word}
                </ItemStyle>
                
            );
        })}

        {my_desc.map((desc, index) => {
            return (
                <ItemStyle className="list_item" key={index} onClick={() => {
                    history.push("/detail/" + index);
                }}>
                    {desc}
                </ItemStyle>
                
            );
        })}

        {my_example.map((example, index) => {
            return (
                <ItemStyle className="list_item" key={index} onClick={() => {
                    history.push("/detail/" + index);
                }}>
                    {example}
                </ItemStyle>
                
            );
        })}
    </ListStyle>
    );

    
};

const ListStyle = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 350px;
    width : 100vw;
    height: 100vh;
    margin : auto;
    `;

const ItemStyle = styled.div`
    width : 24vw;
    padding: 16px;
    margin: 8px;

    border: 1px solid green;
    border-radius : 20px;
    `
export default BucketList