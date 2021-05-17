import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    background: #fff;
`;

const Container = styled.div`

    position: absolute;
    top: 30%;
    box-shadow: 2px 10px 25px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`

    background: #272727;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: center;
    cursor: pointer;

    h1 {
        padding: 2rem;
        font-size: 2rem;
    }
    
`;

function Accordion() {
    return (
        <IconContext.Provider
            value = {{ color: '#00FFB9', size: '25px'}}
        >
            <AccordionSection>
                <Container>
                    {Data.map((item, index) => {
                        return (
                            <>
                                <Wrap>
                                    <h1>{item.question}</h1>
                                </Wrap>
                                    <p>{item.answer}</p>
                            </>
                        )
                    })}
                </Container>
            </AccordionSection>
        
        </IconContext.Provider>
    )
}

export default Accordion;
