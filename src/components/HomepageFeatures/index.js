import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'User Guide',
    icon: '📖',
    description:
      'A reference guide you can read to go into depth with the knowledge of the app development, best practices, design rules, troubleshooting.',
    link: '/docs/user-guide',
    linkText: 'Learn more',
  },
  {
    title: 'API',
    icon: '⚡',
    description:
      '4WS.Platform allows you to create event-driven applications. Events are linked to javascript actions where you can include built-in functions provided by the Platform.',
    links: [
      {label: 'Web', to: '/docs/api'},
      {label: 'Mobile', to: '/docs/api-mobile'},
    ],
  },
  {
    title: 'Knowledge Base',
    icon: '💡',
    description:
      'A Search Engine and Frequently Asked Questions about the use of the Platform, with sections for the most common scenarios, including solutions and examples.',
    link: '/docs/knowledge-base',
    linkText: 'Learn more',
  },{
    title:"Jira Support",
    icon:"🛠️",
    description:"If you need support, you can open a ticket on our Jira Support Portal. Our team will assist you in resolving any issues or questions you may have.",
    link:"https://sinesy.atlassian.net/servicedesk/customer/portal/45",
    linkText:"Open a Ticket",
  }
];

function Feature({title, icon, description, link, linkText, links, contacts, isExternal}) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <div className={styles.featureContent}>
        <Heading as="h3" className={styles.featureTitle}>
          {link ? (
            isExternal ? (
              <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
            ) : (
              <Link to={link}>{title}</Link>
            )
          ) : (
            title
          )}
        </Heading>
        <p className={styles.featureDescription}>{description}</p>
        {link && linkText && (
          isExternal ? (
            <a href={link} className={styles.featureLink} target="_blank" rel="noopener noreferrer">
              {linkText}
            </a>
          ) : (
            <Link to={link} className={styles.featureLink}>
              {linkText}
            </Link>
          )
        )}
        {links && (
          <div className={styles.featureLinks}>
            {links.map((l, i) => (
              <span key={i}>
                {i > 0 && <span className={styles.linkSeparator}> | </span>}
                {l.to ? (
                  <Link to={l.to} className={styles.featureLink}>{l.label}</Link>
                ) : (
                  <a href={l.href} className={styles.featureLink} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                )}
              </span>
            ))}
          </div>
        )}
        {contacts && (
          <div className={styles.contactInfo}>
            {contacts.map((c, i) => (
              <div key={i}>
                <strong>{c.label}</strong>:{' '}
                <a href={c.href} className={styles.featureLink}>{c.value}</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
