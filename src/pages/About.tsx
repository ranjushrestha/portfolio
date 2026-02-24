const About = () => {
  return (
    <div className="mt-5 ml-15 mr-20">
      {/* Heading */}
      <h2 className="font-bold text-5xl">About Me</h2>

      {/* Intro paragraph */}
      <p className="pt-4 font-semibold text-base max-w-3xl">
        Email Outreach Specialist helping B2B companies generate qualified meetings through data-driven cold email systems.
      </p>

      {/* 4 Info Sections */}
      <div className="mt-5 space-y-1">
        {/* Section 1 */}
        <div className="bg-blue-100 p-2 rounded-l-md border-l-8 border-blue-400">
          <h3 className="text-xl font-semibold">Cold Email Infrastructure</h3>
          <p className="text-gray-700 mt-1">
            Specialized in cold email infrastructure setup, domain warming, deliverability optimization, and campaign scaling.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-blue-100 p-4 rounded-l-md border-l-8 border-blue-400">
          <h3 className="text-xl font-semibold">B2B Expertise</h3>
          <p className="text-gray-700 mt-1">
            Experience working with SaaS, agencies, consultants, and service-based businesses.
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-blue-100 p-4 rounded-l-md border-l-8 border-blue-400">
          <h3 className="text-xl font-semibold">Performance Focus</h3>
          <p className="text-gray-700 mt-1">
            Focused on inbox placement, reply rate optimization, and automated lead generation systems.
          </p>
        </div>

        {/* Section 4 */}
        <div className="bg-blue-100 p-4 rounded-l-md border-l-8 border-blue-400">
          <h3 className="text-xl font-semibold">Technical Mastery</h3>
          <p className="text-gray-700 mt-1">
            Strong understanding of DNS setup (SPF, DKIM, DMARC), domain rotation, and inbox health management.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;