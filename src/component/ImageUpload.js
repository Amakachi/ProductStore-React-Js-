import React, { Component } from "react";
import styled from "styled-components";

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imagePreviewUrl: "" };
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log("handle uploading-", this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }

    return (
      <ImageStyle>
        <div className="previewComponent">
          <form onSubmit={e => this._handleSubmit(e)}>
            <input
              className="fileInput"
              type="file"
              onChange={e => this._handleImageChange(e)}
            />
            <button
              className="submitButton"
              type="submit"
              onClick={e => this._handleSubmit(e)}
            >
              Upload Image
            </button>
          </form>
          <div className="imgPreview">{$imagePreview}</div>
        </div>
      </ImageStyle>
    );
  }
}

const ImageStyle = styled.div`
.container{
    margin-bottom: 5rem;
    padding-bottom: 6rem;
}
  .fileInput {
    border-bottom: 4px solid #d3d3d3;
    border-right: 4px solid #d3d3d3;
    border-top: 1px solid #000;
    border-left: 1px solid #000;
    padding: 10px;
    margin: 15px;
    cursor: pointer;
  }
  .imgPreview {
    text-align: center;
    margin: 5px 15px;
    height: 200px;
    width: 500px;
    border-left: 1px solid #808080;
    border-right: 1px solid #808080;
    border-top: 5px solid #808080;
    border-bottom: 5px solid #808080;
  }
  .imgPreview img {
    width: 100%;
    height: 100%;
  }
  .previewText {
    width: 100%;
    margin-top: 20px;
  }
  .submitButton {
    padding: 12px;
    margin-left: 10px;
    background: #fff;
    border: 4px solid #d3d3d3;
    border-radius: 15px;
    font-weight: 700;
    font-size: 10pt;
    cursor: pointer;
  }
  .previewComponent{
      padding-right: 3rem;
      margin-bottom: 10rem;
  }
  .submitButton:hover {
    background: #efefef;
  }
`;
