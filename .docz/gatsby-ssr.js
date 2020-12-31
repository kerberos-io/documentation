import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-53584355-3"></script>,
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-53584355-3');
      </script>
  ])
}
