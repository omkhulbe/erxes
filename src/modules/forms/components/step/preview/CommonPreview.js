import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'modules/common/components';
import { FormPreview } from './';
import {
  PreviewTitle,
  PreviewBody,
  BodyContent,
  PreviewWrapper,
  ThankContent
} from '../style';

const propTypes = {
  calloutTitle: PropTypes.string,
  bodyValue: PropTypes.string,
  formBtnText: PropTypes.string,
  calloutBtnText: PropTypes.string,
  color: PropTypes.string,
  theme: PropTypes.string,
  image: PropTypes.string,
  thankContent: PropTypes.string,
  carousel: PropTypes.string,
  fields: PropTypes.array,
  onFieldEdit: PropTypes.func,
  onSort: PropTypes.func,
  onChange: PropTypes.func
};

class CommonPreview extends Component {
  renderContent() {
    const {
      theme,
      color,
      calloutTitle,
      bodyValue,
      formBtnText,
      // calloutBtnText,
      image,
      fields,
      onFieldEdit,
      onSort,
      carousel,
      thankContent,
      onChange
    } = this.props;

    const success = !(carousel === 'success');
    const form = !(carousel === 'form');
    const callout = !(carousel === 'callout');

    return (
      <PreviewWrapper>
        <PreviewTitle style={{ backgroundColor: theme ? theme : color }}>
          {success && calloutTitle}
        </PreviewTitle>

        <PreviewBody embedded="embedded">
          {image &&
            success && (
              <div>
                <img src={image} alt="eee" />
              </div>
            )}

          <BodyContent>
            {success && bodyValue}

            {fields &&
              callout &&
              success && (
                <FormPreview
                  fields={fields}
                  onFieldEdit={onFieldEdit}
                  onSort={onSort}
                  onChange={onChange}
                />
              )}

            {thankContent &&
              callout &&
              form && (
                <ThankContent>
                  {thankContent}
                  <Button btnStyle="link">Close</Button>
                </ThankContent>
              )}

            {formBtnText &&
              success && (
                <Button
                  ignoreTrans
                  btnStyle="primary"
                  style={{ backgroundColor: theme ? theme : color }}
                >
                  {formBtnText}
                </Button>
              )}
          </BodyContent>
        </PreviewBody>
      </PreviewWrapper>
    );
  }
}

CommonPreview.propTypes = propTypes;

export default CommonPreview;
