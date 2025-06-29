import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { FaBriefcase, FaGraduationCap } from "react-icons/fa"

const Timeline = () => {
  const timelineEvents = [
    {
      date: "2023 - Present",
      title: "Software Engineer",
      location: "Google, Mountain View, CA",
      description:
        "Developing and maintaining large-scale web applications using React, Node.js, and GraphQL. Collaborating with cross-functional teams to deliver high-quality software solutions.",
      icon: <FaBriefcase />,
      iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
    },
    {
      date: "2018 - 2022",
      title: "Bachelor of Science in Computer Science",
      location: "Stanford University, Stanford, CA",
      description:
        "Graduated with honors, majoring in Computer Science. Focused on software engineering, algorithms, and data structures. Participated in various hackathons and coding competitions.",
      icon: <FaGraduationCap />,
      iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
    },
    {
      date: "2014 - 2018",
      title: "High School Diploma",
      location: "Palo Alto High School, Palo Alto, CA",
      description: "Graduated with honors. Participated in the Math Club and Science Olympiad.",
      icon: <FaGraduationCap />,
      iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
    },
    {
      date: "2010-2013",
      title: "Champion of Security in Jamaica",
      location: "Kingston, Jamaica",
      description:
        'When Ambassador Bridgewater assumed her duties in Jamaica, the bilateral relationship between the U.S. and Jamaica was strained and distrustful. Jamaica had been without a U.S. ambassador for over fifteen months and relations had been tested over the government of Jamaica\'s protracted refusal to extradite a "drug lord," Christopher "Dudas" Coke, who was wanted in the U.S. for drug and related crimes. Coke is now in prison in the U.S.\n\nAmbassador Bridgewater not only smoothed and recalibrated the relationship with the government. She worked on many fronts to ensure that the people of Jamaica understood that the U.S. relationship with Jamaica was not one-dimensional, focused exclusively on security partnerships, countering illegal narcotics trafficking and other criminal activity. She utilized many tools of diplomatic engagement including commercial, cultural, consular and public diplomacy avenues to successfully bridge the troubled waters she encountered to put the relationship back on track.',
      icon: <FaBriefcase />,
      iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
    },
  ]

  return (
    <VerticalTimeline>
      {timelineEvents.map((event, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          date={event.date}
          iconStyle={event.iconStyle}
          icon={event.icon}
        >
          <h3 className="vertical-timeline-element-title">{event.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{event.location}</h4>
          <p>{event.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  )
}

export default Timeline
