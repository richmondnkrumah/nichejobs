import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const RenderHtml = ({ content }: { content: string}) => {
  return <div className='flex flex-col gap-3'>{ReactHtmlParser(content)}</div>;
};

export default RenderHtml;
