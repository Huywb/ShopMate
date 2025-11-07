import React from 'react'
import { Link } from 'react-router-dom'

interface FooterLinkProps {
    title: String,
    links: {name: string, link: string}[]
}

const FooterLink = ({ title, links }: FooterLinkProps) => {
  return (
    <div>
        <h3 className='text-lg text-gray-800 mb-4'>{title}</h3>
        <ul className='space-y-2 text-gray-600'>
            {links.map((link, index) => (
                <li key={index} className='cursor-pointer hover:text-gray-800 transition-colors'>
                    <Link to={link.link}>{link.name}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default FooterLink
