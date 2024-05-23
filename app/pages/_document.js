import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <script>
(function(window, document, script, layerName, id){
    window[layerName] = window[layerName] || [];
    window[layerName].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
    var f = document.getElementsByTagName(script)[0],
        j = document.createElement(script),
        dl = layerName!== 'dataLayer'? '&l=' + layerName : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + id + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-K36HJPK5');
</script>
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />

        </Head>
        <body>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K36HJPK5"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
