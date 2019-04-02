import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import { Session } from "meteor/session";
import FlipMove from "react-flip-move";

import { Links } from "../api/links";
import LinksListItem from "./LinksListItem";

export default class LinksList extends Component {
  constructor(props) {
    super();
    this.state = {
      links: []
    };
  }

  componentDidMount() {
    this.LinksTRacker = Tracker.autorun(() => {
      Meteor.subscribe("links");
      let links = Links.find({
        visible: Session.get("showVisible")
      }).fetch();
      this.setState({ links });
    });
  }

  componentWillUnmount() {
    this.LinksTRacker.stop();
  }

  renderLinksListItems() {
    if (this.state.links.length === 0) {
      return (
        <div className="item">
          <p className="item__status-message">No Links Found</p>
        </div>
      );
    }

    return this.state.links.map(link => {
      const shortUrl = Meteor.absoluteUrl(link._id);
      return <LinksListItem key={link._id} shortUrl={shortUrl} {...link} />;
    });
  }

  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderLinksListItems()}
        </FlipMove>
      </div>
    );
  }
}
