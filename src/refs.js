import React from 'react';

export const PROFILE_REF = React.createRef();

export const handleProfileRef = () => {
  PROFILE_REF.current.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  })
};

export const CONTACT_REF = React.createRef();

export const handleContactRef = () => {
  CONTACT_REF.current.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  })
}

export const EDUCATION_REF=React.createRef();

export const handleEducationRef=()=>{
  EDUCATION_REF.current.scrollIntoView({
    behavior:"smooth",
    block:"nearest"
  })
}