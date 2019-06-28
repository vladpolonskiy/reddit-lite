import React from 'react';
import { printTimeAgo } from '../../domain/utils';
import '../../styles/components/FeedItem.css';

interface Props {
  title?: string,
  postLink?: string,
  thumbnail?: string,
  username?: string,
  postedDate?: Date,
  numComments?: number,
};

const FeedItem: React.FunctionComponent<Props> = ({ title, postLink, username, postedDate, numComments }) => {
  return (
    <li className="feed-item">
      <span className="title">
        {title}
      </span>
      <div className="meta">
        {`Posted by ${username} ${printTimeAgo(postedDate)}`}
      </div>
      <div className="content"><a href={postLink}>{postLink}</a></div>
      <span className="comments">
        <a href={postLink}><span>{numComments}</span> Comments</a>
      </span>
    </li>
  );
};

export default FeedItem;