import React, { Component } from "react";

import { AnchorButton, Intent, ProgressBar } from "@blueprintjs/core";
import { Icon } from "react-icons-kit";

import { remove } from "react-icons-kit/fa/remove";
import "./assets/DraggableUploader.scss";
import {
  addLoadedFile,
  removeAllLoadedFile,
  onFileLoad,
} from "../redux/actions/postAction";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class ImageUpload extends Component {

  // Utilizing formData to get image from user
  onFileLoad(e) {
    const imageFile = e.currentTarget.files[0];
    console.log(imageFile);
    let fileReader = new FileReader();

    this.props.onFileLoad(imageFile);
    fileReader.onload = () => {
      const file = {
        data: fileReader.result,
        isUploading: false
      };
      //Add file
      this.addLoadedFile(file);
    };

    fileReader.onabort = () => {
      alert("Reading Aborted");
    };

    fileReader.onerror = () => {
      alert("Reading ERROR!");
    };

    fileReader.readAsDataURL(imageFile);
  }

  addLoadedFile(file) {
    this.props.addLoadedFile(file);
  }

  removeLoadedFile(file) {
    this.props.removeAllLoadedFile();
  }

  render() {
    let { loadedFiles } = this.props;
    console.log(loadedFiles);
    return (
      <div
        className="inner-container"
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div className="sub-header">Drag an Image</div>
        <div className="draggable-container">
          <input
            type="file"
            id="file-browser-input"
            name="file-browser-input"
            ref={input => (this.fileInput = input)}
            onDragOver={e => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onDrop={this.onFileLoad.bind(this)}
            onChange={this.onFileLoad.bind(this)}
          />
          <div className="files-preview-container ip-scrollbar">
            {loadedFiles.map((file, idx) => {
              return (
                <div className="file" key={idx}>
                  <img src={file.data} />
                  <div className="container">
                    <span className="progress-bar">
                      {file.isUploading && <ProgressBar />}
                    </span>
                    <span
                      className="remove-btn"
                      onClick={() => this.removeLoadedFile(file)}
                    >
                      <Icon icon={remove} size={19} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="helper-text">Drag and Drop Images Here</div>
          <div className="file-browser-container">
            <AnchorButton
              text="Browse"
              intent={Intent.PRIMARY}
              minimal={true}
              onClick={() => this.fileInput.click()}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = postState => {
  // let { postStatus, location, postType } = state.postReducer;
  let {
    fd,
    file,
    imageFile,
    loadedFiles
  } = postState.postReducer;
  return {
    fd,
    file,
    imageFile,
    loadedFiles
  };
};

const mapDispatchToProps = {
  addLoadedFile,
  removeAllLoadedFile,
  onFileLoad,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ImageUpload));
