declare const __VERSION__: any;
declare const __VERSION_DATE__: any;

const conf = {
  version: typeof __VERSION__ !== "undefined" ? __VERSION__ : null,
  versionDate: typeof __VERSION_DATE__ !== "undefined" ? __VERSION_DATE__ : null,
  isDev: true
};

export default conf;
