import React from 'react';
import { connect } from 'react-redux';
import FeedItem from '../components/FeedItem';
import { fetchNews } from '../../domain/actions/news';
import '../../styles/containers/Home.css';

interface Props {
  fetchNews: () => void,
  news?: { items: Array<any> },
}

interface DispatchProps {
  fetchNews: () => void,
}

interface StateProps {
  news?: { items: Array<any> },
}

class Home extends React.Component<Props> {
  timer: any = null;

  componentDidMount () {
    this.setFeedUpdate();
    this.props.fetchNews();
  }

  componentWillUnmount() {
    this.clearFeedUpdate();
  }

  clearFeedUpdate:() => void = () => {
    clearInterval(this.timer);
  }

  setFeedUpdate = () => {
    const UPDATE_TIME = 60000;
    this.timer = setInterval(this.props.fetchNews, UPDATE_TIME);
  }

  render() {
    const { news } = this.props;

    return (
      <ul className="home-page">
        {news && news.items.map(item => {
          const { author, url, title, num_comments, created_utc, thumbnail, id } = item.data;
          const thumbnailImage = thumbnail && thumbnail.includes('http') ? thumbnail : null;
          return (
            <FeedItem
              key={id}
              title={title}
              thumbnail={thumbnailImage}
              postLink={url}
              username={author}
              postedDate={new Date(created_utc)}
              numComments={num_comments}
            />
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state: StateProps) => ({ news: state.news });

const dispatchProps: DispatchProps = {
  fetchNews,
};

export default connect<StateProps, DispatchProps, Props>(mapStateToProps, dispatchProps)(Home);