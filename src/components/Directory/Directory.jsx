import React from "react";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

// import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../Menu-Item/MenuItem";

import "./Directory.scss";

// const sections = require('../../sections')

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

// const mapStateToProps = createStructuredSelector({
//   sections: selectDirectorySections
// });

const mapStateToProps = (state) => {
  return {
    sections: state.directory.sections,
  }
};

export default connect(mapStateToProps, null)(Directory);
