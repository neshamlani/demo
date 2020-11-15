import React from 'react';

export const PROFILE_REF = React.createRef();

export const handleProfileRef = () => {
  PROFILE_REF.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start"
  })
};

export const CONTACT_REF = React.createRef();

export const handleContactRef = () => {
  CONTACT_REF.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start"
  })
};

export const EDUCATION_REF = React.createRef();

export const handleEducationRef = () => {
  EDUCATION_REF.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start"
  })
};

export const SKILLS_REF = React.createRef();
export const handleSkillRef = () => {
  SKILLS_REF.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start"
  })
};