import React from 'react';
import Ajay from '../Images/Ajay.jpg'
import Mohini from '../Images/Mohini.jpg'
import dummy from '../Images/1000116076.jpg'
const teamMembers = [
  {
    name: 'Ajay Panday',
    role: 'PhD Research Scholar',
    bio: 'Working on machine learning applications in bioinformatics.',
    image: Ajay,
  },
  {
    name: 'Mohini Milmile',
    role: 'PhD Research Scholar',
    bio: 'Researching neural networks for image classification.',
    image: Mohini
  },
  {
    name: 'Sara Lee',
    role: 'PhD Research Scholar',
    bio: 'Focusing on data visualization techniques.',
    image: dummy
  },
];

const OurTeam = () => {
  return (
    <div className="research-page-container">
      <div className="research-content">
        <h1 className="research-title">Our Research Team</h1>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div>
              <div className="team-card">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />
                <div className="team-card-content">
                  <h2 className="team-name">{member.name}</h2>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
