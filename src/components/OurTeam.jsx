import React from 'react';
import teamPic from '../Images/HomePic.png'
const teamMembers = [
  {
    name: 'Dr. Alice Johnson',
    role: 'Postdoctoral Fellow',
    bio: 'Working on machine learning applications in bioinformatics.',
    image: teamPic,
  },
  {
    name: 'John Smith',
    role: 'PhD Student',
    bio: 'Researching neural networks for image classification.',
    image: teamPic
  },
  {
    name: 'Sara Lee',
    role: 'M.Tech Student',
    bio: 'Focusing on data visualization techniques.',
    image: teamPic
  },
  {
    name: 'Sunil Verma',
    role: 'M.Tech Student',
    bio: 'Focusing on data visualization techniques.',
    image: teamPic
  },
  {
    name: 'Mahesh Kandoi',
    role: 'MBA Student',
    bio: 'Focusing on data visualization techniques.',
    image: teamPic
  }
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
