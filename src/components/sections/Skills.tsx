import { Code2, Database, GraduationCap, Layers, BookOpen, Wrench, Briefcase, FileText, ExternalLink } from 'lucide-react'

const education = [
  {
    degree: 'B.Tech – Information Technology',
    institution: 'Anjalai Ammal Mahalingam Engineering College, Kovilvenni',
    year: '2022 – 2026',
    score: 'CGPA: 7.80',
  },
  {
    degree: 'HSC (12th)',
    institution: 'Don Bosco Matric Higher Secondary School',
    year: '2020 – 2022',
    score: '73%',
  },
  {
    degree: 'SSLC (10th)',
    institution: 'Don Bosco Matric Higher Secondary School',
    year: '2019 – 2020',
    score: '64.8%',
  },
]

const certifications = [
  {
    degree: 'Full Stack Web Development – MERN Stack',
    institution: 'CodeTech Technology Institute, Chennai',
    year: 'Jan 2025 – Present',
    score: 'In Progress',
  },
  {
    degree: 'Advanced Diploma in Python Programming (ADPP)',
    institution: 'Computer Software College (CSC), Thanjavur',
    year: 'Jun – Oct 2022',
    score: 'Grade A – Excellent',
  },
  {
    degree: 'Cyber Security Workshop',
    institution: 'Gateway Software Solutions, Coimbatore',
    year: 'Aug – Sep 2024',
    score: 'Certified',
  },
  {
    degree: 'Java Full Stack Internship',
    institution: 'Gradtwin, Chennai',
    year: 'Jan 2026 – Mar 2026',
    score: 'Certified',
  },
  {
    degree: 'Java & Application Support Internship',
    institution: 'Jadayau Software Technology, Thanjavur',
    year: 'Jun – Jul 2025',
    score: 'Certified',
  },
]

const skillCategories = [
  {
    icon: Code2,
    title: 'Languages',
    pills: ['Java', 'JavaScript', 'Python', 'C', 'C++'],
  },
  {
    icon: Layers,
    title: 'Frontend',
    pills: ['React.js', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3', 'Bootstrap'],
  },
  {
    icon: Database,
    title: 'Backend',
    pills: ['Node.js', 'Express.js', 'JSP / Servlets'],
  },
  {
    icon: Wrench,
    title: 'Database & Tools',
    pills: ['MongoDB', 'MySQL', 'Git', 'GitHub', 'VS Code', 'Eclipse', 'Linux'],
  },
]

const internships = [
  {
    title: 'Java Full Stack Intern',
    company: 'Gradtwin',
    location: 'Chennai, Tamil Nadu',
    duration: 'Jan 2026 – Mar 2026',
    points: [
      'Developed full stack features using Java, Spring framework, and React.js.',
      'Collaborated on debugging, testing, and code review tasks.',
      'Gained hands-on experience in MVC architecture and end-to-end development.',
    ],
  },
  {
    title: 'Java & Application Support Intern',
    company: 'Jadayau Software Technology',
    location: 'Thanjavur, Tamil Nadu',
    duration: 'Jun – Jul 2025',
    points: [
      'Assisted in application development, testing, and UI-related tasks.',
      'Troubleshot and resolved application issues, improving software workflows.',
      'Supported development of Java-based web systems under senior guidance.',
    ],
  },
  {
    title: 'Cyber Security Workshop Intern',
    company: 'Gateway Software Solutions',
    location: 'Coimbatore, Tamil Nadu',
    duration: 'Aug – Sep 2024',
    points: [
      'Completed hands-on workshop on Cyber Security concepts and practices.',
      'Trained under Hewlett Packard Enterprise delivery program.',
      'Gained exposure to secure system design and threat analysis.',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. Qualifications */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="text-gray-400">Education & Certifications</p>
        </div>

        {/* Education */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg">
              <GraduationCap size={18} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-100">Education</h3>
            <div className="flex-1 h-px bg-purple-500/20"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((q, index) => (
              <div key={index} className="relative bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <div className="space-y-1">
                  <h3 className="font-semibold text-gray-100 text-sm leading-snug">{q.degree}</h3>
                  <p className="text-xs text-gray-400 leading-snug">{q.institution}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300">{q.year}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-pink-900/40 border border-pink-500/30 text-pink-300">{q.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg">
              <BookOpen size={18} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-100">Certifications</h3>
            <div className="flex-1 h-px bg-purple-500/20"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((q, index) => (
              <div key={index} className="relative bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <div className="space-y-1">
                  <h3 className="font-semibold text-gray-100 text-sm leading-snug">{q.degree}</h3>
                  <p className="text-xs text-gray-400 leading-snug">{q.institution}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300">{q.year}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-pink-900/40 border border-pink-500/30 text-pink-300">{q.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Experience */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-400">Internships</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {internships.map((intern, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 flex flex-col">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg shrink-0">
                  <Briefcase size={18} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-100">{intern.title}</h3>
                  <p className="text-sm text-purple-400">{intern.company}</p>
                  <p className="text-xs text-gray-500 mb-3">{intern.location} · {intern.duration}</p>
                  <ul className="space-y-2">
                    {intern.points.map((point, i) => (
                      <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Skills */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400">Technologies I work with</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-xl p-6 border-l-2 border-purple-500 border-t border-r border-b border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg">
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-100 text-sm">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.pills.map((pill, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-md bg-purple-900/20 border border-purple-500/20 text-gray-300 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-200">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* 4. Resume */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-gray-400">View or download my resume</p>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 flex flex-col items-center gap-6 max-w-lg mx-auto w-full">
          <div className="p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full">
            <FileText size={32} className="text-white" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-100">Infant Richart</h3>
            <p className="text-sm text-purple-400 mt-1">Full Stack Developer</p>
            <p className="text-xs text-gray-500 mt-2">Java · MERN Stack · React.js · Node.js · MongoDB · MySQL</p>
          </div>
          <div className="flex gap-4">
            <a href="/Infant_Richart_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              <ExternalLink size={16} />
              View Resume
            </a>
            <a href="/Infant_Richart_Resume.pdf" download="Infant_Richart_Resume.pdf" className="flex items-center gap-2 px-8 py-3 border border-purple-500 rounded-lg font-semibold text-sm hover:bg-purple-500/10 transition-all text-gray-200">
              <FileText size={16} />
              Download
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}