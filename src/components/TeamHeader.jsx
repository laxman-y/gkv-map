import React, { useState } from 'react';
import { Users, Code, Palette, Database, Award, Github, Linkedin, Mail } from 'lucide-react';

const TeamHeader = () => {
  const [expandedMember, setExpandedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Laxman Yadav',
      role: 'Full Stack Developer',
      photo: './images/Laxman1.png',
      work: 'Lead Developer - Built navigation algorithm, pathfinding logic, and core application architecture',
      skills: ['React', 'JavaScript', 'Algorithms'],
      icon: Code,
      github: 'https://github.com/yourusername',
      linkedin: 'https://linkedin.com/in/yourusername',
      email: 'aman@example.com'
    },
    {
      id: 2,
      name: 'Pramod Sharma',
      role: 'UI/UX Designer',
      photo: './images/Pramod1.png',
      work: 'Designed user interface, created floor plan layouts, and developed the visual design system',
      skills: ['Figma', 'CSS', 'Design'],
      icon: Palette,
      github: 'https://github.com/yourusername',
      linkedin: 'https://linkedin.com/in/yourusername',
      email: 'priya@example.com'
    },
    {
      id: 3,
      name: 'Rohit Meerwal',
      role: 'Frontend Developer',
      photo: './images/Rohit1.png',
      work: 'Implemented interactive map features, search functionality, and responsive design elements',
      skills: ['Data Structures', 'React', 'Optimization'],
      icon: Code,
      github: 'https://github.com/yourusername',
      linkedin: 'https://linkedin.com/in/yourusername',
      email: 'rahul@example.com'
    },
    {
      id: 4,
      name: 'Kundan Prakash',
      role: 'Project Manager',
      photo: './images/Kundan1.png',
      work: 'Coordinated team efforts, managed project timeline, and conducted user testing with students',
      skills: ['Leadership', 'Agile', 'Testing'],
      icon: Award,
      github: 'https://github.com/yourusername',
      linkedin: 'https://linkedin.com/in/yourusername',
      email: 'sneha@example.com'
    }
  ];

  return (
    <div className="team-header-container">
      <div className="team-header-content">
        {/* Title Section */}
        <div className="team-title-section">
          <div className="team-icon-wrapper">
            <Users className="team-icon" />
          </div>
          <div>
            <h2 className="team-title">Meet Our Team</h2>
            <p className="team-subtitle">
              The brilliant minds behind Campus Navigator
            </p>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="team-grid">
          {teamMembers.map((member) => {
            const IconComponent = member.icon;
            const isExpanded = expandedMember === member.id;

            return (
              <div 
                key={member.id} 
                className={`team-member-card ${isExpanded ? 'expanded' : ''}`}
                onClick={() => setExpandedMember(isExpanded ? null : member.id)}
              >
                {/* Photo Section */}
                <div className="team-member-photo-wrapper">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="team-member-photo"
                  />
                  <div className="team-member-badge">
                    <IconComponent size={20} />
                  </div>
                </div>

                {/* Info Section */}
                <div className="team-member-info">
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="team-member-role">{member.role}</p>
                  
                  {/* Skills */}
                  <div className="team-member-skills">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Work Description */}
                  <div className={`team-member-work ${isExpanded ? 'show' : ''}`}>
                    <p>{member.work}</p>
                  </div>

                  {/* Social Links */}
                  {isExpanded && (
                    <div className="team-social-links">
                      <a 
                        href={member.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={18} />
                      </a>
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin size={18} />
                      </a>
                      <a 
                        href={`mailto:${member.email}`}
                        className="social-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  )}

                  {/* Click hint */}
                  <div className="click-hint">
                    {isExpanded ? 'Click to collapse' : 'Click to see more'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Stats */}
        <div className="project-stats">
          <div className="stat-box">
            <div className="stat-number">4</div>
            <div className="stat-label">Team Members</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">1</div>
            <div className="stat-label">Buildings</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">50+</div>
            <div className="stat-label">Rooms Mapped</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">2025</div>
            <div className="stat-label">Project Year</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamHeader;