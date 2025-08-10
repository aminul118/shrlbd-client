interface IHtml {
  content: string;
  className?: string;
}

const HtmlContent = ({ content, className }: IHtml) => {
  return <div className={className} dangerouslySetInnerHTML={{ __html: content }} />;
};

export default HtmlContent;
