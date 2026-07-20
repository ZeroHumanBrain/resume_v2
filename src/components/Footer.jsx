const ContactLink = ({ content, icon: Icon }) => (
  <a className="flex items-center gap-3 text-white text-base font-bold hover:text-rose-200 hover:scale-110 transition-all duration-300 cursor-pointer">
    <Icon className="w-5 h-5" />
    <span>{content}</span>
  </a>
);

export default function Footer() {
  const contacts = [
    {
      label: "电话",
      content: "1337588922",
      icon: (props) => (
        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      label: "邮箱",
      content: "a1337588922@163.com",
      icon: (props) => (
        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      label: "微信",
      content: "sxh390",
      icon: (props) => (
        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      ),
    },
    {
      label: "QQ",
      content: "1430105088",
      icon: (props) => (
        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer
      id="footer"
      className="h-[400px] w-full flex items-center justify-center bg-[url('/src/assets/chinaLow.svg')] bg-size-[100%_100%] bg-center relative"
    >
      <div className="absolute inset-0 bg-black/60" />

      {/* Contact Links */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-10">
        {contacts.map((c) => (
          <ContactLink key={c.label} {...c} />
        ))}
      </div>

      <h2 className="text-6xl font-bold text-white uppercase tracking-tighter relative z-10">
        Let's Connect
      </h2>
    </footer>
  );
}
