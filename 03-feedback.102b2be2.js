function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var r,o,i,a,u,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function E(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function T(e){return c=e,u=setTimeout(F,t),l?E(e):a}function y(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function F(){var e=g();if(y(e))return S(e);u=setTimeout(F,function(e){var n=t-(e-f);return s?m(n,i-(e-c)):n}(e))}function S(e){return u=void 0,v&&r?E(e):(r=o=void 0,a)}function O(){var e=g(),n=y(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return T(f);if(s)return u=setTimeout(F,t),E(f)}return void 0===u&&(u=setTimeout(F,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},O.flush=function(){return void 0===u?a:S(g())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const E={FEEDBACK_FORM_STATE:"feedback-form-state",feedbackForm:document.querySelector(".feedback-form")};let T=JSON.parse(localStorage.getItem(E.FEEDBACK_FORM_STATE))||{};if(localStorage.getItem(E.FEEDBACK_FORM_STATE)){const{email:e,message:t}=E.feedbackForm.elements,n=JSON.parse(localStorage.getItem(E.FEEDBACK_FORM_STATE)),{email:r,message:o}=n;e.value=r||"",t.value=o||""}E.feedbackForm.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.email.value&&e.currentTarget.message.value&&(console.log(T),T={},localStorage.removeItem(E.FEEDBACK_FORM_STATE),e.currentTarget.reset())})),E.feedbackForm.addEventListener("input",e(t)((function({target:{name:e,value:t}}){T[e]=t,localStorage.setItem(E.FEEDBACK_FORM_STATE,JSON.stringify(T))}),500));
//# sourceMappingURL=03-feedback.102b2be2.js.map
