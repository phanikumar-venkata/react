import React from 'react';

import Article from "../component/Article";

export default class Articles extends React.Component {
  render() {
    const {query} = this.props.location;
    const {params} = this.props;
    const {articleId} = params;
    const {date, filter} = query;

    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Fake Article",
      "Partial Article",
      "American Article",
      "Mexican Article",
    ].map((title, i) => <Article
                                 key={ i }
                                 title={ title } />);

    return (
      <div>
        <div className="page-header">
          <h1>Articles</h1>
        </div>
        article:
        { articleId }, date:
        { date }, filter:
        { filter }
        <div className="row">
          { Articles }
        </div>
      </div>
    )
  }
}