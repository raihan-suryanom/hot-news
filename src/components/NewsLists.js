function NewsLists({ children, column, className }) {
  const sectionStyle = `flex flex-wrap justify-between h-full ${
    column && 'flex-col'
  } ${className}`;

  return <section className={sectionStyle}>{children}</section>;
}

export default NewsLists;
