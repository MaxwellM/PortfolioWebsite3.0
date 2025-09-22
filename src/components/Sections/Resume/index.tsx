import {FC, memo} from 'react';

import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Work">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Skills">
          <p className="pb-8">
            Product Management across multiple teams and products; Product Development from concept to customer; 
            Effective Communication with various groups such as management, stakeholders, department teams, 
            business partners, customers, and third-party integrators with custom and sensitive needs; Interpersonal 
            Skills, extensive experience in presenting statistics and reports, coordinating multiple departments, 
            and building relations with clients and shareholders. Inherited projects where client relationships were 
            fragile. Consistently overcame these inherent challenges by personally interacting and hand delivering 
            custom solutions to improve/repair relations; Teamwork, as both lead and follower; Web Design; Product 
            Integration, coordinating interfaces between existing technologies to make them compatible, including 
            with third party technologies; Networking Hardware, able to connect several devices to manage data 
            collection and tasks for security, quality assurance and analysis; Managing Databases, able to create 
            and utilize databases to document product performance, monitor current projects, and apply to future 
            tasks; Planning, able to bring a product from concept to completion, as illustrated throughout entire 
            work history by consistently noticing a need within the company and taking initiative to create products 
            and solutions to fulfill that need; Computer Repair, repairing laptops and desktops at a component level. 
            Collaboration, worked with multiple internal and external departments maintaining smooth product development
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
