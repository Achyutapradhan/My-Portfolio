import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="KIIT University, Khordha, Odisha"
            date="2022 — 2024"
            description=" CGPA: 8.64 "
          />
          <TimelineItem
            title="Udayanath Auto College of Science and Technology, Cuttack, Odisha"
            date="2019 — 2022"
            description="Percentage: 72.7%"
            details="CGPA: 8.64"
            />
          <TimelineItem
            title="Shakti  Higher Secondary School, Cuttack, Odisha"
            date="2017 — 2019"
            description="Percentage: 62.5%"
          />
          <TimelineItem
            title="Yugasrasta Sovaniya Sikhyashram, Udayagiri, Odisha"
            date="2016 — 2017"
            description="Percentage: 82.6%"
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="JAVA" value={85} />
          <SkillItem title="Front-End Dev" value={85} />
          <SkillItem title="Back-End Dev" value={85} />
          <SkillItem title="Core Subjects" value={90} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
