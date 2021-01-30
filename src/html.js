import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id='___gatsby'
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        {/*RESPONSE TAP tracking code START*/}
        <script
          type='text/javascript'
          dangerouslySetInnerHTML={{
            __html: `
             var adiInit = "76225", adiRVO = true;
             var adiFunc = null;
             (function() {
                var adiSrc = document.createElement("script"); adiSrc.type = "text/javascript";
                adiSrc.async = true;
                adiSrc.src = ("https:" == document.location.protocol ? "https://static-ssl" : "http://static-cdn")
                  + ".responsetap.com/static/scripts/rTapTrack.min.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(adiSrc, s);
             })();`,
          }}
        />
        {/*RESPONSE TAP tracking code END*/}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
