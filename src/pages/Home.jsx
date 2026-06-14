import React from 'react'
import { motion } from 'framer-motion'
import "../CSS/Home.css"
import '../index.css'

import photo from '../../public/Dhruv.jpeg'
import githubLogo from '../../public/github.png'
import linkedinLogo from '../../public/linkedin.png'
import gmailLogo from '../../public/gmail.png'
import instagramLogo from '../../public/insta.png'
import leetcodeLogo from '../../public/leetcode.png'
import About from './About'
import Projects from './Projects'
import SkillNetwork from './Skills'
import Certificates from './Certificates'
import Blog from './Blog'
import Resume from './Resume'
import Contact from './Contact'

export default function Home() {
  const sections = [
    { id: 'about', label: 'About', short: 'Background' },
    { id: 'projects', label: 'Projects', short: 'Work' },
    { id: 'skills', label: 'Skills', short: 'Stack' },
    { id: 'certificates', label: 'Certificates', short: 'Proof' },
    { id: 'blog', label: 'Blog', short: 'Notes' },
    { id: 'resume', label: 'Resume', short: 'PDF' },
    { id: 'contact', label: 'Contact', short: 'Reach out' },
  ]

  const professions = [
    'Full Stack Developer',
    'Problem Solver',
    'Web Developer',
  ]

  const connectLinks = [
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/dhruv-patel-31565627a/' },
    { img: gmailLogo, title: 'Gmail', link: 'mailto:dhruvpatel3358@gmail.com' },
    { img: instagramLogo, title: 'Instagram', link: 'https://www.instagram.com/' },
  ]

  const activityLinks = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/Dhruv084?tab=repositories' },
    { img: leetcodeLogo, title: 'LeetCode', link: 'https://leetcode.com/u/dp_06/' },
  ]

  const scrollToSection = (id) => {
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="home-page">
    <section className="home-section hero-section">
      {/* Typing Effect Styles */}
      <style>
        {`
          @keyframes typing { from { width: 0; } to { width: 100%; } }
          @keyframes blink { 50% { border-color: transparent; } }
        `}
      </style>

      {/* Top Section: Photo + Info */}
      <div className="home-top">
        {/* Left: Glowing Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="photo-ring"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="photo-frame"
          >
            <motion.img
              src={photo}
              alt="Dhruv Patel"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="profile-photo"
            />
          </motion.div>
        </motion.div>

        {/* Right: Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="hero-badge"
          >
            Single-page portfolio with route navigation still enabled
          </motion.div>

          <h1 className="home-title">
            Hi, I'm{' '}
            <motion.span
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="home-name"
            >
              Dhruv Patel
            </motion.span>
          </h1>

          {/* Typing Animated Text */}
          <p className="typing-effect">
            Full Stack Developer | Problem Solver.
          </p>

          {/* Profession Tags */}
          <motion.div className="profession-tags">
            {professions.map((role, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05, background: 'linear-gradient(90deg,var(--accent),var(--accent-2))' }} transition={{ type: 'spring', stiffness: 200 }} className="profession-tag">
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* Info Cards */}
          <motion.div className="info-cards">
            {[
              { label: '📍 Location', value: 'Surat, Gujarat, India' },
              { label: '💼 Expertise', value: 'Problem Solving, Full Stack Development' },
              { label: '📧 Contact', value: 'dhruvpatel3358@gmail.com' },
            ].map((info, i) => (
              <motion.div key={i} whileHover={{ y: -4, scale: 1.05 }} transition={{ type: 'spring', stiffness: 250 }} className="info-card">
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="section-nav-wrap"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.6 }}
      >
        <div className="section-nav-label">Scroll the story</div>
        <div className="section-nav">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className="section-nav-item"
              onClick={() => scrollToSection(section.id)}
            >
              <span>{section.label}</span>
              <small>{section.short}</small>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Links Row - Connect & Activity side by side */}
      <div className="links-row">
        {/* Connect with me Section */}
        <motion.div className="quick-links">
          <h2 className="quick-links-title">Connect with me</h2>
          <div className="quick-links-list">
            {connectLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                title={item.title}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 250 }}
              >
                <motion.img
                  src={item.img}
                  alt={item.title}
                  whileHover={{ filter: 'drop-shadow(0 0 15px var(--accent)) brightness(1.2)' }}
                  className="quick-link-img"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* See what I'm doing Section */}
        <motion.div className="quick-links">
          <h2 className="quick-links-title">See what I'm doing</h2>
          <div className="quick-links-list">
            {activityLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                title={item.title}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 250 }}
              >
                <motion.img
                  src={item.img}
                  alt={item.title}
                  whileHover={{ filter: 'drop-shadow(0 0 15px var(--accent)) brightness(1.2)' }}
                  className="quick-link-img"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

    </section>

      <div className="home-sections">
        {[
          { id: 'about', label: 'About', component: About },
          { id: 'projects', label: 'Projects', component: Projects },
          { id: 'skills', label: 'Skills', component: SkillNetwork },
          { id: 'certificates', label: 'Certificates', component: Certificates },
          { id: 'blog', label: 'Blog', component: Blog },
          { id: 'resume', label: 'Resume', component: Resume },
          { id: 'contact', label: 'Contact', component: Contact },
        ].map((section, index) => {
          const SectionComponent = section.component

          return (
            <motion.section
              key={section.id}
              id={section.id}
              className="home-panel"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
            >
              <div className="home-panel-chip">
                0{index + 1} / {section.label}
              </div>
              <SectionComponent />
            </motion.section>
          )
        })}
      </div>
    </div>
  )
}
