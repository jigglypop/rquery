import React from "react";

export const ajax: IAjax = async function ({
  url,
  type,
  data,
  dataType,
  success,
  error,
}) {
  const response = await fetch(url, {
    method: type,
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    error();
  }
  const res = await response.json();
  success(res);
  return res;
};

// export const ajax: IAjax = function ({
//   url,
//   type,
//   data,
//   dataType,
//   success,
//   error,
// }) {
//   const requestDone = false;
//   const xml = new XMLHttpRequest();
//   xml.open(type || "GET", url, true);
//   if (data)
//     xml.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//   xml.setRequestHeader("X-Requested-With", "XMLHttpRequest");
//   if (xml.overrideMimeType) xml.setRequestHeader("Connection", "close");
//   const onreadystatechange = function (istimeout) {
//     // The transfer is complete and the data is available, or the request timed out
//     if (xml && (xml.readyState === 4 || istimeout === "timeout")) {
//       requestDone = true;
//       const status =
//         jQuery.httpSuccess(xml) && istimeout !== "timeout"
//           ? ifModified && jQuery.httpNotModified(xml, url)
//             ? "notmodified"
//             : "success"
//           : "error";

//       if (status != "error") {
//         var modRes = xml.getResponseHeader("Last-Modified");
//         if (ifModified && modRes) jQuery.lastModified[url] = modRes;
//         if (success) success(xml, status);
//         jQuery.event.trigger("ajaxSuccess");
//       } else {
//         if (error) error(xml, status);
//         jQuery.event.trigger("ajaxError");
//       }
//       jQuery.event.trigger("ajaxComplete");
//       if (!--jQuery.active) jQuery.event.trigger("ajaxStop");
//       if (ret) ret(xml, status);
//       xml.onreadystatechange = function () {};
//       xml = null;
//     }
//   };
//   xml.onreadystatechange = onreadystatechange;
//   if (jQuery.timeout > 0)
//     setTimeout(function () {
//       if (xml) {
//         xml.abort();
//         if (!requestDone) onreadystatechange("timeout");
//         xml = null;
//       }
//     }, jQuery.timeout);
//   xml.send(data);
// };

//   active: 0,
//   httpSuccess: function (r) {
//     try {
//       return (
//         (r.status >= 200 && r.status < 300) ||
//         r.status == 304 ||
//         (jQuery.browser.safari && r.status == undefined)
//       );
//     } catch (e) {}

//     return false;
//   },

//   httpNotModified: function (xml, url) {
//     try {
//       var xmlRes = xml.getResponseHeader("Last-Modified");

//       // Firefox always returns 200. check Last-Modified date
//       return (
//         xml.status == 304 ||
//         xmlRes == jQuery.lastModified[url] ||
//         (jQuery.browser.safari && xml.status == undefined)
//       );
//     } catch (e) {}

//     return false;
//   },

//   // Get the data out of an XMLHttpRequest.
//   // Return parsed XML if content-type header is "xml" and type is "xml" or omitted,
//   // otherwise return plain text.
//   httpData: function (r, type) {
//     var ct = r.getResponseHeader("content-type");
//     var data = !type && ct && ct.indexOf("xml") >= 0;
//     data = type == "xml" || data ? r.responseXML : r.responseText;

//     // If the type is "script", eval it
//     if (type == "script") eval.call(window, data);

//     // Get the JavaScript object, if JSON is used.
//     if (type == "json") eval("data = " + data);

//     return data;
//   },

//   // Serialize an array of form elements or a set of
//   // key/values into a query string
//   param: function (a) {
//     var s = [];

//     // If an array was passed in, assume that it is an array
//     // of form elements
//     if (a.constructor == Array) {
//       // Serialize the form elements
//       for (var i = 0; i < a.length; i++)
//         s.push(a[i].name + "=" + encodeURIComponent(a[i].value));

//       // Otherwise, assume that it's an object of key/value pairs
//     } else {
//       // Serialize the key/values
//       for (var j in a) s.push(j + "=" + encodeURIComponent(a[j]));
//     }

//     // Return the resulting serialization
//     return s.join("&");
//   };
